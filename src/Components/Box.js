import React, { Component } from 'react'


class Box extends Component {
  render() {
    const windows = 6
    const windowsHTML = []
    for (let i = 0; i < windows; i++)
      windowsHTML.push(
        <div className="window" key={i}>
        </div>
    )
    return (
        <div
          className="box-container"
          onScroll={this.handleScroll}>
          <div className="box-top"></div>
          <div className="window-container">
            {windowsHTML}
          </div>
        </div>
    );
  }
}

export default Box
