import React from 'react';
import Typography from '@material-ui/core/Typography';
import {amber} from '@material-ui/core/colors';
import {withStyles, Tooltip} from '@material-ui/core';
import {WarningOutlined} from '@material-ui/icons';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function ApprovalStatusProgressNotStarted() {
  return (
    <LightTooltip
      title={<Typography>Not Started since 22/22/2222</Typography>}
      placement="right"
    >
      <WarningOutlined
        fontSize="large"
        style={{color: amber[800], paddingRight: 3, paddingLeft: 3}}
      />
    </LightTooltip>
  );
}
