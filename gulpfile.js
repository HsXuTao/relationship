const fs = require('fs');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");

gulp.task('mini', () => (
  gulp.src('script/relationship.js')
  .pipe(uglify())
  .pipe(rename("relationship.min.js"))
  .pipe(gulp.dest('dist/'))
  
));