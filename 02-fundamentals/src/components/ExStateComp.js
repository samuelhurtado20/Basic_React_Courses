import React, { Component } from "react";
import ExCompoHijo from "./ExCompoHijo";

export default class ExStateComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             contador: this.state.contador + 1,
    //         });
    //     }, 1000);
    // }

    render() {
        return (
            <div>
                <h1>El State</h1>
                <h3>{this.state.contador}</h3>
                <ExCompoHijo contadorHijo={this.state.contador} />
            </div>
        );
    }
}
