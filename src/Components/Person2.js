import React, { Component } from 'react'


class Person2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.x,
      y: this.props.y,
      lastY: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.lastY < 10) {
      this.setState({y: this.state.y + 1.5, lastY: this.state.lastY + 2})
    } else if (this.state.lastY < 30) {
      this.setState({y: this.state.y - 1.5, lastY: this.state.lastY + 2})
    } else if (this.state.lastY < 40) {
      this.setState({y: this.state.y + 1.5, lastY: this.state.lastY + 2})
    } else {
      this.setState({y: 0, lastY: 0})
    }
  }

  render() {
    return (
        <div style={{left: this.state.x, transform: `rotate(${this.state.y}deg)`}}
          className="person" onScroll={this.handleScroll}>
          <div className="person2left"
            style={{transform: `rotate(${(this.state.y - 10) * -5}deg)`,
            backgroundColor: this.props.arms}}>
          <div className="hand" style={{backgroundColor: this.props.color}}></div>
          </div>
          <div className="personbottom" style={{backgroundColor: this.props.bottom}}></div>
          <div className="person2right"
            style={{transform: `rotate(${(this.state.y - 10) * -5}deg)`,
            backgroundColor: this.props.arms}}>
          <div className="hand" style={{backgroundColor: this.props.color}}></div>
          </div>
          <div className="head" style={{backgroundColor: this.props.color}}></div>
        </div>
    );
  }
}

export default Person2
