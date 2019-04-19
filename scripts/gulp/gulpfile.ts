import { series, src, dest } from 'gulp';
import { spawn } from 'child_process';

import replace from 'gulp-replace';
import rename from 'gulp-rename';
import scss from 'gulp-sass';
import process from 'process';
import rimraf from 'rimraf';
import babel from 'gulp-babel';
import debug from 'gulp-debug';

import babelrc from '../babelrc';
import { getProjectUrl } from '../helpers';

const libDir = getProjectUrl('compiled', 'lib');
const esDir = getProjectUrl('compiled', 'es');

function clean(dir: string) {
    rimraf.sync(dir);
}

function swallowError(error: any) {
    // If you want details of the error in the console
    console.error(error.toString());
    // todo 完善删除
    clean(esDir);
    clean(libDir);
    throw error;
}

const source = [
    getProjectUrl('component/*/*.tsx'),
    getProjectUrl('component/*/*.ts'),
    getProjectUrl('component/*/style/*.tsx'),
    // getProjectUrl('component/*.tsx'),
    // getProjectUrl('typings/**/*.ts'),
];
function convertTstoJs(output: string, modules?: boolean) {
    const title = modules === false ? 'ts -> es' : 'ts -> lib';
    return new Promise((res, rej) => {
        src([getProjectUrl('component/index.tsx')])
            // .pipe(replace())
            .pipe(src(source))
            .pipe(debug({ title }))
            .pipe(babel(babelrc(modules)))
            .on('error', rej)
            .pipe(dest(output))
            .on('end', res);
    });
}
function convertTstoDts() {
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

function copyDts() {
    console.log('[lib]  convert Ts to Dts By Typescript...');
    const dtsFile = [getProjectUrl('compiled/es/**/*.d.ts')];
    return new Promise((res, rej) => {
        src(dtsFile)
            .on('error', rej)
            .pipe(dest(libDir))
            .on('end', res);
    });
}

const scssSource = [getProjectUrl('component/**/style/*.scss')];
function copyScss(modules?: boolean) {
    const title = modules === false ? 'scss -> es' : 'scss -> lib';
    return new Promise((res, rej) => {
        src(scssSource)
            .pipe(debug({ title }))
            .on('error', rej)
            .pipe(dest(modules === false ? esDir : libDir))
            .on('end', res);
    });
}

function convertScssToCss(modules?: boolean) {
    const title = modules === false ? 'css -> es' : 'css -> lib';
    return new Promise((res, rej) => {
        src(scssSource)
            .pipe(debug({ title }))
            .pipe(scss())
            .on('error', rej)
            .pipe(dest(modules === false ? esDir : libDir))
            .on('end', res);
    });
}

const styleIndexSource = [getProjectUrl('component/**/style/index.tsx')];
function buildCssJs(modules?: boolean) {
    return new Promise((res, rej) => {
        src(styleIndexSource)
            .pipe(replace(/\/style\/?'/g, "/style/css'"))
            .pipe(replace(/\.scss/g, '.css'))
            .pipe(
                rename({
                    basename: 'css',
                    extname: '.js',
                }),
            )
            .on('error', rej)
            .pipe(dest(modules === false ? esDir : libDir))
            .on('end', res);
    });
}

function compile(modules?: boolean) {
    clean(modules !== false ? libDir : esDir);
    const dir = modules === false ? esDir : libDir;
    return Promise.all([
        copyScss(modules),
        convertScssToCss(modules),
        buildCssJs(modules),
        convertTstoJs(dir, modules),
        modules !== false ? copyDts() : convertTstoDts(),
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

exports.compile = series(compileWithEs, compileWithCommon);
