import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        //console.log("Mount");
        const moveScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", moveScroll);
        return () => {
            //console.log("unMount");
        };
    }, []);

    useEffect(() => {
        //console.log("Update scrollY");
    }, [scrollY]);

    useEffect(() => {
        //console.log("Update general");
    });

    return (
        <div>
            <h1>Scroll Hooks - use effect - {number} - scroll position: {scrollY}</h1>
            <button onClick={() => setNumber(number + 2) }>+</button>
            <button onClick={() => setNumber(number - 2) }>-</button>
        </div>
    );
}
