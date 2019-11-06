import React, { Component } from 'react'
import Car from './Car'
import Car2 from './Car2'


class CarRowOne extends Component {
  render() {
    return (
        <div className="car-row-one">
          <Car/>
          <Car2/>
          <Car/>
        </div>
    );
  }
}

export default CarRowOne
