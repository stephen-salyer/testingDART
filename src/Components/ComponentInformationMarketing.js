import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
  Typography,
  Divider,
  CardHeader,
  Checkbox,
} from '@material-ui/core';
import GeographyEligibilityCountry from './GeographyEligibilityCountry';
import GeographyEligibilityState from './GeographyEligibilityState';

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

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <div className={classes.root}>
      <Box
        style={{
          overflowX: 'hidden',
          overflowY: 'scroll',
          maxHeight: '41vh',
          paddingTop: '8px',
        }}
      >
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
              <Select label="Component Incentive Type" defaultValue={30}>
                <MenuItem value={10}>Activity Incentive</MenuItem>
                <MenuItem value={20}>Guarentee / Claim</MenuItem>
                <MenuItem value={30}>Payment Incentive</MenuItem>
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
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="subtitle1">Treatment</Typography>
            <Box display="flex" pt={2}>
              <Box pr={1} width="100%">
                <TextField
                  label="Go To Market Partners"
                  defaultValue="43%"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box pl={1} width="100%">
                <TextField
                  label="Grower"
                  defaultValue="57%"
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl
              component="fieldset"
              className={classes.formControlRadio}
            >
              <FormLabel>
                <Typography variant="subtitle1">
                  Is This Program For A Specific Customer?
                </Typography>
              </FormLabel>
              <RadioGroup aria-label="quiz" name="quiz">
                <Box display="flex">
                  <FormControlLabel
                    value="best"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="worst"
                    control={<Radio />}
                    label="No"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Season
              </InputLabel>
              <Select disabled label="Season" defaultValue={10}>
                <MenuItem value={10}>N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Sub-Country Commercial Area
              </InputLabel>
              <Select disabled label="Season" defaultValue={10}>
                <MenuItem value={10}>N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <CardHeader
              titleTypographyProps={{variant: 'h6'}}
              title="Geography Eligibility"
            />
            <Divider />
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Which Geographies</InputLabel>
              <Select label="Which Geographies" defaultValue={20}>
                <MenuItem value={10}>All Geographies</MenuItem>
                <MenuItem value={20}>Some Geographies</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl multiple fullWidth variant="outlined">
              <InputLabel>Country</InputLabel>
              <Select label="Country">
                <Box pl={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                        value={10}
                      />
                    }
                    label="United States of America"
                  />
                </Box>
                {/* <MenuItem value={10}>United States of America</MenuItem> */}
              </Select>
            </FormControl>
            <GeographyEligibilityCountry />
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl multiple fullWidth variant="outlined">
              <InputLabel>State / Province / Ect.</InputLabel>
              <Select label="State / Province / Ect.">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <Box pl={2} key={n}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          color="primary"
                          value={10}
                        />
                      }
                      label="State Name Here"
                    />
                  </Box>
                ))}
              </Select>
            </FormControl>
            <GeographyEligibilityState />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
