// const { series, parallel } = require('gulp');
// const gulp = require('gulp');
// const postcss = require('gulp-postcss');
// const scss = require('gulp-sass');
// const concat = require('gulp-concat');
// const rename = require('gulp-rename');
// const header = require('gulp-header');
// const through2 = require('through2');
// import ts from 'gulp-typescript';

// const tsDefaultReporter = ts.reporter.defaultReporter();
// const merge2 = require('merge2');

// const postcssConfig = require('./postcssConfig');
// import tsConfig from './tsconfig';
// const cwd = process.cwd();
// const pkg = require(path.join(cwd, 'package.json'));
// const paths = 'src/**/style/index.scss';
// import watch from 'gulp-watch';

import { series, src, dest } from 'gulp';
import process from 'process';
import rimraf from 'rimraf';
import babel from 'gulp-babel';
import debug from 'gulp-debug';
import { spawn } from 'child_process';
import babelrc from '../babelrc';
import { getProjectUrl } from '../helpers';

const libDir = getProjectUrl('packaged', 'lib');
const esDir = getProjectUrl('packaged', 'es');

function clean(dir: string) {
    rimraf.sync(dir);
}
const source = [
    getProjectUrl('component/*/*.tsx'),
    getProjectUrl('component/*/*.ts'),
    getProjectUrl('component/*.tsx'),
    // getProjectUrl('typings/**/*.ts'),
];
function swallowError(error: any) {
    // If you want details of the error in the console
    console.error(error.toString());
    // todo 完善删除
    clean(esDir);
    clean(libDir);
}
function convertTstoJsByBabel(file: string[], output: string, modules?: boolean) {
    const title = modules === false ? 'ts -> es' : 'ts -> lib';
    return new Promise((res, rej) => {
        src(file)
            .pipe(debug({ title }))
            .pipe(babel(babelrc(modules)))
            .on('error', rej)
            .pipe(dest(output))
            .on('end', res);
    });
}
function convertTstoDtsByTypescript() {
    console.log('[es] convert Ts to Dts By Typescript...');
    const tsc = spawn('tsc', ['-pretty', '--emitDeclarationOnly', '-p', '../../tsconfig.dts.json'], {
        stdio: 'inherit',
        shell: process.platform === 'win32',
    });
    return new Promise((res, rej) => {
        tsc.on('exit', code => {
            if (!code) {
                res();
            } else {
                console.log(code);
                rej(code);
            }
        });
    });
}

function copyEsDtsTolib() {
    console.log('[lib]  convert Ts to Dts By Typescript...');
    const dtsFile = [getProjectUrl('packaged/es/**/*.d.ts')];
    return new Promise((res, rej) => {
        src(dtsFile)
            .pipe(dest(libDir))
            .on('error', rej)
            .on('end', res);
    });
}

function compile(modules?: boolean) {
    clean(modules !== false ? libDir : esDir);
    // copyScss(modules);
    // buildCssJs(modules);
    const dir = modules === false ? esDir : libDir;
    return Promise.all([
        convertTstoJsByBabel(source, dir, modules),
        modules !== false ? copyEsDtsTolib() : convertTstoDtsByTypescript(),
    ]).catch(err => {
        console.log(err);
        swallowError(err);
    });
}

function compileWithEs() {
    return compile(false);
}
function compileWithCommon() {
    return compile();
}

// function convertTstoDtsByTypescript(tsProject: any, file: string[], output: string, modules?: boolean) {
//     const title = modules === false ? 'd.ts -> es' : 'd.ts -> lib';
//     return new Promise((res, rej) => {
//         src(file)
//             .pipe(debug({ title }))
//             .pipe(tsProject(tsDefaultReporter))
//             .on('error', rej)
//             .dts.pipe(dest(output))
//             .on('end', res);
//     });
// }
// const $ = {
//     path: require('path'),
// };
// const singleFileReg = new RegExp(/component\\+(\w+)\\+/);
// function dev() {
//     let timer: NodeJS.Timeout;
//     let prePath: string;
//     // const tsProject = ts.createProject(tsConfig());

//     watch(source, f => {
//         const { path } = f;
//         if (prePath === path) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             const cpName = (path.match(singleFileReg) || [])[1] || '';
//             [false].map(modules => {
//                 const cpPath = $.path.join(modules === false ? esDir : libDir, cpName);
//                 convertTstoJsByBabel([path], cpPath, modules);
//                 // convertTstoDtsByTypescript(tsProject, [path], cpPath, modules);
//                 // const tsResult = tsTojs([path]);
//                 // const tsStream = babelCompile(tsResult.js, modules);
//                 // const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));
//                 // return merge2([tsStream, tsd]);
//             });
//         }, 300);
//     });
// }
// export default { compile: parallel(compileWithEs, compileWithCommon), dev: parallel(dev) };
exports.compile = series(compileWithEs, compileWithCommon);
// exports.dev = dev;
// exports.tt = copyEsDtsTolib;
// exports.default = clean;
