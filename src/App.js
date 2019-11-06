import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box'
import BoxS2 from './Components/BoxS2'
import BoxS3 from './Components/BoxS3'
import BoxS4 from './Components/BoxS4'
import BoxS5 from './Components/BoxS5'
import './Components/Box.css'
import './Components/CarRowOne.css'
import './Components/Road.css'
import './Components/Bridge.css'
import './Components/Train2.css'
import './Components/TreeContainer.css'
import './Components/Person.css'
import './Components/TrainStop.css'
import './Components/HotDog.css'
import Box2 from './Components/Box2'
import HotDogSalesman from './Components/HotDogSalesman'
import HotDog from './Components/HotDog'
import Person from './Components/Person'
import Person2 from './Components/Person2'
import Box3 from './Components/Box3'
import Box4 from './Components/Box4'
import Fence from './Components/Fence'
import Road from './Components/Road'
import CarRowOne from './Components/CarRowOne'
import CarRowTwo from './Components/CarRowTwo'
import SmallCar from './Components/SmallCar'
import SmallCar2 from './Components/SmallCar2'
import SmallCar3 from './Components/SmallCar3'
import SmallCar4 from './Components/SmallCar4'
import SmallCar5 from './Components/SmallCar5'
import SmallCar6 from './Components/SmallCar6'
import TreeContainer from './Components/TreeContainer'
import TinyTree from './Components/TinyTree'
import TinierTree from './Components/TinierTree'
import Bridge from './Components/Bridge'
import Train2 from './Components/Train2'
import Train3 from './Components/Train3'
import TrainStop from './Components/TrainStop'
import Scroll from './Components/Scroll'

class App extends Component {
  constructor() {
    super()
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
      this.state.lastPos < window.scrollY ? this.setState({x: this.state.x + 1}) :
      this.setState({x: this.state.x - 1})
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
    <div className="App">
      <div className="scroll-container" onScroll={this.handleScroll} style={{backgroundPosition: `${this.state.x}px`}}>
        <div className="fore-back">
        </div>
        <div className="fore-middle">
        </div>
        <div className="middle-back">
        </div>
        <div className="back-back">
        </div>
        <Box/>
        <BoxS2/>
        <BoxS3/>
        <BoxS4/>
        <BoxS5/>
        <TinierTree x={0}/>
        <TinierTree x={455}/>
        <TinierTree x={1100}/>
        <TinierTree x={1450}/>
        <SmallCar4/>
        <SmallCar5/>
        <SmallCar6/>
        <SmallCar/>
        <SmallCar2/>
        <SmallCar3/>
        <TinyTree x={100}/>
        <TinyTree x={600}/>
        <TinyTree x={1250}/>
        <Bridge/>
        <Train2/>
        <Train3/>
        <TrainStop/>
        <HotDogSalesman/>
        <HotDog/>
        <Box2/>
        <Box3/>
        <Box4/>
        <Fence/>
        <TreeContainer/>
        <Person x={100} arms={'blue'} bottom={'darkblue'} y={1} color={'rgb(166, 147, 130)'}/>
        <Person x={-800} arms={'white'} bottom={'green'} y={3} color={'rgb(52, 30, 10)'}/>
        <Person2 x={100} arms={'red'} bottom={'black'} y={-3} color={'rgb(166, 147, 130)'}/>
        <Person2 x={800} arms={'pink'} bottom={'purple'} y={2} color={'rgb(119, 93, 71)'}/>
        <Road/>
        <CarRowOne/>
        <CarRowTwo/>
        <Scroll/>
      </div>
    </div>
  );
}
}

export default App;
