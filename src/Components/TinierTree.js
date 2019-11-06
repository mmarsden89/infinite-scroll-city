import React, { Component } from 'react'


class TinierTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.x,
      lastPos: 0
    }
  }

  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 200) {
      this.state.lastPos < window.scrollY ? this.setState({x: this.state.x + 2}) :
      this.setState({x: this.state.x - 2})
      if (this.state.x < -350 && this.state.lastPos > window.scrollY) {
        this.setState({x: window.innerWidth})
      }
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="tiniertree" onScroll={this.handleScroll}>
        <div className="tinierstalk"></div>
          <div className="tiniertreetop"></div>
          <div className="tiniertreeleft"></div>
          <div className="tiniertreeright"></div>
        </div>
    );
  }
}

export default TinierTree
