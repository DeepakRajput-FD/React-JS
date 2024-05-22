import React, { Component } from 'react'

export default class ChildClassComponentExample5 extends Component {
  render() {
    const {myevent}=this.props;
    return (
      <div>
        <button onClick={myevent}>child component</button>
      </div>
    )
  }
}
