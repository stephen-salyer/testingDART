import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Box, Tooltip, withStyles} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';
import {Edit} from '@material-ui/icons';

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function ProgramListStatusDraft() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        style={{width: 70}}
      >
        <DarkTooltip
          title={<Typography>In Draft since 22/22/2222</Typography>}
          placement="right"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{borderRadius: 100, backgroundColor: grey[500]}}
          >
            <Edit style={{padding: 5, fontSize: 20, color: '#FFF'}} />
          </Box>
        </DarkTooltip>
        <Typography variant="caption">Draft</Typography>
      </Box>
    </>
  );
}
