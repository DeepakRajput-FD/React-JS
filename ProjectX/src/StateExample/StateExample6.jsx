import React, { useState } from 'react'

export default function StateExample6() {
    let [color,SetColor]=useState('');
    return (
    <div>
        <div style={{backgroundColor:color }}>
        <h1>hii this text</h1>
        </div>

        <button onClick={(e)=>{ SetColor( e.target.textContent)}}>
            red
        </button>

        <button onClick={(e)=>{SetColor(e.target.textContent)}}>
            green
        </button>

        <button onClick={(e)=>{SetColor(e.target.textContent)}}>
            blue
        </button>

        <button onClick={(e)=>{SetColor(e.target.textContent)}}>
            teal
        </button>

        <button onClick={(e)=>{SetColor(e.target.textContent)}}>
            crimson
        </button>

    </div>
  )
}
