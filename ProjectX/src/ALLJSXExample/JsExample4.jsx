import React from 'react'
import Profile from './Profile';
import Login_page from './Login_page';

export default function JsExample4() {
  
   let isLoggedin=true;
    
    if (isLoggedin)
     {
       return <Profile/>
    }
    else
    {
       return <Login_page/>
    }

    return (
    <div>JsExample4</div>
  )
}
