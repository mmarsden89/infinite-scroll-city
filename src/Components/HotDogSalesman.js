import React, { Component } from 'react'


class HotDogSalesman extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 120,
      y: 0,
      lastY: 0,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 200) {
      this.setState({x: this.state.x + 2.5})
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
    if (this.state.lastY < 10) {
      this.setState({y: this.state.y + 1.5, lastY: this.state.lastY + 2})
    } else if (this.state.lastY < 30) {
      this.setState({y: this.state.y - 1.5, lastY: this.state.lastY + 2})
    } else if (this.state.lastY < 40) {
      this.setState({y: this.state.y + 1.5, lastY: this.state.lastY + 2})
    } else {
      this.setState({y: 0, lastY: 0})
    }
  }

  render() {
    return (
        <div style={{left: this.state.x, transform: `rotate(${this.state.y}deg)`}}
          className="hotdog-person" onScroll={this.handleScroll}>
          <div className="hotdog-personbottom"></div>
          <div className="hotdog-person-left"
            style={{transform: `rotate(${(this.state.y - 25) * 5}deg)`}}>
          <div className="hotdog-hand1"></div>
          <div className="hotdoghand1">
            <div className="hotdoghand-roll">
            </div>
            <div className="hotdoghand-dog">
            </div>
            <div className="hotdoghand-roll-top">
            </div>
          </div>
          </div>
          <div className="hotdog-person-right"
            style={{transform: `rotate(${(this.state.y + 10) * -5}deg)`}}>
          <div className="hotdog-hand2"></div>
          <div className="hotdoghand2">
            <div className="hotdoghand-roll">
            </div>
            <div className="hotdoghand-dog">
            </div>
            <div className="hotdoghand-roll-top">
            </div>
          </div>
          </div>
          <div className="hotdog-head"></div>
        </div>
    );
  }
}

export default HotDogSalesman
