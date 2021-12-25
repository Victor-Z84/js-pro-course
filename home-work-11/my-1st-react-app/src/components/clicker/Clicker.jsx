import React from "react";

import "./Clicker.scss";

export class Clicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    // handleAddClick = (e) => {
    //     this.setState(prevState => ({ count: prevState.count + 1 }));
    //     // console.log(e);
    // }

    // handleSubClick = () => {
    //     this.setState(prevState => ({ count: prevState.count - 1 }));
    // }

    // handleAddClick = () => {
    //     this.handleClick(+1);
    // }

    // handleSubClick = () => {
    //     this.handleClick(-1);
    // }

    handleClick = (arg, e) => {
        e.preventDefault();
        this.setState(prevState => ({ count: prevState.count + arg }));
    }

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ count: prevState.count = 0 }));
    }

    render() {
        return (
            <div className="clicker">
                <span className="clicker__label">{this.state.count}</span>
                <div>
                    <button className="clicker__btn clicker__btn_sub" onClick={(e) => this.handleClick(-1, e)}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <button className="clicker__btn clicker__btn_res" onClick={(e) => this.handleResetClick(e)}>
                        <i className="fas fa-sync-alt"></i>
                    </button>
                    <button className="clicker__btn clicker__btn_add" onClick={(e) => this.handleClick(+1, e)}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        )
    }
}