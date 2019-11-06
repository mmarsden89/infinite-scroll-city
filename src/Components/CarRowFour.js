import React, { Component } from 'react'
import SmallCar4 from './SmallCar4'
import SmallCar5 from './SmallCar5'
import SmallCar6 from './SmallCar6'


class CarRowFour extends Component {
  constructor() {
    super()
    this.state = {
      x: 750,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth - 1300) {
      this.setState({x: this.state.x + 5})
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
        <div style={{left: this.state.x}} className="car-row-four" onScroll={this.handleScroll}>
          <SmallCar4/>
          <SmallCar5/>
          <SmallCar6/>
        </div>
    );
  }
}

export default CarRowFour
