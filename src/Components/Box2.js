import React, { Component } from 'react'


class Box2 extends Component {
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
    if (this.state.x < window.innerWidth) {
      this.setState({x: this.state.x + 3})
    } else {
      this.setState({x: -500})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    const windowsHTML = []
    for (let i = 0; i < this.state.windows; i++)
      windowsHTML.push(
        <div className="window" key={i}>
        </div>
    )

    const {x} = this.state
    return (
        <div
          className="box2-container"
          onScroll={this.handleScroll}
          style={{left: `${x}px`}}>
          <div className="box2-top"></div>
          <div className="window-container">
            {windowsHTML}
          </div>
        </div>
    );
  }
}

export default Box2
