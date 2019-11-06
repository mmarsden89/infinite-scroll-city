import React, { Component } from 'react'


class BoxS5 extends Component {
  constructor() {
    super()
    this.state = {
      x: -300,
      windows: 6,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 200) {
      this.setState({x: this.state.x + 2})
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    const windowsHTML = []
    for (let i = 0; i < this.state.windows; i++)
      windowsHTML.push(
        <div className="window2" key={i}>
        </div>
    )
    const {x} = this.state
    return (
        <div
          className="boxs5-container"
          onScroll={this.handleScroll}
          style={{left: `${x}px`}}>
          <div className="boxs5-top"></div>
          <div className="window-container">
            {windowsHTML}
          </div>
        </div>
    );
  }
}

export default BoxS5
