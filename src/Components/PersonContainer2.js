import React, { Component } from 'react'
import Person2 from './Person2'


class PersonContainer2 extends Component {
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
    if (this.state.x > -850) {
      this.setState({x: this.state.x - 2})
    } else {
      this.setState({x: window.innerWidth + 200})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}}
          className="personcontainer2" onScroll={this.handleScroll}>
          <Person2 x={250} arms={'red'} bottom={'black'} y={-3} color={'rgb(166, 147, 130)'}/>
          <Person2 x={800} arms={'pink'} bottom={'purple'} y={2} color={'rgb(119, 93, 71)'}/>
        </div>
    );
  }
}

export default PersonContainer2
