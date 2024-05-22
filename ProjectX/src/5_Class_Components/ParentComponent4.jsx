import React, { Component } from 'react'
import ChildComponent4 from './ChildComponent4'

export default class ParentComponent4 extends Component {
  render() {
    return (
      <div>
        <ChildComponent4 name='Deepak' marks='90' />
      </div>
    )
  }
}
