import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography} from '@material-ui/core';

class ApproverManualNotify extends React.Component {
  state = {
    checked: false,
  };

  handleChange = (event) => {
    this.setState({checked: event.target.checked});
  };

  render() {
    return (
      <FormControlLabel
        style={{width: '80px', textAlign: 'center'}}
        control={
          <Switch
            classes={this.props.classes}
            checked={this.state.checked}
            onChange={this.handleChange}
            value="checked"
            color="secondary"
          />
        }
        labelPlacement="top"
        label={
          this.state.checked ? (
            <Typography variant="caption">Manually Notify</Typography>
          ) : (
            <Typography variant="caption">Notify With Wave</Typography>
          )
        }
      />
    );
  }
}

export default ApproverManualNotify;
