import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Tooltip, withStyles} from '@material-ui/core';
import {green} from '@material-ui/core/colors';
import {CheckCircle} from '@material-ui/icons';

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function ApprovalStatusProgressDone() {
  return (
    <DarkTooltip
      title={<Typography>Done since 22/22/2222</Typography>}
      placement="right"
    >
      <CheckCircle
        fontSize="large"
        style={{color: green[500], paddingRight: 3, paddingLeft: 3}}
      />
    </DarkTooltip>
  );
}
