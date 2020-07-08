import React from 'react';
import Typography from '@material-ui/core/Typography';
import {WarningOutlined} from '@material-ui/icons';
import {Tooltip, withStyles} from '@material-ui/core';
import {amber} from '@material-ui/core/colors';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function TowerReviewInfoPop() {
  return (
    <LightTooltip
      title={<Typography>You are not an approver on this program.</Typography>}
      placement="right"
    >
      <WarningOutlined
        fontSize="large"
        style={{color: amber[500], paddingRight: 3, paddingLeft: 3}}
      />
    </LightTooltip>
  );
}
