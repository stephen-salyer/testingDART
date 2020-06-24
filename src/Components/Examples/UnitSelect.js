import React from 'react';
import {TextField, Container, makeStyles, Box} from '@material-ui/core';
import SelectThings from './SelectThings';

const useStyles = makeStyles(() => ({
  textField: {
    [`& fieldset`]: {
      borderRadius: '5px 0 0 5px',
    },
    width: 500,
  },
}));

export default function UnitSelect() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" style={{paddingTop: '100px'}}>
        <Box display="flex">
          <TextField
            id="outlined-basic"
            label="Incentive"
            variant="outlined"
            className={classes.textField}
          />
          <SelectThings />
        </Box>
      </Container>
    </>
  );
}
