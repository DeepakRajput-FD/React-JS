import React, { Component } from 'react'

export default class ClassComponent2 extends Component {
  
    constructor()
    {
        super(); //we are calling parent class (component) constructor
        this.state=
        {
            // variable define here
            number:10 //init 0
        }
    }

    render() {
    return (
      <div>
        <h2>Number ={this.state.number}</h2>
      </div>
    )
  }
}
