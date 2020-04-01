import React from 'react'

import './SideBar.css'

import Slider from './Slider'
import Button from './Button'

export default class SideBar extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='sidebar'>

                <Slider min='1' max='100' defaultValue='50' />
                <Slider min='1' max='100' defaultValue='50' />
                <div>
                    <Button msg='Start' />
                    <Button msg='Stop' />
                </div>
            </div>
        )
        
    }

}