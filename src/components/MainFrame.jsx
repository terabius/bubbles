import React, { Component } from 'react'

import './MainFrame.css'

export default class MainFrame extends Component {

    constructor(props){
        super(props);

    }

    logic(){

        const canvas = document.getElementById('arena');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,400,400);

        const number = this.props.num;
        const ratio = this.props.ratio;
        console.log(number, ratio);

        const radius = 4;
        const canvasX = 400;
        const canvasY = 400;

        const minX = (radius)
        const minY = (radius)

        const maxX = (canvasX - radius);
        const maxY = (canvasY - radius);

        const colors = ['#FF4C4C', '#4CA64C'];

        const dots = [];

        const getRandom = (min, max) => ((Math.floor(Math.random() * (max - min + 1)) + min));


        for (let i = 0; i < number; i++) {

            const x = getRandom(minX, maxX);
            const y = getRandom(minY, maxY);

            const color = colors[((getRandom(0, 100) >= ratio) ? 1 : 0)];

            const dot = {
                x: x,
                y: y,
                radius: radius,
                color: color
            }

            dots.push(dot);
            drawDot(dot);

        }

        function drawDot(dot) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = dot.color;
            ctx.fill();
        }


    }

    componentDidMount(){
        this.logic();
    }
    componentDidUpdate(){
        this.logic();
    }


    render() {

        return (
            <div className='mainframe'>
               <canvas className="dots" id='arena' width='400' height='400'>Your browser doesn't support canvas</canvas> 
            </div>
           
        )
    }
}
