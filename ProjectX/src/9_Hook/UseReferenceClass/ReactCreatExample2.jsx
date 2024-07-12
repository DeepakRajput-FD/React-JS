import React, { Component } from 'react'

export default class ReactCreatExample2 extends Component {
 
    constructor()
    {
        super();
        this.nameField=React.createRef();
        this.state=
        {
            name:''
        }
    }
    handleSubmit=()=>
        {
            if (this.nameField.current.value.length <4)
                 {
                    alert('name must be required greater than 4 char')
                }
                else
                {
                        console.log('All ok');
                        this.setState({name:this.nameField.current.value})
                }
        }

    render() {
    return (
      <div>
        <input type="text" name="" id="" />
        <button onClick={this.handleSubmit}>click here</button>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
