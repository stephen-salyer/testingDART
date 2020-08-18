import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class ApproverManualNotify extends React.Component {
  state = {
    checked: true,
  };

  handleChange = (event) => {
    this.setState({checked: event.target.checked});
  };

  render() {
    return (
      <FormControlLabel
        style={{paddingLeft: 16}}
        control={
          <Switch
            classes={this.props.classes}
            checked={this.state.checked}
            onChange={this.handleChange}
            value="checked"
            color="secondary"
          />
        }
        labelPlacement="right"
        label="Notify With Wave"
      />
    );
  }
}

export default ApproverManualNotify;
