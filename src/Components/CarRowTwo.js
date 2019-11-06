import React, { Component } from 'react'
import Car3 from './Car3'
import Car4 from './Car4'


class CarRowTwo extends Component {

  render() {
    return (
        <div className="car-row-two">
          <Car3/>
          <Car4/>
          <Car3/>
        </div>
    );
  }
}

export default CarRowTwo
