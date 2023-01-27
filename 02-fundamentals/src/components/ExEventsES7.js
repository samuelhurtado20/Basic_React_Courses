import React, { Component } from "react";

export default class ExEventsES7 extends Component {
    state = {
        count: 0,
    };

    Sumar = (e) => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    Restar = (e) => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        return (
            <div>
                <h1>Events and Component. ES7. {this.state.count}</h1>
                <button className="btn" onClick={this.Sumar}>
                    +
                </button>
                <input type="button" onClick={this.Restar} value="-" />
            </div>
        );
    }
}
