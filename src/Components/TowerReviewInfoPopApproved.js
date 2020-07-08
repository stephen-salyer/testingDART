import React from 'react';
import Typography from '@material-ui/core/Typography';
import {CheckCircle} from '@material-ui/icons';
import {Tooltip, withStyles} from '@material-ui/core';
import {green} from '@material-ui/core/colors';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
    minWidth: '87%',
  },
}))(Tooltip);

export default function TowerReviewInfoPopApproved() {
  return (
    <div>
      <LightTooltip
        title={<Typography>Approved 22/22/2222 by Bob Approverson</Typography>}
        placement="right"
      >
        <CheckCircle fontSize="large" style={{color: green[500]}} />
      </LightTooltip>
    </div>
  );
}
