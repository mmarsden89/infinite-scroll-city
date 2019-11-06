import React, { Component } from 'react'


class Tree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.x,
      lastPos: 0
    }
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="tree">
          <div className="treetop"></div>
          <div className="treeleft"></div>
          <div className="treeright"></div>
          <div className="stalk"></div>
        </div>
    );
  }
}

export default Tree
