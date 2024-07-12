import React, { Component, createRef } from 'react'

export default class ReactCreateExample1 extends Component {
 
    constructor()
    {
        super();
        this.inputref=createRef();
        console.log(this.inputref.current);
    }

    handleButton=()=>
        {
            this.inputref.current.focus();
            console.log(this.inputref.current.value);
        }

    render() {
    return (
      <div>
        <input type="text" ref={this.inputref} placeholder='Enter name : ' />
        <button onClick={this.handleButton}>Click here</button>
      </div>
    )
  }
}
