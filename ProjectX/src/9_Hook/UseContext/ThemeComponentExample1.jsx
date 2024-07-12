import React, { createContext, useState } from 'react'

export const themeContext=createContext();

export default function ThemeComponentExample1({children}) {
  
    const [theme,setTheme]=useState('light')

    const toggleTheme=()=>
        {
            // prev theme is previous value of theme
            setTheme((prevTheme)=>prevTheme==='light'?'dark':'light');
        }

    return (
    <div>
        <themeContext.Provider value={{theme,toggleTheme}}>
        {children}
        </themeContext.Provider>
    </div>
  )
}
