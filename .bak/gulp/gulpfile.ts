// const { series, parallel } = require('gulp');
const $ = {
    path: require('path'),
};
import { parallel, src, dest } from 'gulp';
// const gulp = require('gulp');
// const postcss = require('gulp-postcss');
// const scss = require('gulp-sass');
// const concat = require('gulp-concat');
// const rename = require('gulp-rename');
// const header = require('gulp-header');
// const through2 = require('through2');
import watch from 'gulp-watch';
import rimraf from 'rimraf';
import babel from 'gulp-babel';
import debug from 'gulp-debug';
import ts from 'gulp-typescript';
const tsDefaultReporter = ts.reporter.defaultReporter();
// const merge2 = require('merge2');

import babelrc from './babelrc';
// const postcssConfig = require('./postcssConfig');
import tsConfig from './tsconfig';
// const cwd = process.cwd();
// const pkg = require(path.join(cwd, 'package.json'));
// const paths = 'src/**/style/index.scss';
// const { getProjectUrl } = require('./helpers');
import { getProjectUrl } from './helpers';

const libDir = getProjectUrl('packaged', 'lib');
const esDir = getProjectUrl('packaged', 'es');
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(dir: string) {
    // body omitted
    rimraf.sync(dir);
}

// function tsTojs(file) {
//     const tsProject = ts.createProject(tsConfig);
//     return src(file)
//         .pipe(debug({ title: 'ts -> js' }))
//         .pipe(tsProject(tsDefaultReporter));
// }

// function babelCompile(js, modules) {
//     return js
//         .pipe(debug({ title: modules === false ? 'js -> es' : 'js -> lib' }))
//         .pipe(babel(babelrc(modules)))
//         .on('error', function(err) {
//             console.log('Less Error!', err.message);
//         })
//         .pipe(gulp.dest(modules === false ? esDir : libDir));
// }
const source = [
    getProjectUrl('component/*/*.tsx'),
    getProjectUrl('component/*/*.ts'),
    getProjectUrl('component/*.tsx'),
    // getProjectUrl('typings/**/*.ts'),
];

function convertTstoJsByBabel(file: string[], output: string, modules?: boolean) {
    const title = modules === false ? 'ts -> es' : 'ts -> lib';
    return src(file)
        .pipe(debug({ title }))
        .pipe(babel(babelrc(modules)))
        .pipe(dest(output));
}

function convertTstoDtsByTypescript(file: string[], output: string, modules?: boolean) {
    const title = modules === false ? 'd.ts -> es' : 'd.ts -> lib';
    const tsProject = ts.createProject(tsConfig());
    return src(file)
        .pipe(debug({ title }))
        .pipe(tsProject(tsDefaultReporter))
        .dts.pipe(dest(output));
}

function compile(modules?: boolean) {
    clean(modules !== false ? libDir : esDir);
    // copyScss(modules);
    // buildCssJs(modules);
    const dir = modules === false ? esDir : libDir;
    convertTstoJsByBabel(source, dir, modules);
    convertTstoDtsByTypescript(source, dir, modules);

    // convertTstoJsByBabel(source, modules, modules === false ? esDir : libDir);
    // const tsResult = tsTojs(source);
    // const tsStream = babelCompile(tsResult.js, modules);
    // const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));
    // return merge2([tsStream, tsd]);
}

function compileWithEs(cb: any) {
    compile(false);
    cb();
}
function compileWithCommon(cb: any) {
    compile();
    cb();
}

const singleFileReg = new RegExp(/component\\+(\w+)\\+/);
function dev() {
    watch(source, f => {
        const { path } = f;
        const cpName = (path.match(singleFileReg) || [])[1] || '';
        return [false, undefined].map(modules => {
            const cpPath = $.path.join(modules === false ? esDir : libDir, cpName);
            convertTstoJsByBabel([path], cpPath, modules);
            convertTstoDtsByTypescript([path], cpPath, modules);
            // const tsResult = tsTojs([path]);
            // const tsStream = babelCompile(tsResult.js, modules);
            // const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));
            // return merge2([tsStream, tsd]);
        });
    });
}
// export default { compile: parallel(compileWithEs, compileWithCommon), dev: parallel(dev) };
exports.compile = parallel(compileWithEs, compileWithCommon);
// exports.dev = parallel(dev);
// exports.default = clean;
