'use strict';

import fs from 'fs';
import { TsConfig } from 'gulp-typescript/release/types';
// const path = require('path');
// const assign = require('object-assign');
// const { getProjectUrl } = require('./helpers');
import { getProjectUrl } from './helpers';
export default function() {
    let my: TsConfig = {};
    if (fs.existsSync(getProjectUrl('tsconfig.json'))) {
        my = require(getProjectUrl('tsconfig.json'));
    }
    return Object.assign(my.compilerOptions, {
        noUnusedParameters: true,
        noUnusedLocals: true,
        strictNullChecks: true,
        target: 'es6',
        jsx: 'preserve',
        moduleResolution: 'node',
        declaration: true,
        allowSyntheticDefaultImports: true,
    });
}
