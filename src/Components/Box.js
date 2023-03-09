import React from "react"
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
                    background-color: #bb86fc;
                    text-decoration: none;
                    border: 2px solid transparent;
                    font-weight: bold;
                    padding: 12px 30px;
                    border-radius: 30px;
                    transition: 0.4s;
                    margin-top: 20%;
                    margin-left: 5%;
                    cursor: pointer;
                }
                button:hover {
                    color: white;
                    background-color: transparent;
                    border: 2px solid #bb86fc;
                    cursor: pointer;
                }
                `}
            </style>
        </>
    )
}