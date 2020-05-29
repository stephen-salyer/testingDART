import React from 'react';
import 'typeface-roboto';
import {Typography, Box, makeStyles} from '@material-ui/core';
import {Done} from '@material-ui/icons';

const useStyles = makeStyles({
  conState: {
    transform: 'scale(2.2)',
    paddingBottom: 16,
  },
});

const ApprovalStatusNoPrograms = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{height: '50vh'}}
    >
      <Done className={classes.conState} />
      <Typography variant="h6">
        There are no pulled back programs for this filter
      </Typography>
    </Box>
  );
};

export default ApprovalStatusNoPrograms;
