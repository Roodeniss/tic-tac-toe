import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>
            <div clasName='card-content'>
                <h2>GANADOR</h2>
                <p>{props.name}</p>
            </div>
        </div>

    );
}