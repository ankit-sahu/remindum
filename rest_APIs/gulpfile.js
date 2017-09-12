//gulp is a task runner
//nodemon pluggin is needed to run the script & watch the file extensions
var gulp = require("gulp"),
    nodemon = require("gulp-nodemon");

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT : 3001
        },
        ignore: ['.node/_modules/**']
    })
    .on(restart, function(){
        console.log("restarting server");
    })
});    