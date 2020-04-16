import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import DeleteScopeModal from './DeleteScopeModal';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
}));

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 64,
    '&$expanded': {
      minHeight: 72,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  /*
  
   <ExpansionPanel
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>
            North America • US • Crop Protection • Glyphosate • Roundup
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Region"
                  >
                    <MenuItem value={10}>Australia</MenuItem>
                    <MenuItem value={20}>North America</MenuItem>
                    <MenuItem value={30}>South America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Country"
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>Brazil</MenuItem>
                    <MenuItem value={30}>United States of America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Business Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Business Category"
                  >
                    <MenuItem value={10}>all</MenuItem>
                    <MenuItem value={20}>Crop Protection</MenuItem>
                    <MenuItem value={30}>Pasture</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Product"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Glyphosate</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Brand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Brand"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Asgrow</MenuItem>
                    <MenuItem value={30}>Roundup</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
        <Box pl={3} pr={3}>
          <DeleteScopeModal />
        </Box>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>
            North America • US • Crop Protection • Glyphosate • Degree Xtra
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Region"
                  >
                    <MenuItem value={10}>Australia</MenuItem>
                    <MenuItem value={20}>North America</MenuItem>
                    <MenuItem value={30}>South America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Country"
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>Brazil</MenuItem>
                    <MenuItem value={30}>United States of America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Business Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Business Category"
                  >
                    <MenuItem value={10}>all</MenuItem>
                    <MenuItem value={20}>Crop Protection</MenuItem>
                    <MenuItem value={30}>Pasture</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Product"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Acetanilide</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Brand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Brand"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Asgrow</MenuItem>
                    <MenuItem value={30}>Degree Xtra</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
        <Box pl={3} pr={3}>
          <DeleteScopeModal />
        </Box>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography>
            North America • US • Crop Protection • Dicamba • Roundup Xtend
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Region"
                  >
                    <MenuItem value={10}>Australia</MenuItem>
                    <MenuItem value={20}>North America</MenuItem>
                    <MenuItem value={30}>South America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Country"
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>Brazil</MenuItem>
                    <MenuItem value={30}>United States of America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Business Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Business Category"
                  >
                    <MenuItem value={10}>all</MenuItem>
                    <MenuItem value={20}>Crop Protection</MenuItem>
                    <MenuItem value={30}>Pasture</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Product"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Acetanilide</MenuItem>
                    <MenuItem value={30}>Dicamba</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Brand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Brand"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Asgrow</MenuItem>
                    <MenuItem value={30}>Roundup Xtend</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
        <Box pl={3} pr={3}>
          <DeleteScopeModal />
        </Box>
      </ExpansionPanel>
  
  */

  const regions = [
    'Asia / Pacific',
    'Europe / Middle East',
    'North America',
    'South America',
  ];

  const data = [
    {
      id: 1,
      region: 'North America',
      country: 'United States of America',
      businessCategory: 'Crop Protection',
      product: 'Glyphosate',
      brand: 'All',
    },
    {
      id: 2,
      region: 'North America',
      country: 'United States of America',
      businessCategory: 'Crop Protection',
      product: 'Glyphosate',
      brand: 'Roundup',
    },
    {
      id: 3,
      region: 'North America',
      country: 'United States of America',
      businessCategory: 'Crop Protection',
      product: 'Glyphosate',
      brand: 'Degree Xtra',
    },
    {
      id: 4,
      region: 'North America',
      country: 'United States of America',
      businessCategory: 'Crop Protection',
      product: 'Dicamba',
      brand: 'Roundup Xtra',
    },
  ];

  const countries = ['Canada', 'Brazil', 'United States of America'];

  const makeMenuItems = (items) =>
    items.map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));

  return data.map(({id, region, country, businessCategory, product, brand}) => (
    <ExpansionPanel
      key={id}
      square
      expanded={expanded === 'panel' + id}
      onChange={handleChange('panel' + id)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {region} • {country} • {businessCategory} • {product} • {brand}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Region</InputLabel>
                <Select defaultValue={region} label="Region">
                  {makeMenuItems(regions)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  defaultValue={country}
                  label="Country"
                >
                  {makeMenuItems(countries)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Business Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  defaultValue={20}
                  label="Business Category"
                >
                  <MenuItem value={10}>all</MenuItem>
                  <MenuItem value={20}>Crop Protection</MenuItem>
                  <MenuItem value={30}>Pasture</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Product
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  defaultValue={20}
                  label="Product"
                >
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Glyphosate</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Brand
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  defaultValue={10}
                  label="Brand"
                >
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Asgrow</MenuItem>
                  <MenuItem value={30}>BioAg</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </ExpansionPanelDetails>
      <Box pl={3} pr={3}>
        <DeleteScopeModal />
      </Box>
    </ExpansionPanel>
  ));
}
