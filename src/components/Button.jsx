import React from 'react'

import './Button.css'


export default function Button(props) {
    return (
        
            <div className="btn">
                {props.msg}
            </div>
    )
}
