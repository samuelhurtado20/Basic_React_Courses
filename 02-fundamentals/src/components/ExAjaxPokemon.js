import React, { Component } from "react";

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <span>{props.name}</span>
        </figure>
    );
}

export default class ExAjaxPokemon extends Component {
    state = {
        pokemons: [],
    };

    componentDidMount() {
        let pokemons = [];
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                //console.log(json);
                json.results.forEach((element) => {
                    fetch(element.url)
                        .then((res) => res.json())
                        .then((json1) => {
                            //console.log(json1);
                            let pokemon = {
                                id: json1.id,
                                name: json1.name,
                                avatar: json1.sprites.front_default,
                            };
                            //let pokemons = [...this.state.pokemons, pokemon];
                            //this.setState({
                            //    pokemons,
                            //});
                            pokemons.push(pokemon);
                        })
                        .then(() => {
                            this.setState({
                                pokemons,
                            });
                        });
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Ex Ajax Pokemon</h1>
                {this.state.pokemons.length <= 0 ? <h3>Loading...</h3> : this.state.pokemons.map((el, index) => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
            </div>
        );
    }
}
