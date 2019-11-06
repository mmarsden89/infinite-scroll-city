import React, { Component } from 'react'
import SmallPerson from './SmallPerson'


class SmallPersonContainer extends Component {
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

  handleScroll = () => {
    if (this.state.x < window.innerWidth + 200) {
      this.setState({x: this.state.x + 2.75})
    } else {
      this.setState({x: -300})
    }
    this.setState({lastPos: window.scrollY})
  }


  render() {
    return (
        <div style={{left: `${this.state.x}px`}}
          className="smallpersoncontainer" onScroll={this.handleScroll}>
          <SmallPerson x={125} arms={'gray'} bottom={'pink'} y={1} color={'rgb(221, 186, 156)'}/>
          <SmallPerson x={750} arms={'violet'} bottom={'orchid'} y={1} color={'rgb(217, 160, 119)'}/>
          <SmallPerson x={1250} arms={'darkblue'} bottom={'gold'} y={1} color={'rgb(98, 58, 23)'}/>
        </div>
    );
  }
}

export default SmallPersonContainer
