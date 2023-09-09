import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";
import svgmin from "gulp-svgmin";

export const svgSprive = () => {
  return app.gulp.src(app.path.src.svgIcons, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        },
      })
    )
    // cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(app.plugins.replace('&gt;', '>')) 
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`,
          // Создать файл с перечнем иконок
          example: true
        }
      }
    }))
    
    .pipe(app.gulp.dest(app.path.build.images));
}