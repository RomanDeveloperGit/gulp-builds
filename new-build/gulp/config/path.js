import * as nodePath from "path";
const rootFolder = nodePath.basename( nodePath.resolve() );

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/images/`,
		fonts: `${buildFolder}/fonts/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: [`${srcFolder}/js/libs/*.js`, `${srcFolder}/js/plugins/*.js`, `${srcFolder}/js/index.js`],
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
		svg: `${srcFolder}/images/**/*.svg`,
		fonts: `${srcFolder}/fonts/**/*.{otf,ttf,woff,woff2}`
	},
	watch: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
		fonts: `${srcFolder}/fonts/**/*.{otf,ttf,woff,woff2}`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}