import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Box, Tooltip, withStyles} from '@material-ui/core';
import {amber} from '@material-ui/core/colors';
import {AccessTime} from '@material-ui/icons';

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function ProgramListStatusPending() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        style={{width: 70}}
      >
        <DarkTooltip
          title={<Typography>Pending since 22/22/2222</Typography>}
          placement="right"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{borderRadius: 100, backgroundColor: amber[600]}}
          >
            <AccessTime style={{padding: 3, fontSize: 25, color: '#FFF'}} />
          </Box>
        </DarkTooltip>
        <Typography variant="caption">Pending</Typography>
      </Box>
    </>
  );
}
