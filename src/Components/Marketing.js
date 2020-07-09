import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {} from '@material-ui/pickers';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  FormHelperText,
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
  formControlRadio: {
    margin: '24px 0',
  },
}));

export default function Marketing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Program Strategic Intent"
            variant="outlined"
            fullWidth
          />
          <FormHelperText>
            Some examples of Program Strategic Intent include: Farmers are
            challenged with weed control from resistant weeds; this program
            incentivizes them to take proactive step for residual herbicide use
            as a tool for weed management and protecting Bayer&lsquo;s herbicide
            tolerant trait technologies. Incentive to retailers to take delivery
            of Roundup products in a timeframe most conducive to the needs of
            Bayer. Provides logistic and manufacturing efficiencies to Bayer and
            the customer. Reward growers who support both the “X” brand corn
            seed and the Bayer Crop Protection portfolio. This rewards growers
            who grow their purchases of each and rewards the loyalty of growers
            that currently utilize both products. The purpose of this program is
            to secure volume commitments by providing payments to key accounts
            for seed and traits above and beyond the published incentive
            programs. The payments include Key Accounts agreements and specific
            strategic targets. The overall intent of this program is to drive
            increased unit purchases and to get the distributor to a wholesale
            price. The volume discount increases as the number of purchased
            units increase.
          </FormHelperText>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Reason For Strategic Intent
            </InputLabel>
            <Select
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              }}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Reason For Strategic Intent"
              defaultValue={30}
            >
              <MenuItem value={10}>Select an option</MenuItem>
              <MenuItem value={20}>Advocacy / Brand Image</MenuItem>
              <MenuItem value={30}>Cash Flow</MenuItem>
              <MenuItem value={40}>Cross Selling</MenuItem>
              <MenuItem value={50}>Freedom to operate</MenuItem>
              <MenuItem value={60}>Inventory Management</MenuItem>
              <MenuItem value={70}>Inventory Protection</MenuItem>
              <MenuItem value={80}>Loyalty / Retention</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <form>
        <FormControl component="fieldset" className={classes.formControlRadio}>
          <FormLabel component="legend">Program Classification</FormLabel>
          <RadioGroup aria-label="quiz" name="quiz">
            <Box display="flex">
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="Marketing Program"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="Strategic Agreement"
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  );
}
