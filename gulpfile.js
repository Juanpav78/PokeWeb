'use strict';
const {src, dest, watch, parallel, series} = require('gulp');
 
 
//css
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
//js
const autoPrefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');

const path = {
    scss: 'src/scss/**/*.scss',
    css: 'build/css/app.css',
    js: 'src/js/**/*.js',
}
 
 
function compileSass() {
    return src(path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoPrefixer(),cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'));
}
 
function compileJS(){
    return src(path.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));
}
 
 
 
function autoCompile(){
    watch(path.scss,compileSass);
    watch(path.js, compileJS);
}

exports.default = series(compileSass,compileJS,autoCompile);
exports.autoCompile = autoCompile;
