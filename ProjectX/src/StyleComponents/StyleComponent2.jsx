import React from 'react'

export default function StyleComponent2() {
//   internal css
let mystyle=
{
    mycontainer:
    {
        backgroundColor:"Blue",
        color:'white',
        height:'100px'
    }
    ,
    myheading:
    {
        backgroundColor:"purple",
        color:'red'
    }
}
    return (
    <div style={mystyle.mycontainer}>
        <h1 style={mystyle.myheading}>Hii This is Deepak</h1>
        <h2>Ra.one</h2>
    </div>
  )
}
