import React from 'react'

export default function Component1() {
  const status=true;
  return (
    <div>
      {/* logical and opertor */}
      {/* logical and means if the value is true then execute */}
    { status && <h1>Hello User !</h1>}


    </div>
  )
}
