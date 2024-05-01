import React from 'react'
import Component1 from './MyComponent/Component1'
import Component2 from './MyComponent/Component2'
// import JsxExample1 from '../MyComponent/JSXExample/JsxExample1'
import JSXExample3 from './ALLJSXExample/JSXExample3'
import ALLJsExample from './ALLJSXExample/ALLJsExample'
import MyFunctionComponent4 from './MyComponent/MyFunctionComponent4'
import MyFunctionComponent5 from './MyComponent/MyFunctionComponent5'
import MyTableComponent from './MyComponent/MyTableComponent'
import StyleComponent1 from './StyleComponents/StyleComponent1'
import StyleComponent2 from './StyleComponents/StyleComponent2'
import StyleComponent3 from './StyleComponents/StyleComponent3'
import ALLStateExample from './StateExample/ALLStateExample'
import ALLTasks from './ALLTask/ALLTasks'

export default function App() {
  return (
    <div>
      {/* My component */}
      {/* <Component1/> */}
      {/* <Component2/> */}
      {/* <JsxExample1 /> */}

    {/* conditional rendering */}
    {/* <ALLJsExample/> */}

    {

      // repeated component

      // <MyFunctionComponent4/>
    }

    {
      // Data Print using list
      // <MyFunctionComponent5/>
    }

    {
      // print table using array
      // <MyTableComponent/>
    }
    {
    /*  inline css in react js  */ 
    // <StyleComponent1/>
    }

    {
      // internal css
    }
    {/* <StyleComponent2/> */}
    

    {/* External CSS */}

    {/* <StyleComponent3/> */}

{/* All state example */}

    {/* <ALLStateExample/> */}

    <ALLTasks/>

    </div>
    
  )
}
