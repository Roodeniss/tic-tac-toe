import React from "react"
import Board from "./Board"

export default function Box(props) {
    function reload(){
        window.location.reload();
    }
    
    return (
        <>
            <Board />
            <button className="reset" onClick={reload}>Reiniciar</button>
        </>
    )
}