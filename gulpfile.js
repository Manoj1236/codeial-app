const gulp = require('gulp');
const rev = require('gulp-rev');
const sass = require('gulp-dart-sass');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
 


 
gulp.task ('buildStyles', function() {
    return gulp.src('./assets/**/*.css')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(rev())
      .pipe(gulp.dest('./public/assets'))
      .pipe(rev.manifest({
        cwd: 'public',
        merge: true
      }))
      .pipe(gulp.dest('./public/assets'))
  });
  
   

  gulp.task('compress', function () {
    return gulp.src('./assets/**/*.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest({
        cwd: 'public',
        merge: true
      }))
      .pipe(gulp.dest('./public/assets'))
});

gulp.task('images', function() {
    return gulp.src('./assets/**/*.+(png|jpg|gif|svg|jpeg)' )
     .pipe(imagemin())
     .pipe(rev())
     .pipe(gulp.dest('./public/assets'))
     .pipe(rev.manifest({
        cwd: 'public',
        merge: true
      }))
      .pipe(gulp.dest('./public/assets'))
 });




//  //empty the public/assets directory
//  gulp.task('clean:assets', function(){
//     del.sync('./public/assets');

//  });

 gulp.task('build', gulp.series('buildStyles','compress','images'), function(){
    console.log('building assets');
 });