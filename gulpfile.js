var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var exec = require("child_process").exec;
var del = require("del");
var parameters = require("./config/parameters");


//Server Tasks
gulp.task("server:copy-js", function() {
    gulp.src([parameters.server.serverAppPath + "/src/**/*.js"])
        .pipe(babel())
        .pipe(gulp.dest(parameters.server.distFolder + "/src"));
    gulp.src("./" + parameters.server.serverJsFile)
        .pipe(babel())
        .pipe(gulp.dest(parameters.server.distServerJsFolder));

});

gulp.task("start", (cb) => {
   exec("./node_modules/forever/bin/forever start -w  dist/app.js", (err, stdout, stderr) => {
       console.log(stdout);
       console.log(stderr);
       cb(err);
});
});

gulp.task("stop", (cb) => {
    exec("./node_modules/forever/bin/forever stop dist/app.js", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb();
});
});

gulp.task("restart", (cb) => {
    exec("./node_modules/forever/bin/forever restart dist/server.js", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
});
});

gulp.task("list", (cb) => {
    exec("./node_modules/forever/bin/forever list", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
});
});

gulp.task("server:clean", function () {
    del(parameters.server.distFolder);
    del(parameters.server.distServerJsFolder + '/' + parameters.server.serverJsFile);
    
});


//Client Tasks

gulp.task("client:copy-resources", function() {
    gulp.src(parameters.client.hbsFolder + "/**/*.*")
        .pipe(gulp.dest(parameters.client.distFolder+"/views"));

    gulp.src(parameters.client.imgSrcPath + "/**/*.*")
        .pipe(gulp.dest(parameters.client.distFolder + "/images"));

    return gulp.src(parameters.client.fontsPath + "/**/*.*")
        .pipe(gulp.dest(parameters.client.distFolder + "/fonts"));
});

gulp.task("client:clean", function() {
    del(parameters.client.distFolder);
});


//Aggregate tasks


gulp.task("clean", function () {
    del(parameters.other.distFolder);
});

gulp.task("build", ["client:copy-resources","server:copy-js"] );


gulp.task("watch", function () {
    gulp.watch(parameters.server.serverAppPath + "**/**/*.*",['build']);
    gulp.watch(parameters.client.clientAppPath + "**/**/*.*",['build']);
});