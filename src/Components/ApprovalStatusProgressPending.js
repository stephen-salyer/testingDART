import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Tooltip, withStyles} from '@material-ui/core';
import {amber} from '@material-ui/core/colors';
import {Timelapse} from '@material-ui/icons';

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function ApprovalStatusProgressPending() {
  return (
    <DarkTooltip
      title={<Typography>Pending since 22/22/2222</Typography>}
      placement="right"
    >
      <Timelapse
        fontSize="large"
        style={{color: amber[500], paddingRight: 3, paddingLeft: 3}}
      />
    </DarkTooltip>
  );
}
