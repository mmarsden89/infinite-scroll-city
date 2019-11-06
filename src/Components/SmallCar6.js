import React, { Component } from 'react'


class SmallCar6 extends Component {
  render() {
    return (
        <div className="smallcar2" onScroll={this.handleScroll}>
          <div className="copleft"></div>
          <div className="copright"></div>
          <div className="smallbottom6"></div>
          <div className="smalltop6"></div>
          <div className="smallfwheel"></div>
          <div className="smallbwheel"></div>
          <div className="small2-car-left-light"></div>
          <div className="small2-car-right-light"></div>
        </div>
    );
  }
}

export default SmallCar6
