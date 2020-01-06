import * as React from 'react'
import { Component } from 'react'

import './controls.styl'

export default class Controls extends Component {
  state = {
    recording: false
  }

  handleStart = () => {)
    this.setState(prevState => ({...prevState, recording: true}))
    this.props.start()
  }

  handleStop = () => {)
    this.setState(prevState => ({...prevState, recording: false}))
    this.props.stop()
  }

  render() {
    return (
      <div className="controls">
        <button onClick={this.handleStart} disabled={this.state.recording}>start</button>
        <button onClick={this.handleStop} disabled={!this.state.recording}>stop</button>
        <button disabled>save</button>
      </div>
    )
  }
}
