export class View {
    constructor(options) {
        //задаем callbacks через конструктор
        this.onAddCallback = options.onAddCallback; 
        this.onRemoveCallback = options.onRemoveCallback;

        // поиск в DOM элементов и присвоение их значений переменным
        this.input = document.getElementById("list-input"); // для поля ввода input
        this.btn =  document.getElementById("add-btn"); // для кнопки btn
        this.list =  document.getElementById("list"); // для списка list

        this.initListeners(); // вызов метода реализации наших задач
    }

    // Реализация задач при нажатии на кнопку btn и на элемент списка list (родитель для li)
    initListeners = () => {
        this.btn.addEventListener("click", this.handleBtnClick); // обработчик событий на кнопку btn
        this.list.addEventListener("click", this.handleListClick); // обработчик событий на родителя - list (делегирование)
    }

    // Функция обработки события по нажатию на кнопку btn (Add)
    handleBtnClick = (event) => {
        event.preventDefault(); // отменяем действие браузера по умолчанию - отправку формы и перезагрузку страницы
        let value = this.input.value; // копируем значение из input
        this.input.value = ""; // очистка поля ввода после нажатия btn и передачи value
        this.onAddCallback?.(value); // запускаем callback функцию добавления value по нажатию на btn, если значение не null
    }

    // Функция обработки события при нажатии на элемент списка
    handleListClick = (event) => {   
        if (event.target.tagName !== "LI") return; // если нажатие произошло не на LI, тогда ничего не делаем
        const id = event.target.id; // создаем переменную id и присваиваем ей id элементы LI, где был click
        this.onRemoveCallback?.(id); // запуск callback функции удаления элемента с заданным id
    }

    // Функция создания, присвоения значения и добавления элемента в список list
    addItem = (item) => {
        const newElem = document.createElement("li"); // создаем элемент li
        newElem.innerText = item.value; // получаем текстовое содержимое из value для li
        newElem.id = item.id;
        this.list.appendChild(newElem); // добавляем созданный элемент li в list
    }

    // Функция удаления элемента с заданным id
    removeItem = (id) => {
        const elem = document.getElementById(id); // получаем элемент по id
        elem.remove(); // удаляем элемент с полученным id
    }
}