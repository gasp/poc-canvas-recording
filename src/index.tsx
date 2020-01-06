import * as React from 'react'
import { Component, Fragment } from 'react'
import { render } from 'react-dom'
// import './index.css'

import Canvas from './components/canvas'
import Controls from './components/controls'

import Recorder from './lib/recorder'

class App extends Component {
  componentDidMount() {
    this.recorder = null
  }

  componentWillUnmount() {
    this.recorder = null
  }

  handleGetEl = (el) => {
    this.recorder = new Recorder(el)
  }

  handleDownload = () => {
    console.log('app download')
    this.recorder && this.recorder.download()
  }

  handleStart = () => {
    console.log('app start', this.recorder)
    this.recorder && this.recorder.startRecording()
  }

  handleStop = () => {
    console.log('app stop', this.recorder)
    this.recorder && this.recorder.stopRecording()
  }

  render() {
    return (
      <Fragment>
        <h1>canvas recording poc</h1>
        <Canvas getEl={this.handleGetEl}/>
        <Controls start={this.handleStart} stop={this.handleStop} download={this.handleDownload} />
      </Fagment>
    )
  }
}

render(<App />, document.getElementById('root'))
