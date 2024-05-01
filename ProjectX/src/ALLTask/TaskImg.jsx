import React, { useState } from 'react'

export default function TaskImg() {
  
    let [show,SetShow]=useState(false);

    let [imgnone,Setimgnone]=useState('none');

   let img1='BulbOff.png';
   let img2='BulbOne.png';

 
//    let imgshow='show';

    return (
    <div>
        
        {
            show
            ?
            <img src={img1} alt="" style={{width:300, height:400}} />
            
            :
            <img src={img2} alt="" style={{width:300, height:400 }} />
        }
        

        <button onClick={()=> {
            SetShow(!show),
            (imgnone=='none')?Setimgnone('Show'):Setimgnone('none')
            
            }}>
            {imgnone}
        </button>
    </div>
  )
}
