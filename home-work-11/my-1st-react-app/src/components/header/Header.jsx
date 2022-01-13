
import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { withTheme } from "../../hoc/withTheme";
import { withTranslator } from "../../hoc/withTranslator";
import { Time } from "../time/Time";

import { ReactComponent as ThemeIcon } from "../../icons/theme.svg";
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
                <a href="/portfolio" className="link">{this.props.translate("header.links.portfolio")}</a>
                <a href="/partners" className="link">{this.props.translate("header.links.partners")}</a>
                <a href="/about" className="link">{this.props.translate("header.links.about")}</a>

                <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => this.props.setLanguage("ru")}>
                        RU
                    </Button>
                    <Button onClick={() => this.props.setLanguage("en")}>
                        EN
                    </Button>
                </ButtonGroup>

                <ThemeIcon 
                    className="theme-icon"
                    onClick={() => this.props.toggleTheme()}
                />
    
                <div className="time text">
                    {this.state.showTime && <Time/>}
                </div>
            </header>
        )
    }
}


export default withTheme(withTranslator(Header));