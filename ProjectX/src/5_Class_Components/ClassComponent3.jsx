import React, { Component } from 'react'

export default class ClassComponent3 extends Component {
  
    constructor()
    {
        super();
        this.state=
        {
            counter:10,
            name:"Deepak"
        }
    }

    inc=()=>
        {
            this.setState({counter : this.state.counter+1 , name:this.state.name='raj'})
        }
        dec=()=>
            {
                this.setState({counter : this.state.counter-1 , name:this.state.name='Deepak'})
            }

    render() {
    return (
      <div>
        {
            this.state.name
        }
        {
            this.state.counter
        }

        <br />
        <button onClick={this.inc}>Increase</button>
        <br />
        <button onClick={this.dec}>Decrease</button>
      </div>
    )
  }
}
