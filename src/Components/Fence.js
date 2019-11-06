import React, { Component } from 'react'


class Fence extends Component {
  constructor() {
    super()
    this.state = {
      x: 700,
      windows: 9,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 500) {
      this.setState({x: this.state.x + 3})
    } else {
      this.setState({x: -500})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    const {x} = this.state
    return (
        <div
          className="fence-container"
          onScroll={this.handleScroll}
          style={{left: `${x}px`}}>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
          <div className="fencepost"></div>
        </div>
    );
  }
}

export default Fence
