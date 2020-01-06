import * as React from 'react'
import { Component, Fragment } from 'react'
import { render } from 'react-dom'
// import './index.css'

import Canvas from './components/canvas'
import Controls from './components/controls'
import Diagnostic from './components/diagnostic'

import Recorder from './lib/recorder'
import randomKebab from './lib/randomkebab'


class App extends Component {
  state = {
    sessionName: 'untitled session',
    screen: 'welcome',
  }

  componentDidMount() {
    this.recorder = null
    this.setState({sessionName: randomKebab()})
  }

  componentWillUnmount() {
    this.recorder = null
  }

  handleGetEl = (el) => {
    this.recorder = new Recorder(el)
  }

  handleDownload = () => {
    console.log('app download')
    this.recorder && this.recorder.download(this.state.sessionName)
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
    if (this.state.screen === 'welcome') {
      return (
        <Fragment>
          <p>
            <b>welcome</p> in testing session&nbsp;
            <b>{this.state.sessionName}</b>
          </p>
          <Diagnostic />

        </Fragment>
      )
    }

    return (
      <Fragment>

        <h1>{this.state.sessionName}</h1>
        <Canvas getEl={this.handleGetEl}/>
        <Controls start={this.handleStart} stop={this.handleStop} download={this.handleDownload} />
      </Fagment>
    )
  }
}

render(<App />, document.getElementById('root'))
