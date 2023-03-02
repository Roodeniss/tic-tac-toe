import React from "react"
import Title from "../Components/Title"
import Board from "../Components/Board"

export default function Box(props) {
    // const [on, setOn] = React.useState(props.on)

    // const styles = {
    //     backgroundColor: on ? "#222222" : "transparent",

    // }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }
    
    return (
        <>
            
            <Board />
            {/* <div style={styles} className="box" onClick={toggle}></div>
            <style >{`
            .box{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            height: 100px;
            width: 100px;
            border: 1px solid black;
            margin-right: 4px;
            border-radius: 5px;
            }
            `}
            </style> */}
            <button className="reset">Reiniciar</button>
            <style>{`
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