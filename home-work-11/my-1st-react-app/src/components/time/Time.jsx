import React from "react";

export class Time extends React.Component {
    constructor(props) {
        super(props); //вызываем базовый класс
        
        // инициализация state
        this.state = {
            now: this.getTime(),
        };

        // setInterval(() => {
        //     console.log('Time');
        //     // this.state.now = this.getTime(); // так писать нельзя!!! - реакт не следит за этим
        //     this.setState({ now: this.getTime() });
        // }, 1000)
    }

    // вызываем метод после монтирования компонента и в него делаем setInterval
    componentDidMount() {
        // console.log("componentDidMount");
        this.intervalId = setInterval(() => {
            // console.log('Time');
            this.setState({ now: this.getTime() });
        }, 1000)
    }

    // вызываем метод после размонтирования компонента
    componentWillUnmount() {
        // console.log("componentWillUnmount");
        clearInterval(this.intervalId);
    }

    getTime = () => new Date().toTimeString().substring(0, 8); // получаем время и отсекаем лишний текст до 8 символов

    render() {
        return (
            <>
                {/* <span>Now: </span> */}
                <span>{this.state.now}</span>
            </>
        )
    }
}