import React from "react";

import "./Modal.scss";

export class Modal extends React.Component {

    handleClose = (e) => {
        this.props.onClose?.(e);
    }

    render() {
        return (
            <div className="modal">
                <div className="background" onClick={this.handleClose}></div>

                <div className="window">
                    <div className="modal-header">
                        <span>
                            {this.props.title}
                        </span>
                        {!!this.props.onClose && <button className="modal-btn" onClick={this.handleClose}>x</button>}
                    </div>
                    <hr />
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}