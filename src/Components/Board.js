import React from "react"
import { useState } from "react"
import Title from "./Title"
import Icons from "../Components/Icons"

export default function Board() {
    const [player, setPlayer] = useState("player1");
    const [squareStates, setSquareStates] = useState(Array(9).fill(null));

    const winningPositiomns = [
        [1, 2, 3],
        [1, 5, 9],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9],
    ];
    
    function turn(index) {
        console.log(`Clicked square ${index}`);
        if (squareStates[index - 1] !== null) {
            // Square has already been clicked, do nothing
            return;
        } else {
            const newSquareStates = [...squareStates];
            newSquareStates[index - 1] = player;
            setSquareStates(newSquareStates);
            setPlayer(player === "player1" ? "player2" : "player1");
            //Square empty, set player1 or player2 in the array
        }
        console.log(`rows o clummns clicked ${squareStates}`)
    }


    return (
        <>
            <Title player={player} />
            <div class="board">
                <div id="1" class="element" onClick={() => turn(1)}>
                    {squareStates[0] === "player1" ? <Icons turno="player1" /> : squareStates[0] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="2" class="element" onClick={() => turn(2)}>
                    {squareStates[1] === "player1" ? <Icons turno="player1" /> : squareStates[1] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="3" class="element" onClick={() => turn(3)}>
                    {squareStates[2] === "player1" ? <Icons turno="player1" /> : squareStates[2] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="4" class="element" onClick={() => turn(4)}>
                    {squareStates[3] === "player1" ? <Icons turno="player1" /> : squareStates[3] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="5" class="element" onClick={() => turn(5)}>
                    {squareStates[4] === "player1" ? <Icons turno="player1" /> : squareStates[4] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="6" class="element" onClick={() => turn(6)}>
                    {squareStates[5] === "player1" ? <Icons turno="player1" /> : squareStates[5] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="7" class="element" onClick={() => turn(7)}>
                    {squareStates[6] === "player1" ? <Icons turno="player1" /> : squareStates[6] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="8" class="element" onClick={() => turn(8)}>
                    {squareStates[7] === "player1" ? <Icons turno="player1" /> : squareStates[7] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <div id="9" class="element" onClick={() => turn(9)}>
                    {squareStates[8] === "player1" ? <Icons turno="player1" /> : squareStates[8] === "player2" ? <Icons turno="player2" /> : null}
                </div>
                <style>
                    {`
            .board{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr); 
            }
            .element{
            width: 200px;
            height: 100%;
            cursor: pointer;
            border: 1px solid black;
            margin-top: 100px;
            }
            `}
                </style>
            </div>
        </>
    )
}