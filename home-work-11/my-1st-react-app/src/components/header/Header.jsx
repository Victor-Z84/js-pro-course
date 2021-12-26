
import React from "react";
import { Time } from "../time/Time";
import "./Header.scss";

// Функциональный компонент:
// function Header () {

//     return (
//         <header className="header">
//             <a href="/home" className="header__link">Home</a>
//             <a href="/home" className="header__link">Portfolio</a>
//             <a href="/home" className="header__link">Partners</a>
//             <a href="/about" className="header__link">About</a>

//             <div className="header__time">
//                 <Time/>
//             </div>
//         </header>
//     )
// }

// Классовый компонент:
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showTime: true,
        }
    }

    componentDidMount() {
        this.timeoutId= setTimeout(() => {
            this.setState({showTime: false});
        }, 15000);
    }

    componentWillUnmount() {
        clearInterval(this.timeoutId);
    }

    // getTime = () => {
    //   return this.state.showTime && <Time/>;
    //      эквивалентно этой записи:
    //   return this.state.showTime ? <Time/> : null;
    // }

    render() {
        return (
            <header className="header">
                <a href="/home" className="header__link">Home</a>
                <a href="/home" className="header__link">Portfolio</a>
                <a href="/home" className="header__link">Partners</a>
                <a href="/about" className="header__link">About</a>
    
                <div className="header__time">
                    {this.state.showTime && <Time/>}
                </div>
            </header>
        )
    }
}


export default Header;