import React from 'react'

import './SideBar.css'

import Button from './Button'

export default class SideBar extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            nmin:1,
            nmax:100,
            num:50,
            rmin:1,
            rmax:100,
            ratio:50
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){        
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return (
            <div className='sidebar'>

                <div>
                <h3>Number:</h3>
                <input type='range' name='num' min={this.state.nmin} max={this.state.nmax} value={this.state.nvalue}
                 onChange={this.handleChange}/>
                </div>

                <div>
                <h3>Ratio:</h3>
                <input type='range' name='ratio' min={this.state.rmin} max={this.state.rmax} value={this.state.rvalue}
                 onChange={this.handleChange}/>
                </div>

                <div>
                    <Button msg='Start' />
                    <Button msg='Stop' />
                </div>
            </div>
        )
        
    }

}