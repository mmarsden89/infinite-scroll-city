import React, { Component } from 'react'
import Car3 from './Car3'
import Car4 from './Car4'


class CarRowThree extends Component {
  constructor() {
    super()
    this.state = {
      x: 150,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = () => {
    if (this.state.x > -1550) {
      this.state.lastPos > window.scrollY ? this.setState({x: this.state.x + 5}) :
      this.setState({x: this.state.x - 5})
      if (this.state.x < - window.innerWidth - 1300 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth + 100})
      }
    } else {
      this.setState({x: 270})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="car-row-two" onScroll={this.handleScroll}>
          <Car3/>
          <Car4/>
          <Car3/>
        </div>
    );
  }
}

export default CarRowThree
