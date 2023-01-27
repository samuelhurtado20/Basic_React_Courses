import React, { Component } from "react";

export default class ExRenderCond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: true,
        };
    }

    render() {
        return (
            <div>
                <h1>ExRenderCond</h1>
                {this.state.session ? <Login name="Samuel" /> : <Logout lastname="Hurtado" />}
            </div>
        );
    }
}

function Login(props) {
    return(
        <div>
            <h2>Login: {props.name}</h2>
        </div>
    );
}

function Logout(props) {
    return(
        <div>
            <h2>Logout: {props.lastname}</h2>
        </div>
    );
}
