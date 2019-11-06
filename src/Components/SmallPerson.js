import React, { Component } from 'react'


class SmallPerson extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.x,
      y: this.props.y,
      lastY: 0,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 200) {
      this.state.lastPos < window.scrollY ? this.setState({x: this.state.x + 3.5}) :
      this.setState({x: this.state.x - 3.5})
      if (this.state.x < -350 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth})
      }
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
          className="smallperson" onScroll={this.handleScroll}>
          <div className="smallpersonleft"
            style={{transform: `rotate(${(this.state.y - 10) * 5}deg)`,
            backgroundColor: this.props.arms}}>
          <div className="smallhand" style={{backgroundColor: this.props.color}}></div>
          </div>
          <div className="smallpersonbottom" style={{backgroundColor: this.props.bottom}}></div>
          <div className="smallpersonright"
            style={{transform: `rotate(${(this.state.y - 10) * 5}deg)`,
            backgroundColor: this.props.arms}}>
          <div className="smallhand" style={{backgroundColor: this.props.color}}></div>
          </div>
          <div className="smallhead" style={{backgroundColor: this.props.color}}></div>
        </div>
    );
  }
}

export default SmallPerson
