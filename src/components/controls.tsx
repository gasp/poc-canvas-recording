import * as React from 'react'
import { Component } from 'react'

import './controls.styl'

export default class Controls extends Component {
  state = {
    empty: true,
    recording: false,
  }

  handleDownload = () => {
    this.props.download()
  }

  handleStart = () => {
    this.setState(prevState => ({...prevState, empty: false, recording: true}))
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
        <button onClick={this.handleDownload} disabled={this.state.empty || this.state.recording}>download</button>
      </div>
    )
  }
}
