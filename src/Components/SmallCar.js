import React, { Component } from 'react'


class SmallCar extends Component {
  constructor() {
    super()
    this.state = {
      x: 200,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = () => {
    if (this.state.x < window.innerWidth + 200) {
      this.state.lastPos > window.scrollY ? this.setState({x: this.state.x + 3}) :
      this.setState({x: this.state.x - 3})
      if (this.state.x < -100) {
        this.setState({x: window.innerWidth + 100})
      }
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="smallcar" onScroll={this.handleScroll}>
          <div className="smalltop"></div>
          <div className="smallbottom"></div>
          <div className="smallfwheel"></div>
          <div className="smallbwheel"></div>
          <div className="small-car-left-light"></div>
          <div className="small-car-right-light"></div>
        </div>
    );
  }
}

export default SmallCar
