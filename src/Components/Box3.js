import React, { Component } from 'react'


class Box3 extends Component {
  render() {
    const windows = 6
    const windowsHTML = []
    for (let i = 0; i < windows; i++)
      windowsHTML.push(
        <div className="window-colored" key={i}>
          <div className="brick-covering-top">
          </div>
          <div className="brick-covering-bottom">
          </div>
        </div>
    )
    return (
        <div
          className="box3-container"
          onScroll={this.handleScroll}>
          <div className="box3-top"></div>
          <div className="window-container">
            {windowsHTML}
          </div>
        </div>
    );
  }
}

export default Box3
