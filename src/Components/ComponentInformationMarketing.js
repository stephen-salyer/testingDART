import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InfoModal from './InfoModal';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Box,
  FormControlLabel,
  Radio,
  InputAdornment,
} from '@material-ui/core';

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
          // increase the specificity for the pseudo class
          color: 'blue',
        },
      },
    },
  },
}));

export default function ComponentInformationMarketing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <TextField
            label="Component Name"
            defaultValue="Component Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Minimum Volume to Qualify"
            defaultValue="2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Component Incentive Type
            </InputLabel>
            <Select
              label="Component Incentive Type"
              defaultValue={30}
              startAdornment={
                <InputAdornment position="start">
                  <InfoModal />
                </InputAdornment>
              }
            >
              <MenuItem value={10}>Activity Incentive</MenuItem>
              <MenuItem value={20}>Guarentee / Claim</MenuItem>
              <MenuItem value={30}>Pyment Incentive</MenuItem>
              <MenuItem value={40}>Purchase Behavior Incentive</MenuItem>
              <MenuItem value={50}>Trade Incentive</MenuItem>
              <MenuItem value={60}>Volume Incentive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Taxes</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Pay"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="Do Not Pay"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
