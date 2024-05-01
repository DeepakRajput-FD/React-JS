import React, { useState } from 'react'

export default function StateExample5() {
    const [isVisible,SetVisible]=useState(false);

    // const handleButton=()=>
    // {
    //     if (isVisible)
    //      {
    //         SetVisible(false);    
    //     }
    //     else
    //     {
    //         SetVisible(true);
    //     }
    //     // using only one line code 

    //     // 
    //     SetVisible(!isVisible);
    // }

    return (
    <div>

        {

            isVisible
            ?
            <h1>hello i am visible</h1>
            :
            <h2>i am invisible</h2>
        }

        <button onClick={()=>SetVisible(!isVisible)}>change</button>

    </div>
  )
}
