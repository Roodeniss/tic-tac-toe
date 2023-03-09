import React from "react"

export default function Title(props) {

    function title() {
        if (props.player == "player1") {
            return "1";
        } else {
            return "2";
        }
    };

    const text = "Turno del jugador " + title();

    return (
        <div className="title">
            <h1> TA TE TI</h1>
            <p className="player-turn">{text}</p>
        </div>
    )
}
