import React from 'react'

import './SideBar.css'
import './Button.css'

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
        this.dataToParent = this.dataToParent.bind(this);
    }

    handleChange(event){        
        this.setState({[event.target.name]: event.target.value})

    }

    dataToParent(){
        this.props.sendData({ num: this.state.num, ratio: this.state.ratio })
    }

    render(){
        return (
            <div className='sidebar'>

                <div>
                <h3>Number:{this.state.num}</h3>
                1
                <input type='range' name='num' min={this.state.nmin} max={this.state.nmax} value={this.state.nvalue}
                 onChange={this.handleChange}/>
                100
                </div>

                <div>
        <h3>Ratio:{this.state.ratio}</h3>
                1
                <input type='range' name='ratio' min={this.state.rmin} max={this.state.rmax} value={this.state.rvalue}
                 onChange={this.handleChange}/>
                100
                </div>

                <div>
                    <button className='btn' onClick={this.dataToParent}>Start</button>
                    <button className='btn'>Stop</button>
                </div>
            </div>
        )
        
    }

}