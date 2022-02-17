import browserSync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";
import strip from "gulp-strip-comments";
import fileConcat from "gulp-concat";
import rename from "gulp-rename";
import del from "del";

export const plugins = {
	browserSync: browserSync,
	newer: newer,
	if: ifPlugin,
	strip: strip,
	fileConcat: fileConcat,
	rename: rename,
	del: del
}