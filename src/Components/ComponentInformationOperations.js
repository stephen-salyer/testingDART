import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Box, Divider, IconButton, Button, CardHeader} from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {Add} from '@material-ui/icons';

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
        <Grid item sm={12}>
          <TextField
            label="Management Reporting"
            defaultValue="N/A"
            variant="outlined"
            disabled
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
          <CardHeader
            titleTypographyProps={{variant: 'h5'}}
            title="Fulfillment Data"
          />
        </Grid>
        <Divider />
        <Grid item sm={12} md={6}>
          <TextField
            label="Data Needed"
            defaultValue="Programs works with the SAP Pricing team on templates created/updated early Fall (& throughout year as new materials or changes are needed) for off invoice rebate to result during when ordering period begins.

            Timing: By Sept 1 if possible, contingent on SRP pricing being complete.  Discounts can only be applied after pricing loaded by Finance/SAP Pricing team. Ordering generally begins in Nov/Dec, if discounts are added after credit-rebills must result from Customer Care.

            Pricing team validates discounts with Customer Care in Canada"
            variant="outlined"
            rows={4}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Data Source"
            defaultValue="SAP"
            variant="outlined"
            rows={4}
            fullWidth
            multiline
          />
        </Grid>
      </Grid>
      <Box pt={3} pb={3}>
        <Divider />
      </Box>
      <Grid
        container
        spacing={3}
        display="flex"
        flexDirection="row"
        wrap="nowrap"
      >
        <Grid container item spacing={3}>
          <Grid item sm={12} md={6}>
            <TextField
              label="Data Needed"
              variant="outlined"
              rowsMax={4}
              fullWidth
              multiline
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              label="Data Source"
              variant="outlined"
              rowsMax={4}
              fullWidth
              multiline
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} item sm={1} alignItems="center">
          <IconButton>
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Button color="primary" variant="outlined" endIcon={<Add />}>
            Add Financial Profits and Loses
          </Button>
        </Grid>
      </Grid>
      <Box pt={3}></Box>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <TextField
            label="Fulfillment Process"
            variant="outlined"
            rowsMax={4}
            fullWidth
            multiline
            helperText="How the data be gathered to calculate the program payments"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Program Calculation"
            variant="outlined"
            rowsMax={4}
            fullWidth
            multiline
            helperText="Provide an example calculation for each scenario in the component"
          />
        </Grid>
      </Grid>
    </div>
  );
}
