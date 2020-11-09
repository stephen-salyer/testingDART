import React from 'react';
import Typography from '@material-ui/core/Typography';
import {WarningOutlined} from '@material-ui/icons';
import {Box, Tooltip, withStyles} from '@material-ui/core';
import {amber} from '@material-ui/core/colors';

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function TowerReviewInfoPop() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <DarkTooltip
        title={
          <Typography>You are not an approver on this program.</Typography>
        }
        placement="right"
      >
        <WarningOutlined
          fontSize="large"
          style={{color: amber[500], paddingRight: 3, paddingLeft: 3}}
        />
      </DarkTooltip>
      <Typography
        variant="caption"
        style={{textAlign: 'center', width: 50, lineHeight: '1.3'}}
      >
        Not an Approver
      </Typography>
    </Box>
  );
}
