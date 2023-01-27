import React, { Component } from "react";

export default class ExEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

        this.Sumar = this.Sumar.bind(this);
        this.Restar = this.Restar.bind(this);
    }

    Sumar(e) {
        this.setState({
            count: this.state.count + 1,
        });
    }

    Restar(e) {
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        return (
            <div>
                <h1>Events and Component. ES6. {this.state.count}</h1>
                <button className="btn" onClick={this.Sumar}>
                    +
                </button>
                <input type="button" onClick={this.Restar} value="-" />
            </div>
        );
    }
}
