import React, { Component } from 'react'
import SmallCar from './SmallCar'
import SmallCar2 from './SmallCar2'
import SmallCar3 from './SmallCar3'


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
      this.setState({x: this.state.x - 5})
    } else {
      this.setState({x: 270})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="car-row-three" onScroll={this.handleScroll}>
          <SmallCar/>
          <SmallCar2/>
          <SmallCar3/>
        </div>
    );
  }
}

export default CarRowThree
