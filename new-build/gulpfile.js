import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
	isBuild: process.argv.includes( "--build" ),
	isDev: !process.argv.includes( "--build" ),
	path: path,
	gulp: gulp,
	plugins: plugins
}

import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/javascript.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { server } from "./gulp/tasks/server.js";
import { zip } from "./gulp/tasks/zip.js";

const fonts = gulp.series( otfToTtf, ttfToWoff, fontsStyle );
const mainTasks = gulp.series( fonts, gulp.parallel( html, scss, js, images ) );

function watcher() {
	gulp.watch( path.watch.html, html );
	gulp.watch( path.watch.scss, scss );
	gulp.watch( path.watch.js, js );
	gulp.watch( path.watch.images, images );
}

const dev = gulp.series( reset, mainTasks, gulp.parallel( watcher, server ) ); // development
const build = gulp.series( reset, mainTasks ); // production
const deployZIP = gulp.series( reset, mainTasks, zip ); // create production zip

export { dev, build, deployZIP }

gulp.task( "default", dev );