import React, { Component } from 'react'
import Tree from './Tree'


class TreeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
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
    return (
        <div style={{left: this.state.x}} className="tree-container" onScroll={this.handleScroll}>
          <Tree x={-1270}/>
          <Tree x={-670}/>
          <Tree x={-300}/>
          <Tree x={-100}/>
          <Tree x={400}/>
          <Tree x={1000}/>
        </div>
    );
  }
}

export default TreeContainer
