import React from 'react'

 const ChildComponentExample=React.forwardRef((props,refs)=>
    {
        return (
            <>

            <input type="text" ref={refs} placeholder='Enter name in child component' />
                {/* <h1>child component</h1> */}
            </>
          )
    } )
export default ChildComponentExample;