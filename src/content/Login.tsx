import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import VoxeetSDK, { UserInfoClass } from "../sdk/SDK"; //wrapper for the VoxeetSDK global variable created by cordova
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

declare const UserInfo: typeof UserInfoClass;

interface Props {
  classes: any
}


class Login extends Component<Props> {
  sdk = VoxeetSDK();

  onLogin = async () => {
    try {
      await this.sdk.initialize("", "");
      await this.sdk.connect(new UserInfo("", "", ""));
      alert("logged");
    } catch(e) {
      alert(e);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Card raised={true}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Create a session
          </Typography>

          <TextField id="name" type="text" helperText="Participant Name" />
        </CardContent>

        <CardContent>
          <TextField id="externalId" type="text" helperText="External ID" />
        </CardContent>

        <CardActions>
          <Button onClick={this.onLogin} variant="contained" color="primary">
            Open the session
          </Button>
        </CardActions>
      </Card>);
  }
}

export default withStyles(styles)(Login);