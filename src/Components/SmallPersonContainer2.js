import React, { Component } from 'react'
import SmallPerson2 from './SmallPerson2'


class PersonContainer2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      lastPos: 0
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x > -850) {
      this.setState({x: this.state.x - 1})
    } else {
      this.setState({x: window.innerWidth + 200})
    }
    this.setState({lastPos: window.scrollY})
  }

  render() {
    return (
        <div style={{left: this.state.x}}
          className="smallpersoncontainer2" onScroll={this.handleScroll}>
          <SmallPerson2 x={1325} arms={'steelblue'} bottom={'teal'} y={1} color={'rgb(221, 186, 156)'}/>
          <SmallPerson2 x={850} arms={'darkslategray'} bottom={'dimgray'} y={1} color={'rgb(217, 160, 119)'}/>
          <SmallPerson2 x={350} arms={'darkred'} bottom={'indianred'} y={1} color={'rgb(98, 58, 23)'}/>
        </div>
    );
  }
}

export default PersonContainer2
