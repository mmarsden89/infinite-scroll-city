import React, { Component } from 'react'
import SmallCar4 from './SmallCar4'
import SmallCar5 from './SmallCar5'
import SmallCar6 from './SmallCar6'


class CarRowFour extends Component {
  render() {
    return (
        <div className="car-row-four">
          <SmallCar4/>
          <SmallCar5/>
          <SmallCar6/>
          <SmallCar4/>
        </div>
    );
  }
}

export default CarRowFour
