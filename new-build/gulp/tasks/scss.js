import dartSass from "sass";
import gulpSass from "gulp-sass";

import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpCss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";

const sass = gulpSass( dartSass );

export const scss = () => {
	return app.gulp.src( app.path.src.scss, { sourcemaps: app.isDev } )
		.pipe( sass() )
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpCss({
					webpClass: ".webp",
					noWebpClass: ".no-webp"
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 7 versions"],
					cascade: false
				})
			)
		)
		.pipe( app.gulp.dest( app.path.build.css ) )
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss()
			)
		)
		.pipe( app.plugins.rename({
			extname: ".min.css"
		}))
		.pipe( app.gulp.dest( app.path.build.css ) )
		.pipe( app.plugins.browserSync.stream() );
}