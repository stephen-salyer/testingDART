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
        <Grid item xs={6}>
          <TextField
            label="Program Strategic Intent"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
