import React from 'react';
import Typography from '@material-ui/core/Typography';
import {CheckCircle} from '@material-ui/icons';
import {Tooltip, withStyles} from '@material-ui/core';
import {green} from '@material-ui/core/colors';

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
    minWidth: '87%',
  },
}))(Tooltip);

export default function TowerReviewInfoPopApproved() {
  return (
    <div>
      <DarkTooltip
        title={<Typography>Approved 22/22/2222 by Bob Approverson</Typography>}
        placement="right"
      >
        <CheckCircle fontSize="large" style={{color: green[500]}} />
      </DarkTooltip>
    </div>
  );
}
