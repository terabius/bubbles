import React from 'react'

import './Slider.css'

export default function Slider(props) {
    return (
        <div> 
            <input type="range" min={props.min} max={props.max} value={props.value} />
        </div>
    );
}

