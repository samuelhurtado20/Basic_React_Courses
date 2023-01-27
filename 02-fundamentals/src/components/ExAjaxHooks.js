import React, { useState, useEffect } from "react";

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <span>{props.name}</span>
        </figure>
    );
}

export default function ExAjaxHooks() {
    const [pokemons, setpokemons] = useState([]);

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon";

        const getPoke = async () => {
            let pokems = [];
            let resp = await fetch(url);
            let json = await resp.json();
    
            json.results.forEach( async (el)=>{
                let res = await fetch(el.url);
                let json = await res.json();
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };
                pokems.push(pokemon);
                let newList = [...pokems]
                setpokemons(newList)
            })
        };

        getPoke();

        // fetch(url)
        //     .then((res) => res.json())
        //     .then((json) => {
        //         json.results.forEach((element) => {
        //             fetch(element.url)
        //                 .then((res) => res.json())
        //                 .then((json1) => {
        //                     let pokemon = {
        //                         id: json1.id,
        //                         name: json1.name,
        //                         avatar: json1.sprites.front_default,
        //                     };
        //                     pokems.push(pokemon);
        //                 })
        //                 .then(() => {
        //                     let newList = [...pokems]
        //                     setpokemons(newList)
        //                 });
        //         });
        //     });
    }, []);

    return (
        <div>
            <h1>Ex Ajax Pokemon - hooks</h1>
            {pokemons.length <= 0 ? <h3>Loading...</h3> : pokemons.map((el, index) => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
        </div>
    );
}
