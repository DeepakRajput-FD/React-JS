import React, { Component } from 'react'

export default class ReactCreateExample3 extends Component {

    constructor()
    {
        super();
        this.inputRef=React.createRef();
    }

    handleSubmit=()=>
        {
            this.inputRef.current.style.color='red';
            this.inputRef.current.readOnly=!this.inputRef.current.readOnly;
            this.inputRef.current.style.width='300px'
        }

    render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder='Enter Name : ' />
        <button onClick={this.handleSubmit}>click here</button>
      </div>
    )
  }
}
