import React, { Component } from "react";
import ExCompSon from "./ExCompSon";

export default class ExCompFather extends Component {
    state = {
        msg: "",
    };

    ChangeMsg = (e, msg) => {
        this.setState({
            msg: msg,
        });
    };

    render() {
        return (
            <div>
                <h1>Ex Comp Father. {this.state.msg}</h1>
                <ExCompSon ChangeMsg={this.ChangeMsg} name="hijo 1" title="title 1" />
                <ExCompSon ChangeMsg={this.ChangeMsg} name="hijo 2" title="title 2" />
            </div>
        );
    }
}
