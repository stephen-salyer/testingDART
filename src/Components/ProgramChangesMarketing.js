import React from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';
import {Warning} from '@material-ui/icons';

const useStyles = makeStyles({
  conState: {
    transform: 'scale(2)',
    paddingBottom: 8,
  },
});

export default function ProgramChangesMarketing() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{height: '50vh'}}
    >
      <Warning className={classes.conState} />
      <Typography variant="h6">No Changes in Marketing</Typography>
      <Typography variant="body2">between the versions selected</Typography>
    </Box>
  );
}
