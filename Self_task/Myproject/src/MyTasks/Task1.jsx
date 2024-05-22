import React, { useState } from 'react'
import './Task1.css'
export default function Task1() {
  
    let [text,settext]=useState();

    let [bool,setbool]=useState(false)

    let upper=()=>
        {
            settext('uppercase')
            setbool(!bool)
        }
        let lower=()=>
            {
                settext('lowercase')
                setbool(!bool)
            }
            let capital=()=>
                {
                    settext('capitalize')
                    setbool(!bool)
                }


    return (
    <div>
        
        <div className='parent'>
        <textarea className='Textarea1' style={{textTransform:text}}></textarea>
        </div>

        <div className='parent2'>
        <button onClick={upper}>uppercase</button>
        <button onClick={lower}>lowercase</button>
        <button onClick={capital}>capitalize</button>
        {/* <button onClick={add}>click</button> */}
        </div>
    </div>
  )
}
