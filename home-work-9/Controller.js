export class Controller {
    // работает и с View, и с Model, передаем их в конструктор
    constructor(View, Model) {
        // получаем классы и создаем экземпляры классов
        this.view = new View({
            onAddCallback: this.handleAddItem,
            onRemoveCallback: this.handleRemoveItem,
        }); 
        this.model = new Model({
            onAddItem: this.onAddItemToModel,
            onRemoveItem: this.onRemoveItem,
        });
        
       
        //имитация сервера, с которого также приходят данные для добавления в list
        {
            setTimeout(() => this.handleAddItem("First value from server"), 3000); // через 3 сек
            setTimeout(() => this.handleAddItem("Second value from server"), 5000); // через 5 сек
        }
    }

    
    // View callbacks
    // вызов функции добавления элемента по нажатию 
    handleAddItem = (value) => {
        this.model.addItem(value); // вызов метода addItem в Model и передаем туда value
    }

    // удаление элемента с данным id по нажатию на него из Model
    handleRemoveItem = (id) => {
        this.model.removeItem(id);
    }


    //Model callbacks
    // вызовы функции передачи элемента в консоль
    onAddItemToModel = (item) => {
        this.view.addItem(item); // вызов метода addItem добавления во View элемента
    }

    // удаление элемента с данным id по нажатию на него из Wiew
    onRemoveItem = (id) => {
        this.view.removeItem(id);
    }
}