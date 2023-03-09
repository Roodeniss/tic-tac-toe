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
            <style>{`
             .title {
                justify-content: center;
                align-items: center;
                height: 120px;
                text-align: center;
              }
              h1{
                
                background-color: #bb86fc;
                border-radius: 30px;
                width: 100%;
              }
             .player-turn{
                color: #bb86fc;
             }
                `}
            </style>
        </div>
    )
}
