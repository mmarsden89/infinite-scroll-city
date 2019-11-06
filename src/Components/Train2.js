import React, { Component } from 'react'


class Train extends Component {
  constructor() {
    super()
    this.state = {
      x: -1200,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 1400) {
      this.state.lastPos > window.scrollY ? this.setState({x: this.state.x + 15}) :
      this.setState({x: this.state.x - 15})
      if (this.state.x < -2000) {
        this.setState({x: window.innerWidth + 1000})
      }
    } else {
      this.setState({x: -2300})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="train2" onScroll={this.handleScroll}>
          <div className="train2-1 train2"></div>
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
          <div className="train2-7 train2"></div>
          <div className="train-light"></div>
          <div className="train-backlight"></div>
        </div>
    );
  }
}

export default Train
