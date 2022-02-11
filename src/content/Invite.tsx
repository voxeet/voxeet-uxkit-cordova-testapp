import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import VoxeetSDK, { CreateOptions, UserInfoClass } from "../sdk/SDK"; //wrapper for the VoxeetSDK global variable created by cordova
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { default_styles } from './styles';

declare const UserInfo: typeof UserInfoClass;

interface Props {
  classes: any
}


class Invite extends Component<Props> {
  private sdk = VoxeetSDK();
  private conferenceAlias = "";
  private externalId = "";

  private onExternalId = (event: React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    this.externalId = event.target.value;
  }

  private onConferenceAlias = (event: React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    this.conferenceAlias = event.target.value;
  }

  private onInvite = async () => {
    try {
      const conference = await this.sdk.create({alias: this.conferenceAlias});
      await this.sdk.invite(conference.conferenceId, [ new UserInfo(this.externalId, "", null)]);
      alert("invited");
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
            Invite someone to the conference
          </Typography>

          <TextField onChange={this.onConferenceAlias} id="alias" type="text" helperText="Conference alias" />

          <TextField onChange={this.onExternalId} id="name" type="text" helperText="Participant Name" />
        </CardContent>

        <CardActions>
          <Button onClick={this.onInvite} variant="contained" color="primary">
            Send the invitation
          </Button>
        </CardActions>
      </Card>);
  }
}

export default withStyles(default_styles)(Invite);