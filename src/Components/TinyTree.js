import React, { Component } from 'react'


class TinyTree extends Component {
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
      this.setState({x: this.state.x + 2.5})
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="tinytree" onScroll={this.handleScroll}>
        <div className="tinystalk"></div>
          <div className="tinytreetop"></div>
          <div className="tinytreeleft"></div>
          <div className="tinytreeright"></div>
        </div>
    );
  }
}

export default TinyTree
