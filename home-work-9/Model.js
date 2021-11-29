export class Model {
    constructor(options) {
        this.onAddItem = options.onAddItem;
        this.onRemoveItem = options.onRemoveItem;
        this.list = []; // массив, хранит список элементов (строк)
        this.id = 0; // задаем счетчик id элементов
    }

    // метод, дающий возможность задавать callbaks не только через конструктор
    bindAddItemCallback = (func) => {  
        this.onAddItem = func;
    }

    getList = () => this.list; // получение массива


    // функция добавления элементов в список (массив)
    addItem = (value) => {
        if(!isNaN(+value)) return; //если item число, то ничего не делаем, не добавляем

        // описываем что из себя будет представлять каждый новый элемент (объект) item 
        const item = {
            id: this.id++, // получает новый уникальный id
            value, // вторым свойством будет введенное в input значение value
        }

        this.list.push(item); // добавляем в массив элемент item
        console.log(this.list); // выводим в консоль обновленный массив

        this.onAddItem?.(item); // если есть элемент, то запускаем callback
    }

    // функция по удалению элементов из списка
    removeItem = (id) => {
        this.list = this.list.filter(value => value.id !== +id); //оставляем все элементы, которые не равны item, а сам item удаляем

        this.onRemoveItem?.(id); // запуск callback функции удаления во View

        console.log(this.list); // вывод в консоль обновленного списка (массива)
    }
}