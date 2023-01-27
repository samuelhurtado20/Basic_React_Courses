import React, { Component } from 'react'

function Btn (props) {
    return (
        <div>
          <button onClick={props.myOnClick}>click event btn</button>
        </div>
      )
}

//const Btn2 = ({myOnClick}) => <button onClick={myOnClick}>click event btn</button>

export default class ExMyEvent extends Component {
    handleClick = (e, msg) => {
        alert("from click event. " + msg)
    }
  render() {
    return (
      <div>
        <hr />
        <h1>Example My Event</h1>
        <button onClick={(e) => this.handleClick(e, "Mensaje from button")}>click event button</button>
        <Btn myOnClick={(e) => this.handleClick(e, "Mensaje from Btn")} />
      </div>
    )
  }
}
