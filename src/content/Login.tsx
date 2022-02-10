import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import VoxeetSDK, { UserInfoClass } from "../sdk/SDK"; //wrapper for the VoxeetSDK global variable created by cordova
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Config from "../sdk/Config";

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
  private sdk = VoxeetSDK();
  private participantName = "";
  private externalId = "";
  private initialized = false;

  componentDidMount() {
    this.initialize();
  }

  private initialize = async () => {
    try {
      if(this.initialized) return;
      await this.sdk.initialize(Config.APP_ID, Config.APP_SECRET);
    } catch(e) {
      alert(e);
      //initialize even in case of error
    }
    this.initialized = true;
  }

  private onLogin = async () => {
    try {
      await this.initialize();
      await this.sdk.connect(new UserInfo(this.externalId, this.participantName, null));
      alert("logged");
    } catch(e) {
      alert(e);
    }
  }

  private onParticipantName = (event: React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    this.participantName = event.target.value;
  }

  private onExternalId = (event: React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    this.externalId = event.target.value;
  }

  render() {
    const { classes } = this.props;
    return (
      <Card raised={true}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Create a session
          </Typography>

          <TextField onChange={this.onParticipantName} id="name" type="text" helperText="Participant Name" />
        </CardContent>

        <CardContent>
          <TextField onChange={this.onExternalId} id="externalId" type="text" helperText="External ID" />
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