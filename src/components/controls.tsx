import * as React from 'react'
import { Component } from 'react'

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <button>start</button>
        <button>stop</button>
        <button>save</button>
      </div>
    )
  }
}
