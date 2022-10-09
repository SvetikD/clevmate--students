var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync').create(),
    rename = require('gulp-rename'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    wait = require('gulp-wait');


gulp.task('scss', function(){
  return gulp.src(['app/scss/styles.scss', 'app/scss/print.scss'])
    .pipe(sourcemaps.init())
    .pipe(wait(1500))
    .pipe(sass({outputStyle: 'compressed', includePaths: ['node_modules']}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions']
      }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: 'static/css'}))
    .pipe(gulp.dest('dist/_Common/BaseMvcLogic/Styles'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function(){
  return gulp.src('app/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function () {
  return gulp.src([
    'app/js/libs/jquery.magnific-popup.min.js',
    'app/js/libs/jquery.sticky-sidebar.min.js',
    'app/js/libs/jquery.matchHeight.js',
    'app/js/libs/masonry.min.js',
    'app/js/libs/swiper-bundle.min.js'
  ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('dist/_Common/BaseMvcLogic/Sсripts'));
});


gulp.task('js-custom', function () {
  return gulp.src([
    'app/js/custom.js', 
    'app/js/testing.js'
  ])
    // .pipe(uglify())
    .pipe(gulp.dest('dist/_Common/BaseMvcLogic/Sсripts'));
});


gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "dist/",
          routes : {
            '/node_modules' : './node_modules'
        }
      }
  });
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
  gulp.watch('app/js/**/*.js', gulp.parallel('js-custom'));
});

gulp.task('default', gulp.parallel('scss', 'pug', 'js', 'js-custom', 'browser-sync', 'watch'))