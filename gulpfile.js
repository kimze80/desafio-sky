const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');

const files = { 
  scssPath: 'src/styles/**/*.scss',
  jsPath: 'src/scripts/**/*.js'
}

function scssTask(){    
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass()) 
    .pipe(concat('style.css'))
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist')
  );
}

function jsTask(){
  return src([files.jsPath])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('dist')
  );
}

function cacheBustTask(){
  var cbString = new Date().getTime();
  return src(['index.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('.'));
}

function watchTask(){
  watch([files.scssPath, files.jsPath],
    parallel(scssTask, jsTask),
    cacheBustTask
  );    
}

exports.default = series(
  parallel(scssTask, jsTask), 
  cacheBustTask,
  watchTask
);
