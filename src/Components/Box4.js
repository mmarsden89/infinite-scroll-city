import React, { Component } from 'react'


class Box4 extends Component {
  constructor() {
    super()
    this.state = {
      x: 1300,
      windows: 12,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 200) {
      this.state.lastPos < window.scrollY ? this.setState({x: this.state.x + 3}) :
      this.setState({x: this.state.x - 3})
      if (this.state.x < -350 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth})
      }
    } else {
      this.setState({x: -300})
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
          className="box4-container"
          onScroll={this.handleScroll}
          style={{left: `${x}px`}}>
          <div className="box4-top"></div>
          <div className="window-container">
            {windowsHTML}
          </div>
        </div>
    );
  }
}

export default Box4
