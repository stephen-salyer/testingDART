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
  CardHeader,
  Divider,
  Button,
} from '@material-ui/core';
import GeographyEligibility from './GeographyEligibility/GeographyEligibility';
import CustomerEligibility from './CustomerEligibility/CustomerEligibility';
import ProductEligibility from './ProductEligibility/ProductEligibility';
import {Add} from '@material-ui/icons';

import TierRatesDate from './TierRatesDate';
import TierRatesSalesTarget from './TierRatesSalesTarget';
import TierRatesVolume from './TierRatesVolume';
import TierRatesFOC from './TierRatesFOC';
import TierRatesGraph from './TierRatesGraph';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export default function ComponentInformationMarketing() {
  const classes = useStyles();

  const [componentTierRate, setComponentTierRate] = React.useState(10);
  const date = componentTierRate === 10;
  const foc = componentTierRate === 20;
  const none = componentTierRate === 30;
  const salesTarget = componentTierRate === 40;
  const volume = componentTierRate === 50;

  const handleChange1 = (event) => {
    setComponentTierRate(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box pt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Component Name"
              defaultValue="Canola"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Minimum Volume to Qualify"
              defaultValue="2"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Component Incentive Type
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Component Incentive Type"
                defaultValue={30}
              >
                <MenuItem value={10}>Activity Incentive</MenuItem>
                <MenuItem value={20}>Guarentee / Claim</MenuItem>
                <MenuItem value={30}>Payment Incentive</MenuItem>
                <MenuItem value={40}>Purchase Behavior Incentive</MenuItem>
                <MenuItem value={50}>Trade Incentive</MenuItem>
                <MenuItem value={60}>Volume Incentive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Target Split</Typography>
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
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Season
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                disabled
                label="Season"
                defaultValue={10}
              >
                <MenuItem value={10}>N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Sub-Country Commercial Area
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                disabled
                label="Sub-Country Commercial Area"
                defaultValue={10}
              >
                <MenuItem value={10}>N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <GeographyEligibility />
          <CustomerEligibility />
          <ProductEligibility />
          <Grid item xs={12}>
            <CardHeader
              titleTypographyProps={{variant: 'h6'}}
              title="Calculations Applied to Eligible Sales"
            />
            <Divider />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Tier Measure
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Tier Measure"
                onChange={handleChange1}
                defaultValue={10}
              >
                <MenuItem value={10}>Date</MenuItem>
                <MenuItem value={20}>FOC</MenuItem>
                <MenuItem value={30}>None</MenuItem>
                <MenuItem value={40}>Sales Target</MenuItem>
                <MenuItem value={50}>Volume</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Calculation Base</InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Calculation Base"
                defaultValue={10}
              >
                <MenuItem value={10}>Gross Sell Price (List Price)</MenuItem>
                <MenuItem value={20}>Net Invoice Price</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Calculation On</InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Calculation On"
                defaultValue={10}
              >
                <MenuItem value={10}>Germ and Trait Only</MenuItem>
                <MenuItem value={20}>Germplasm Only</MenuItem>
                <MenuItem value={30}>Not Applicable</MenuItem>
                <MenuItem value={40}>Seed Treatment Only</MenuItem>
                <MenuItem value={50}>Trait Only</MenuItem>
                <MenuItem value={60}>Whole Bag</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Incentive Value
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Incentive Value"
                defaultValue={10}
              >
                <MenuItem value={10}>FOC Discount</MenuItem>
                <MenuItem value={20}>FOC Product</MenuItem>
                <MenuItem value={30}>Percentage</MenuItem>
                <MenuItem value={40}>Program Currency</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Estimated Volume Impacted by...</InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Estimated Volume Impacted by..."
                defaultValue={10}
              >
                <MenuItem value={10}>Percentage</MenuItem>
                <MenuItem value={20}>Number of Units</MenuItem>
              </Select>
            </FormControl>
            {/* <FormControl
              component="fieldset"
              className={classes.formControlRadio}
            >
              <FormLabel component="legend">Volume Impacted By...</FormLabel>
              <RadioGroup aria-label="quiz" name="quiz">
                <Box display="flex">
                  <FormControlLabel
                    value="best"
                    control={<Radio />}
                    label="Percentage"
                  />
                  <FormControlLabel
                    value="worst"
                    control={<Radio />}
                    label="Number of Units"
                  />
                </Box>
              </RadioGroup>
            </FormControl> */}
          </Grid>
          {date && (
            <>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography variant="h6">Tier Rates</Typography>
                  <Button
                    color="primary"
                    className={classes.button}
                    endIcon={<Add />}
                  >
                    Add Additional Tier Rate
                  </Button>
                </Box>
                <Divider />
              </Grid>
              <Grid item xs={8}>
                <TierRatesDate />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" style={{padding: '16px'}}>
                  Estimated Volume
                </Typography>
                <Divider />
                <Box
                  p={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TierRatesGraph />
                </Box>
              </Grid>
            </>
          )}
          {foc && (
            <>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography variant="h6">Tier Rates</Typography>
                  <Button
                    color="primary"
                    className={classes.button}
                    endIcon={<Add />}
                  >
                    Add Additional Tier Rate
                  </Button>
                </Box>
                <Divider />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TierRatesFOC />
                </Grid>
              </Grid>
            </>
          )}
          {none && <></>}
          {salesTarget && (
            <>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography variant="h6">Tier Rates</Typography>
                  <Button
                    color="primary"
                    className={classes.button}
                    endIcon={<Add />}
                  >
                    Add Additional Tier Rate
                  </Button>
                </Box>
                <Divider />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TierRatesSalesTarget />
                </Grid>
              </Grid>
            </>
          )}
          {volume && (
            <>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography variant="h6">Tier Rates</Typography>
                  <Button
                    color="primary"
                    className={classes.button}
                    endIcon={<Add />}
                  >
                    Add Additional Tier Rate
                  </Button>
                </Box>
                <Divider />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TierRatesVolume />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </div>
  );
}
