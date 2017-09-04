var express = require('express');
var gulp = require('gulp');

var app = express();
app.use('/', express.static('docs'));


gulp.task('express', function() {
    var server = app.listen(3000, function() {
        console.log("Server is running at 3000");
    });
});

gulp.task('default', ['express']);