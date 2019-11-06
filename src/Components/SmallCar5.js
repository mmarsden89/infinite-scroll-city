import React, { Component } from 'react'


class SmallCar5 extends Component {
  constructor() {
    super()
    this.state = {
      x: 300,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 200) {
      this.state.lastPos < window.scrollY ? this.setState({x: this.state.x + 5}) :
      this.setState({x: this.state.x - 5})
      if (this.state.x < -350 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth})
      }
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="smallcar2" onScroll={this.handleScroll}>
          <div className="smalltop5"></div>
          <div className="smallbottom5"></div>
          <div className="smallfwheel"></div>
          <div className="smallbwheel"></div>
          <div className="small2-car-left-light"></div>
          <div className="small2-car-right-light"></div>
        </div>
    );
  }
}

export default SmallCar5
