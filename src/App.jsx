import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const { UserInfo, VoxeetSDK } = VoxeetCordova;

    return <div style={{ display: 'flex', justifyContent: 'center' }}>Hello from React</div>
  }
}