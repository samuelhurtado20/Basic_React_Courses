import React, { Component } from 'react'

class Reloj extends Component {

  componentWillUnmount(){
    //console.log(3, "componentWillUnmount, eliminado del DOM.")
  }

  render() {
    return (
      <h3>{this.props.currentTime}</h3>
    )
  }
}

export default class ExLifeCycle extends Component {
  constructor(props)
  {
    super(props);
    //console.log(0, "Constructor, no esta en el DOM aún.")
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
      visible: false
    }
    this.tempo = null;
  }

  componentDidMount(){
    //console.log(1, "componentDidMount, ya esta en el DOM.")
  }

  componentDidUpdate(prevProps, prevState){
    //console.log(2, "componentDidUpdate, ya esta en el DOM.")
    //console.log(prevProps)
    //console.log(prevState)
  }

  componentWillUnmount(){
    //console.log(3, "componentWillUnmount, eliminado del DOM.")
  }

  tictac = () =>{
    this.tempo = setInterval(() => {      
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  start = () =>{
    this.tictac();
    this.setState({
      visible: true
    })
  }

  stop = () =>{
    clearInterval(this.tempo);
    this.setState({
      visible: false
    })
  }

  render() {
    //console.log(4, "Dibuja o redibuja en el DOM.")
    return (
      <div>
        <h1>Ex Life Cycle</h1>
        {this.state.visible && <Reloj currentTime={this.state.currentTime} />}
        <button onClick={this.start}> Start </button>
        {"---"}
        <button onClick={this.stop}> Stop </button>
      </div>
    )
  }
}

