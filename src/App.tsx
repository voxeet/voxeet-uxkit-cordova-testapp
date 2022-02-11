import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Login, Invite, Join } from "./content";
import { Container } from '@material-ui/core';

const styles = {
};

interface Props {
  classes: any
}

class App extends Component<Props> {
  render() {
    return (
    <Container>
      <Login />
      <Join />
      <Invite />
    </Container>);
  }
}

export default withStyles(styles)(App);