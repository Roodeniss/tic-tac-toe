export default function Icon(props) {
    return (
        <div className="icon">
            {props.turno === 'player1' && <Circle />}
            {props.turno === 'player2' && <Tick />}
            <style>
                {`
                .icon{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                svg{
                    width: 50px;
                    height: 50px;
                }
                `}
            </style>
        </div>
    )
};

const Circle = () => {
    return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <title /><g data-name="Layer 2" id="Layer_2">
                <path d="M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z" />
                <path d="M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z" />
            </g><g id="frame">
                <rect class="cls-1" height="32" width="32" /></g>
        </svg>
    )
}

const Tick = () => {
    return (
        <svg width="20px" height="14px" viewBox="0 0 20 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>ic_tick</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <g id="24-px-Icons" transform="translate(-410.000000, -125.000000)" stroke="#000000">
                    <g id="ic_tick" transform="translate(408.000000, 120.000000)">
                        <g id="tick">
                            <g transform="translate(3.000000, 6.000000)" stroke-width="2">
                                <path d="M0,6 L6,12" id="Line"></path>
                                <path d="M6,12 L18,0" id="Line"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}