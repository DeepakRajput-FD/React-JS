import React from 'react'
import Profile from './Profile';
import Login_page from './Login_page';

export default function JSExample5() {

    
   let isLoggedin=true;
    let element;
   if (isLoggedin)
    {
      element= <Profile/>
   }
   else
   {
      element= <Login_page/>
   }

   return element
   

    
}
