const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`, // Подключаем sourcemap
  devServer: {
    // Автоматическая перезагрузка страницы
    // По умолчанию приложение будет доступно по адресу http://localhost:8080
    // Лудше открывать в режиме ингоннито, чтобы браузер не кешировал файлы сборки
    watchFiles: [`src/**/*.js', 'public/**/*`], // Сюда вы ставите пути к файлам,
    // за изменениями которых следует наблюдать
  }
};
