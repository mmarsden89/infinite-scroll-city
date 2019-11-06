import React, { Component } from 'react'


class Box3 extends Component {
  constructor() {
    super()
    this.state = {
      x: 100,
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
        <div className="window-colored" key={i}>
          <div className="brick-covering-top">
          </div>
          <div className="brick-covering-bottom">
          </div>
        </div>
    )

    const {x} = this.state
    return (
        <div
          className="box3-container"
          onScroll={this.handleScroll}
          style={{left: `${x}px`}}>
          <div className="box3-top"></div>
          <div className="window-container">
            {windowsHTML}
          </div>
        </div>
    );
  }
}

export default Box3
