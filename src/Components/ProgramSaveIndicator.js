import React from 'react';
import {Box, Typography, CircularProgress} from '@material-ui/core';

export default function ProgramSaveIndicator() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        pr={1}
        style={{opacity: 0.54}}
      >
        <Box pr={0.5}>
          <CircularProgress size={16} thickness={5} />
        </Box>
        <Typography>saving</Typography>
      </Box>
    </>
  );
}
