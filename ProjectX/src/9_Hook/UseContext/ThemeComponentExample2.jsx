import React, { useContext } from 'react'

import {themeContext} from './ThemeComponentExample1'

export default function ThemeComponentExample2() {

    const {theme,toggleTheme}=useContext(themeContext)

    const mystyle =
    {
        backgroundColor:theme==='light'?'green':'blue',
        color:theme==='light'?'black':'white'
    }

    return (
    <div style={{background:mystyle.backgroundColor,color:mystyle.color}}>
        <h1>current theme is {theme}</h1>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}
