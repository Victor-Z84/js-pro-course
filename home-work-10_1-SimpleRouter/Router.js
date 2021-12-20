export class Router {
    constructor() {
        this.rootElem = document.getElementById("root"); // получаем элемент root
    }

    init() {
        this.initEvents();
        this.onChangeHash();
    }

    // Добавляем обработчик события на изменения хэш в url и вызываем метод загрузки страницы
    initEvents() {
        window.addEventListener('hashchange', this.onChangeHash);
    }

    setRoutes = (routes) => {
        this.routes = routes;
    }

    // Получение route, сравнение с хэш 
    onChangeHash = () => {
        const hash = location.hash.substring(1); // получаем имя хэш, отсекая 1й символ #

        let route = this.routes.find(route => route.hash === hash); // проверка есть ли данный route среди имеющихся хэш
        
        // если заданного route нет среди хэш
        if(!route) {
            route = this.routes.find(route => route.isDefault); 
        }

        // если заданный route есть среди хэш
        if (route) {
            this.loadPage(route.html); //запуск функции загрузки страницы
        }
    }

    // Функция загрузки страницы
    loadPage = html => {
        const xhr = new XMLHttpRequest(); // создаем новый XMLHttpRequest-объект

        xhr.onload = () => {
            if (xhr.status === 200) {
                this.rootElem.innerHTML = xhr.response;
            } else {
                alert(`Ошибка соединения`); //отработает, когда запрос не получается выполнить
            }
        };

        xhr.open("GET", html, true); // инициализация XMLHttpRequest
        xhr.send(); // отправка XMLHttpRequest
    }
}