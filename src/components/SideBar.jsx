import React from 'react'

import './SideBar.css'
import './Button.css'

export default class SideBar extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            nmin:0,
            nmax:100,
            num:50,
            rmin:0,
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
                {this.state.nmin}
                <input type='range' name='num' min={this.state.nmin} max={this.state.nmax} value={this.state.num}
                 onChange={this.handleChange}/>
                {this.state.nmax}
                </div>

                <div>
        <h3>Ratio:{this.state.ratio}%</h3>
                {this.state.rmin}
                <input type='range' name='ratio' step='10' min={this.state.rmin} max={this.state.rmax} value={this.state.ratio}
                 onChange={this.handleChange}/>
                {this.state.rmax}
                </div>

                <div>
                    <button className='btn' onClick={this.dataToParent}>Start</button>
                    <button className='btn'>Stop</button>
                </div>
            </div>
        )
        
    }

}