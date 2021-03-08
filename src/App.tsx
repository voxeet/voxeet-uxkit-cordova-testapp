import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Login from "./Login";
import { Container } from '@material-ui/core';

const styles = {
};

interface Props {
  classes: any
}

class App extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
    <Container>
      <Login />
    </Container>);
  }
}

export default withStyles(styles)(App);