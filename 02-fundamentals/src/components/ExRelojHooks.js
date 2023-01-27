import React, { useState, useEffect } from "react";

export default function ExRelojHooks() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let timer;
        if (visible) {
            timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [visible]);

    return (
        <div>
            <h1>
                Ex Reloj Hooks: <b>{time}</b>
            </h1>
            {visible && <Reloj time={time} />}
            <button onClick={() => setVisible(true)}> Start </button>
            {" <---> "}
            <button onClick={() => setVisible(false)}> Stop </button>
        </div>
    );
}

function Reloj({ time }) {
    return <div>{time}</div>;
}
