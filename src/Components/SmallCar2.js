import React, { Component } from 'react'


class SmallCar2 extends Component {
  constructor() {
    super()
    this.state = {
      x: 700,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = () => {
    if (this.state.x < window.innerWidth + 200) {
      this.setState({x: this.state.x - 3})
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="smallcar" onScroll={this.handleScroll}>
          <div className="smalltop2"></div>
          <div className="smallbottom2"></div>
          <div className="smallfwheel"></div>
          <div className="smallbwheel"></div>
          <div className="small-car-left-light"></div>
          <div className="small-car-right-light"></div>
        </div>
    );
  }
}

export default SmallCar2
