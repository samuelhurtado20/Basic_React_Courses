import React, { Component } from "react";

export default class ExCompoHijo extends Component {

    render() {
        return (
            <div>
                <h3>count hijo:{this.props.contadorHijo}</h3>
            </div>
        );
    }
}
