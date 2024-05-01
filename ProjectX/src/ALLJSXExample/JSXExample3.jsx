import React from 'react'
import Profile from './Profile';
import Login_page from './Login_page';

export default function JSXExample3() {
    let loggin=true;
  return (
    <div>
        JSXExample3

        {
            // ternary operator or conditional operator 
            // ternary operator divided into three parts
            // ternary operator represnt with ?:
            // syntax : exp1? exp2 : exp3
            // if exp1 true it will execute exp2 otherwise it will execute exp3
        }

        {
            loggin?<Profile/>:<Login_page/>
        }

    </div>
  )
}
