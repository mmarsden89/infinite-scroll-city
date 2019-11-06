import React, { Component } from 'react'


class TrainTunnel extends Component {
  constructor() {
    super()
    this.state = {
      x: 545,
      lastPos: 0,
      lights: 'rgba(215, 195, 122, .7)',
      lightShadow: '0 10px 15px 7px rgba(215, 195, 122, .5)'
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll = (event) => {
    if (this.state.x < window.innerWidth + 1400) {
      this.setState({x: this.state.x + 2.5})
    } else {
      this.setState({x: -2200})
    }
    this.setState({lastPos: window.scrollY})
    this.state.x % Math.round(Math.random() * 240) === 0 ?
    this.setState({lights: 'rgba(42, 42, 42, .7)', lightShadow: '0 10px 15px 7px rgba(215, 195, 122, 0)'}) :
    this.setState({ lights: 'rgba(215, 195, 122, .7)',
    lightShadow: '0 10px 15px 7px rgba(215, 195, 122, .5)'})
  }

  render() {
    return (
        <div style={{left: this.state.x}} className="train-stop" onScroll={this.handleScroll}>
          <div className="stop-container">
          </div>
          <div className="train-stop-building">
            <div className="train-stop-entrance">
              <div className="train-stop-entrance-floor">
                <div className="fair-machine">
                  <p>Fares</p>
                  <div className='fair-screen'>
                  </div>
                  <div className="fair-return">
                  </div>
                </div>
                <div className="fair-machine">
                  <p>Fares</p>
                  <div className='fair-screen'>
                  </div>
                  <div className="fair-return">
                  </div>
                </div>
                <div className="fair-machine">
                  <p>Fares</p>
                  <div className='fair-screen'>
                  </div>
                  <div className="fair-return">
                  </div>
                </div>
              </div>
              <div className="train-stop-stair-left">
              </div>
              <div className="train-stop-railing-left"></div>
                <div className="railing1">
                </div>
                <div className="railing2">
                </div>
              <div className="train-stop-stair-right">
              </div>
              <div className="railing3">
              </div>
              <div className="railing4">
              </div>
              <div className="train-stop-railing-right"></div>
              <div className="train-stop-stair-right-top">
              </div>
              <div className="train-stop-stair-left-top">
              </div>
            </div>
          </div>
          <div className="train-name">
            <h4>Evergreen Station</h4>
          </div>
          <div className="train-stop-lights">
            <div className="train-stop-light"
                  style={{backgroundColor: this.state.lights,
                  boxShadow: this.state.lightShadow}}
                  >
              <div className="train-stop-light-covering">
              </div>
              <div className="train-stop-light-arm">
              </div>
            </div>
            <div className="train-stop-light"
                  style={{backgroundColor: this.state.lights,
                  boxShadow: this.state.lightShadow}}
                  >
              <div className="train-stop-light-covering">
              </div>
              <div className="train-stop-light-arm">
              </div>
            </div>
            <div className="train-stop-light"
                  style={{backgroundColor: this.state.lights,
                  boxShadow: this.state.lightShadow}}
                 >
              <div className="train-stop-light-covering">
              </div>
              <div className="train-stop-light-arm">
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default TrainTunnel
