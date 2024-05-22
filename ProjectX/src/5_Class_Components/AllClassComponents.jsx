import React, { Component } from 'react'
import ClassComponentEx1 from './ClassComponentEx1'
import ClassComponent2 from './ClassComponent2'
import ClassComponent3 from './ClassComponent3'
import ColorComponent from './ColorComponent'
import ParentComponent5 from '../PropsComponents/ParentComponent5'
import ParentComponent4 from './ParentComponent4'
import ParenetComponentClassExample5 from './ParenetComponentClassExample5'

export default class AllClassComponents extends Component {
  render() {
    return (
      <div>
        {/* <ClassComponentEx1/> */}
        {/* <ClassComponent2/> */}
        {/* <ClassComponent3/> */}
        {/* <ColorComponent/> */}
        {/* <ParentComponent4/> */}
        <ParenetComponentClassExample5/>
      </div>
    )
  }
}
