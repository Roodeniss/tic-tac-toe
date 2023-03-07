import React from "react"
import Title from "../Components/Title"
import Board from "../Components/Board"

export default function Box(props) {
    function reload(){
        window.location.reload();
    }
    
    return (
        <>
            
            <Board />
            <button className="reset" onClick={reload}>Reiniciar</button>
            <style>{`
                *{
                    background-color: #2a3b47;
                }
                .reset{
                    margin-top: 20%;
                    margin-left: 5%;
                    cursor: pointer;
                }
                `}
            </style>
        </>
    )
}