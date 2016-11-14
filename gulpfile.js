const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task("default", function(){
  browserSync.init({
      server: {
          baseDir: "./"
      }
  })

    gulp.watch("lib/*.js").on("change", browserSync.reload)
  gulp.watch("*.html").on("change", browserSync.reload)
})
