import React, { Component } from 'react'


class Bridge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: -1400,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x <= -60) {
      this.setState({x: this.state.x + 2.5})
    } else {
      this.setState({x: -690})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div className="bridge-container">
          <div className="bridge-top-backs-container">
            <div className="bridge-top-back-container" style={{left: `${this.state.x}px`}} onScroll={this.handleScroll}>
              <div className="bridge-top-back"><div className="top-back"></div></div>
              <div className="bridge-top-back"><div className="top-back"></div></div>
              <div className="bridge-top-back"><div className="top-back"></div></div>
              <div className="bridge-top-back"><div className="top-back"></div></div>
              <div className="bridge-top-back"><div className="top-back"></div></div>
            </div>
            <div className="rail-line"></div>
            <div className="bridge-top-back-container" style={{left: `calc(${this.state.x}px + 50px)`}} onScroll={this.handleScroll}>
              <div className="bridge-top-front"><div className="top-front"></div></div>
              <div className="bridge-top-front"><div className="top-front"></div></div>
              <div className="bridge-top-front"><div className="top-front"></div></div>
              <div className="bridge-top-front"><div className="top-front"></div></div>
              <div className="bridge-top-front"><div className="top-front"></div></div>
            </div>
          </div>
        <div className="bridge-mid"></div>
        <div className="bridge-legs" style={{left: `${this.state.x}px`}} onScroll={this.handleScroll}>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
          <div className="leg"></div>
          <div className="bridge-detail"></div>
        </div>
        <div className="bridge-top"></div>
      </div>
    );
  }
}

export default Bridge
