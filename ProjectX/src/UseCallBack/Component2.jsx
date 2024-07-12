import React, { memo } from 'react'

 function Component2({mylist,addRecord}) {

    console.log('hii this is component 2');

    return (
    <>

        {
            mylist.map((e,i)=>{
                return <h5 key={i} >{e}</h5>
            })
        }

        <button onClick={addRecord} >Add Record</button>

    </>
  )
}

export default memo(Component2)