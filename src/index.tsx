import * as React from 'react'
import { Component, Fragment } from 'react'
import { render } from 'react-dom'
// import './index.css'

import Canvas from './components/canvas'
import Controls from './components/controls'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>canvas recording poc</h1>
        <Canvas />
        <Controls />
      </Fagment>
    )
  }
}

render(<App />, document.getElementById('root'))
