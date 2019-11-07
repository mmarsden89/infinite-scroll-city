import React, { Component } from 'react'


class Box4 extends Component {
  render() {
    const windows = 9
    const windowsHTML = []
    for (let i = 0; i < windows; i++)
      windowsHTML.push(
        <div className="window" key={i}>
        </div>
    )
    return (
        <div
          className="box4-container"
          onScroll={this.handleScroll}>
          <div className="box4-top"></div>
          <div className="window-container">
            {windowsHTML}
          </div>
        </div>
    );
  }
}

export default Box4
