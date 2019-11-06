import React, { Component } from 'react'
import SmallCar from './SmallCar'
import SmallCar2 from './SmallCar2'
import SmallCar3 from './SmallCar3'


class CarRowThree extends Component {

  render() {
    return (
        <div className="car-row-three">
          <SmallCar/>
          <SmallCar2/>
          <SmallCar3/>
          <SmallCar/>
        </div>
    );
  }
}

export default CarRowThree
