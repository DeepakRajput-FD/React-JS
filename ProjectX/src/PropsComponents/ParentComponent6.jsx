import React from 'react'
import ChildComponent6 from './ChildComponent6';

export default function ParentComponent6() {

    const arr=['c','c++','java','python'];

    return (
    <div>

        {
            // note: key is inbuilt prop in react js dont use
        }

        <ChildComponent6 myproduct={arr} />
    </div>
  )
}
