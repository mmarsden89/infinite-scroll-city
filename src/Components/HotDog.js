import React, { Component } from 'react'


class HotDog extends Component {
  constructor() {
    super()
    this.state = {
      x: 100,
      lastPos: 0
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth) {
      this.setState({x: this.state.x + 2.5})
      if (this.state.x < -350 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth})
      }
    } else {
      this.setState({x: -500})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {

    const {x} = this.state
    return (
        <div
          className="hotdog-container"
          onScroll={this.handleScroll}
          style={{left: `${x}px`}}>
          <div className="hotdog-pole">
          </div>
          <div className="hotdog-sign">
            <div className="hotdog-roll">
            </div>
            <div className="hotdog-dog">
            </div>
            <div className="hotdog-roll-top">
            </div>
          </div>
          <div className="hotdog-stand">
          </div>
          <div className="hotdog-stand-top-container">
            <div className="hotdog-stand-top">
            </div>
            <div className="hotdog-stand-top">
            </div>
          </div>
          <div className="hotdog-body">
          </div>
          <div className="hotdog-wheel">
            <div className="inner-wheel">
            </div>
          </div>
          <div className="hotdog-umbrella">
            <div className="curve umbrella1">
            </div>
            <div className="curve umbrella2">
            </div>
            <div className="curve umbrella3">
            </div>
            <div className="curve umbrella4">
            </div>
            <div className="curve umbrella5">
            </div>
          </div>
        </div>
    );
  }
}

export default HotDog
