import React, { useState } from 'react'
import cat from './download.jpeg'
import './imgman.css';

function ImageManipulation() {
const[height,setheight]=useState(100)
const[width,setwidth]=useState(100)
const[angle,setangle]=useState(30);
const[red,setRed]=useState()
const[green,setGreen]=useState()
const[blue,setBlue]=useState()


function enhanceHeight(){
    setheight(height+20)
}

function enhancewidth(){
    setwidth(width+20)
}
function dorotate(){
    setangle(angle+30)

}
function changecolor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);

}
  return (
    <div className='container'>
        <div className='imgdiv' style={{backgroundColor:`RGB(${red},${green},${blue})`}}>
            <img src={cat} height={height} width={width} alt="cat Image"  style={{transform:`rotate(${angle}deg)`}}/>
        </div>
        <div style={{border:'2px solid red',marginTop:'100px',paddingLeft:'60px'}}>

        <button onClick={enhanceHeight} style={{backgroundColor:'cyan'}}> EnhanceHeight</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={enhancewidth}> EnhanceWidht</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={changecolor}> ColorChange</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={dorotate}> Rotate</button>
        </div>
    </div>
  )
}

export default ImageManipulation