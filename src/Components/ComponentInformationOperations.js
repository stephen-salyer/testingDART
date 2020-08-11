import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Box, Divider, Button, Typography} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import FulfillmentData from './FulfillmentData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: 'orange',
        '&$focused': {
          color: 'blue',
        },
      },
    },
  },
}));

export default function ComponentInformationOperations() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Management Reporting"
            defaultValue="N/A"
            variant="outlined"
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Typography variant="h6">Fulfillment data</Typography>
            <Button color="primary" endIcon={<Add />}>
              Add Fulfillment Data
            </Button>
          </Box>
          <Divider />
          <FulfillmentData />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            label="Fulfillment Process"
            multiline
            rows={4}
            fullWidth
            placeholder="Explain how the data will be gathered to calculate the program payments"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            label="Program Calculation"
            multiline
            rows={4}
            fullWidth
            placeholder="Provide an example calculation for each scenario in the component"
          />
        </Grid>
      </Grid>
    </div>
  );
}
