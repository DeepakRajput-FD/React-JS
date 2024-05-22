import React, { Component } from 'react'
import ChildClassComponentExample5 from './ChildClassComponentExample5'

export default class ParenetComponentClassExample5 extends Component {
  
    handleClick=()=>
        {
            alert('hello this is deepak')
        }

    render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click here</button>
        <ChildClassComponentExample5 myevent={this.handleClick} />
      </div>
    )
  }
}
