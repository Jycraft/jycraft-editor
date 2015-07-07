var gulp = require("gulp"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglifyjs"),
    livereload = require("gulp-livereload"),
    connect = require("gulp-connect");

var paths = {
    js: [
        "node_modules/angular/angular.min.js",
        "node_modules/angular-animate/angular-animate.min.js",
        "node_modules/angular-aria/angular-aria.min.js",
        "node_modules/angular-material/angular-material.min.js",
        "node_modules/angular-route/angular-route.min.js",
        "node_modules/ace-min-noconflict/ace.js",
        "node_modules/angular-ui-ace/src/ui-ace.js",
        "node_modules/angular-material-icons/angular-material-icons.min.js",
        "node_modules/ace-min-noconflict/mode-python.js"
    ],
    css: [
        "node_modules/angular-material/angular-material.min.css"
    ]
};


gulp.task("vendor-js", function () {
    return gulp.src(paths.js)
        .pipe(concat("externals.js"))
        .pipe(gulp.dest("app/lib"));
});

gulp.task("vendor-css", function () {
    return gulp.src(paths.css)
        .pipe(concat("externals.css"))
        .pipe(gulp.dest("app/lib"));
});

gulp.task("html", function () {
    gulp.src("")
        .pipe(connect.reload());
});

gulp.task("watch", function () {
    gulp.watch(["app/**/*.html", "app/css/*", "app/js/*"], ["html"]);
});

gulp.task("connect", function () {
    connect.server({
        root: "app",
        port: 3000,
        livereload: true
    });
});

gulp.task("default", ["vendor-js", "vendor-css",
    "connect", "watch"]);
