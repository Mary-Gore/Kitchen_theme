// Получение имени папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './docs';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    php: `${buildFolder}`
  },
  src: {
    js: `${srcFolder}/js/index.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    svgIcons: `${srcFolder}/svgIcons/*.svg`,
    php: `${srcFolder}/server.php`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js}`,
    images: `${srcFolder}/img/**/*.{svg, jpg,jpeg,png,gif,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
  },
  clean: `${buildFolder}/*`,
  notClean: `!${buildFolder}/img`,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: 'test'
}