import React, { Component } from 'react'


class Train extends Component {
  constructor() {
    super()
    this.state = {
      x: -2300,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 1400) {
      this.setState({x: this.state.x + 15})
      if (this.state.x < -2400) {
        this.setState({x: window.innerWidth + 100})
      }
    } else {
      this.setState({x: -2200})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="train2" onScroll={this.handleScroll}>
          <div className="train2-1-other train2"></div>
          <div className="train2-2 train2"></div>
          <div className="train2-3 train2"></div>
          <div className="train2-4 train2">
            <div className="train-mid">
              <div className="train-line"></div>
              <div className="train-line"></div>
              <div className="train-line"></div>
            </div>
          </div>
          <div className="train2-5 train2"></div>
          <div className="train2-6 train2"></div>
          <div className="train2-7-other train2"></div>
          <div className="train-light-other"></div>
          <div className="train-backlight-other"></div>
        </div>
    );
  }
}

export default Train
