import React, { Component } from 'react'

export default class ColorComponent extends Component {

    constructor()
    {
        super();
        this.state=
        {
            show:false
        }

       this.red=()=>
            {
                this.setState({show:!this.state.show})
            }

    }

  render() {
    return (
      <div>

        {
            
            <div style={{ background:this.state.show?"red":"blue"}}>
            <h1>hii</h1>  
        </div>

        
        


        }

            <button onClick={this.red}>Blue</button>
      </div>
    )
  }
}
