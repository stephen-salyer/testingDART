import React from 'react';
import {Button, Box} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';

const Start = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="90vh"
    width="100vw"
  >
    <Link to={'/program-list'} rel="noopener noreferrer">
      <Button variant="contained" color="primary">
        Start Prototype
      </Button>
    </Link>
  </Box>
);

export default withRouter(Start);
