import React from "react"

export default function Title(props) {

    function title(){
        if(props.player == "player1"){
            return "1";
        }else {
            return "2";
        }
    };

    const text = "Turno del jugador " + title();

    return (
        <div class="board">
            <p class="player-turn">{text}</p>
        </div>
    )
}
