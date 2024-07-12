import React, { memo } from 'react'

 function Component1() {
  
  console.log('hii');

    return (
    <>
    
   <h1>
     my component
    
    </h1>

    </>
  )
}
// basically used to memorize the value and it is used only one time not used component multiple time we use memo and it is improved speed  
// use callback return funtion. 
export default memo(Component1)
