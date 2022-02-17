import uglify from "gulp-uglify-es";
import concat from "gulp-concat";
import babel from "gulp-babel";

export const js = () => {
	return app.gulp.src( app.path.src.js, { sourcemaps: app.isDev } )
		.pipe( concat( "index.js" ) )
		.pipe( babel({
            presets: ['@babel/env']
        }))
		.pipe( app.plugins.strip() )
		.pipe( app.gulp.dest( app.path.build.js ) )
		.pipe(
			app.plugins.if(
				app.isBuild,
				uglify.default()
			)
		)
		.pipe( app.plugins.rename({
			extname: ".min.js"
		}))
		.pipe( app.gulp.dest( app.path.build.js ) )
		.pipe( app.plugins.browserSync.stream() );
}