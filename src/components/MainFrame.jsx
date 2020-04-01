import React, { Component } from 'react'

import './MainFrame.css'

export default class MainFrame extends Component {

    componentDidMount(){
        const canvas = document.getElementById('canva');
        const context = canvas.getContext('2d');

        canvas.width = 400;
        canvas.height = 400;

        // Set the colors you want to support in this array
        const colors = ['#FF4C4C', '#4CA64C'];
        const directions = ['+', '-'];
        const speeds = [0.5, 1, 1.5, 2, 2.5, 3, 3.5];

        const canvasWidth = 400;
        const canvasHeight = 400; 


        // Start with an empty array of dots.
        const dots = [];

        const dotRadius = 5;

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 10; j++) {

                const x = (dotRadius*j)
                const y = (dotRadius*i)
                // Get random color, direction and speed.
                const color = colors[Math.floor(Math.random() * colors.length)];
                const xMove = directions[Math.floor(Math.random() * directions.length)];
                const yMove = directions[Math.floor(Math.random() * directions.length)];
                const speed = speeds[Math.floor(Math.random() * speeds.length)];
                // Set the object.
                const dot = {
                    x: x,
                    y: y,
                    radius: dotRadius,
                    xMove: xMove,
                    yMove: yMove,
                    color: color,
                    speed: speed
                };
                // Save it to the dots array.
                dots.push(dot);
                drawDot(dot);
            }
        }

        // Draw each dot in the dots array.
        for (i = 0; i < dots.length; i++) {
            drawDot(dots[i]);
        };

        setTimeout(function () {
            window.requestAnimationFrame(moveDot);
        }, 2500);


        function moveDot() {
            context.clearRect(0, 0, canvasWidth, canvasHeight)

            for (i = 0; i < dots.length; i++) {

                if (dots[i].xMove == '+') {
                    dots[i].x += dots[i].speed;
                } else {
                    dots[i].x -= dots[i].speed;
                }
                if (dots[i].yMove == '+') {
                    dots[i].y += dots[i].speed;
                } else {
                    dots[i].y -= dots[i].speed;
                }

                drawDot(dots[i])

                if ((dots[i].x + dots[i].radius) >= canvasWidth) {
                    dots[i].xMove = '-';
                }
                if ((dots[i].x - dots[i].radius) <= 0) {
                    dots[i].xMove = '+';
                }
                if ((dots[i].y + dots[i].radius) >= canvasHeight) {
                    dots[i].yMove = '-';
                }
                if ((dots[i].y - dots[i].radius) <= 0) {
                    dots[i].yMove = '+';
                }
            }

            window.requestAnimationFrame(moveDot);
        }

        function drawDot(dot) {
            // Set transparency on the dots.
            context.globalAlpha = 0.9;
            context.beginPath();
            context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
            context.fillStyle = dot.color;
            context.fill();
        }

    }

    render() {


        


        return (
            <div className='mainframe'>
               <canvas className="dots" id='canva'>Your browser doesn't support canvas</canvas> 
            </div>
        )
    }
}
