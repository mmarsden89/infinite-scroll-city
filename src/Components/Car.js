import React, { Component } from 'react'


class Car extends Component {
  render() {
    return (
        <div className="car" onScroll={this.handleScroll}>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="fwheel"></div>
          <div className="bwheel"></div>
          <div className="car-left-light"></div>
          <div className="car-right-light"></div>
        </div>
    );
  }
}

export default Car
