import React from 'react';
import Typography from '@material-ui/core/Typography';
import {amber} from '@material-ui/core/colors';
import {withStyles, Tooltip} from '@material-ui/core';
import {WarningOutlined} from '@material-ui/icons';

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function ApprovalStatusProgressNotDone() {
  return (
    <DarkTooltip
      title={<Typography>Not Done since 22/22/2222</Typography>}
      placement="right"
    >
      <WarningOutlined
        fontSize="large"
        style={{color: amber[500], paddingRight: 3, paddingLeft: 3}}
      />
    </DarkTooltip>
  );
}
