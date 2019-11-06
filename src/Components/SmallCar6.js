import React, { Component } from 'react'


class SmallCar6 extends Component {
  constructor() {
    super()
    this.state = {
      x: 700,
      lastPos: 0,
      left: 'blue',
      right: 'red'
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  setLights = () => {
    if (window.scrollY % 2 === 0) {
      this.setState({left: 'red', right: 'blue'})
    } else {
      this.setState({left: 'blue', right: 'red'})
    }
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 200) {
      this.setState({x: this.state.x + 5})
      if (this.state.x < -350 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth})
      }
    } else {
      this.setState({x: -300})
    }
    this.setLights()
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="smallcar2" onScroll={this.handleScroll}>
          <div style={{backgroundColor: this.state.left, boxShadow: `5px 5px 3px 5px ${this.state.left}` }} className="copleft"></div>
          <div style={{backgroundColor: this.state.right, boxShadow: `5px 5px 3px 5px ${this.state.right}` }} className="copright"></div>
          <div className="smallbottom6"></div>
          <div className="smalltop6"></div>
          <div className="smallfwheel"></div>
          <div className="smallbwheel"></div>
          <div className="small2-car-left-light"></div>
          <div className="small2-car-right-light"></div>
        </div>
    );
  }
}

export default SmallCar6
