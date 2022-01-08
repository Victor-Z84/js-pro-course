
import React from "react";
import { withTranslator } from "../../hoc/withTranslator";
import { Time } from "../time/Time";
import "./Header.scss";

// Классовый компонент:
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showTime: true,
        }
    }

    componentDidMount() {
        // this.timeoutId= setTimeout(() => {
        //     this.setState({showTime: false});
        // }, 15000);
    }

    componentWillUnmount() {
        clearInterval(this.timeoutId);
    }

    render() {
        return (
            <header className="header">
                <a href="/home" className="link">{this.props.translate("header.links.home")}</a>
                <a href="/home" className="link">{this.props.translate("header.links.portfolio")}</a>
                <a href="/home" className="link">{this.props.translate("header.links.partners")}</a>
                <a href="/about" className="link">{this.props.translate("header.links.about")}</a>

                <div className="language">
                    <button onClick={() => this.props.setLanguage("ru")}>
                        RU
                    </button>
                    <button onClick={() => this.props.setLanguage("en")}>
                        EN
                    </button>
                </div>
    
                <div className="time">
                    {this.state.showTime && <Time/>}
                </div>
            </header>
        )
    }
}


export default withTranslator(Header);