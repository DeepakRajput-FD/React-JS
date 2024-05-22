import React, { Component } from 'react'

export default class ChildComponent4 extends Component {
  render() {
    const {name,marks}=this.props;
    return (
      <div>
        {/* destructor  */}
        <h3>Subject = {name}</h3>
        <h3>Marks = {marks}</h3>
        

      </div>
    )
  }
}
