var gulp = require('gulp');
var browserify = require('browserify');
var util = require('gulp-util');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
const rollup = require('rollup-stream');
const babel = require("@rollup/plugin-babel");

const config = {
    production: !!util.env.production,

    distLocation: "dist",
    srcLocation: "src"
};


gulp.task('default', function () {
    return browserify('./src/index.js', {
        debug: false, bundleExternal: true
    })
    .transform(babelify, {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            ["babel-plugin-module-resolver",
            {
              "alias": {
                'react': 'preact/compat',
                'react-dom': 'preact/compat',
              }
            }
          ],
          ["@babel/plugin-transform-react-jsx", {  "runtime": "automatic", "importSource": "preact"}] ,
          ]
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/'));
});

