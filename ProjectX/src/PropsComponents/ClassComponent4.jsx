import React, { Component } from 'react'

export default class ClassComponent4 extends Component {

    constructor()
    {
        super();
        this.state=
        {
            isvisible:true
        }
    }

    handleButton=()=>
        {
            this.state({ isvisible:!this.state.isvisible})
        }


    render() {
    return (
      <div>

        {
            isvisible 
            ?
            <h1>Hello how</h1>
            :
            <h1>why how</h1>   
        }

        <button onClick={this.handleButton}>click here</button>
      </div>
    )
  }
}
