import isAuth from "./isAuth.js"; // был export default, импорт без {...}

function getInfo(module, name) {
  import(module) // загружает модуль и возвращает промис, результат - объект модуля
    .then((result) => {
      let Name = result.default;
      let user = new Name(name);
      /* eslint-disable */
        console.log(user); // вывод в консоль экземпляра класса
        /* eslint-enable */
        console.log(`Hello, ${name}!`); // eslint-disable-line
    });
}

isAuth() ? getInfo("./user.js", "John") : getInfo("./guest.js", "Guest"); // реализация динамической загрузки модулей в зависимости от результата isAuth
