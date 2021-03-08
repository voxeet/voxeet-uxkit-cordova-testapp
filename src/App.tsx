import React, { Component } from 'react'
import VoxeetSDK from "./SDK"; //wrapper for the VoxeetSDK global variable created by cordova

export default class App extends Component {
  sdk = VoxeetSDK();

  render() {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
      React + typescript
    </div>
  }
}