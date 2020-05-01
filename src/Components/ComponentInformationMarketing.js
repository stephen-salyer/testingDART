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
  IconButton,
} from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import GeographyEligibility from './GeographyEligibility/GeographyEligibility';
import CustomerEligibility from './CustomerEligibility/CustomerEligibility';
import ProductEligibility from './ProductEligibility/ProductEligibility';

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
      <Box
        style={{
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
              <Select
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
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Component Teir Rate
              </InputLabel>
              <Select label="Component Teir Rate" defaultValue={10}>
                <MenuItem value={10}>Date</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Rate
              </InputLabel>
              <Select label="Rate" defaultValue={10}>
                <MenuItem value={10}>FOC Discount</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Tier Rates</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Type
              </InputLabel>
              <Select label="Type" defaultValue={10}>
                <MenuItem value={10}>Product</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Product
              </InputLabel>
              <Select label="Product" defaultValue={10}>
                <MenuItem value={10}>Corn</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Incentive"
              defaultValue="25"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Min / Max Volume"
              defaultValue="24 / 10,000"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Estimated Impact"
              defaultValue="0.25%"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Box pb={1}>
              <Divider />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          display="flex"
          flexDirection="row"
          wrap="nowrap"
        >
          <Grid container item spacing={3}>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Type
                </InputLabel>
                <Select label="Type" defaultValue={10}>
                  <MenuItem value={10}>Product</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Product
                </InputLabel>
                <Select label="Product" defaultValue={10}>
                  <MenuItem value={10}>Corn</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Incentive"
                defaultValue="25"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Min / Max Volume"
                defaultValue="24 / 10,000"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Estimated Impact"
                defaultValue="0.25%"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container item sm={1} alignItems="center">
            <IconButton>
              <RemoveCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
