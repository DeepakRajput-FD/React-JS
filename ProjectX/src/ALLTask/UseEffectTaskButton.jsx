import React, { useEffect, useState } from 'react'

export default function UseEffectTaskButton() {

    let [red,setred]=useState('');
    let [green,setGreen]=useState('');
    let [blue,setBlue]=useState('');
    let HandlButton=()=>
        {
            setred('red');
            setGreen('')
            setBlue('')
            // document.body.style.background=red;
        }
        let HandlGreen=()=>
            {
                setGreen('green');
                setred('');
                setBlue('')
                // document.body.style.background='green';
            }
            let HandlBlue=()=>
                {
                    setred('');
                    setGreen('')
                    setBlue('blue');
                    // document.body.style.background='blue';
                }

       

            useEffect(()=>
                {

                    document.body.style.background=red||green||blue;
                    console.log('hii');
                },[HandlButton,HandlGreen,HandlBlue])

    return (
    <div>
        <button onClick={HandlButton}>Red</button>
        <button onClick={HandlGreen}>Green</button>
        <button onClick={HandlBlue}>Blue</button>
    </div>
  )
}
