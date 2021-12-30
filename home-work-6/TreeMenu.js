export class TreeMenu extends HTMLElement {
    
    // браузер вызывает этот метод при добавлении элемента в документ
    connectedCallback() {
       this.initShadow();
       this.initEventsListener();
    }

    // браузер вызывает этот метод при удалении элемента из документа
    disconnectedCallback() {
        this.removeEventsListener();
    }

    // Функция инициализации Shadow root
    initShadow = () => {
        this.attachShadow({ mode: "open" });
        const tmpl = document.getElementById("templ__tree-menu");
        this.shadowRoot.append(tmpl.content.cloneNode(true));
    }

    // Обработчик по нажатию на click
    initEventsListener = () => {
        this.shadowRoot.querySelector(`slot[name="title"]`)
            .addEventListener("click", this.handleToggleMenu);
        
        this.shadowRoot.querySelector(`slot[name="item"]`)
            .addEventListener("click", this.handleSelectItem);
    }

    //метод удаления обработчика
    removeEventsListener = () => {
        this.shadowRoot.querySelector(`slot[name="title"]`)
            .removeEventListener("click", this.handleToggleMenu);

        this.shadowRoot.querySelector(`slot[name="item"]`)
            .removeEventListener("click", this.handleSelectItem);
    }

    //метод переключения пунктов меню
    handleToggleMenu = () => {
        this.shadowRoot.querySelector(`slot[name="item"]`).classList.toggle("show");
    }
    
    handleSelectItem = (e) => {
        if (e.target.getAttribute("slot") !== "item") return;
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("select", {
            bubbles: true,
            composed: true,
            detail: e.target,
        }))
    }
}