import React, { Component } from 'react'
import Car from './Car'
import Car2 from './Car2'


class CarRowOne extends Component {
  constructor() {
    super()
    this.state = {
      x: -1750,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth - 1300) {
      this.state.lastPos < window.scrollY ? this.setState({x: this.state.x + 5}) :
      this.setState({x: this.state.x - 5})
      if (this.state.x < - window.innerWidth - 1300 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth + 395})
      }
    } else {
      this.setState({x: -1750})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="car-row-one" onScroll={this.handleScroll}>
          <Car/>
          <Car2/>
          <Car/>
        </div>
    );
  }
}

export default CarRowOne
