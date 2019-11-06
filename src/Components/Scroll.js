import React, { Component } from "react";

export default class Scroll extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  topFunction = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }

  bottomFunction = () => {
    window.scroll({top: window.document.body.offsetHeight, behavior: 'smooth'})
  }

  render() {
    return (
        <div className="home">
          <p onClick={this.topFunction}>home</p>
          <p onClick={this.bottomFunction}>play</p>
        </div>
    );
  }
}
