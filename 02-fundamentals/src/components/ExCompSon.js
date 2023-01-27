import React, { Component } from 'react'

export default class ExCompSon extends Component {
  render() {
    return (
      <div>
        <button onClick={ (e) => this.props.ChangeMsg(e, this.props.title) }>{this.props.name}</button>
      </div>
    )
  }
}
