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
  Divider,
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

const scopeData = [
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

const makeMenuItems = (items) =>
  items.map((item) => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

const inputs = [
  {
    key: 'region',
    label: 'Region',
    options: [
      'Asia / Pacific',
      'Europe / Middle East',
      'North America',
      'South America',
    ],
    size: 6,
  },
  {
    key: 'country',
    label: 'Country',
    options: ['Canada', 'Brazil', 'United States of America'],
    size: 6,
  },
  {
    key: 'businessCategory',
    label: 'Business Category',
    options: ['All', 'Crop Protection', 'Pasture'],
    size: 4,
  },
  {
    key: 'product',
    label: 'Product',
    options: ['All', 'Dicamba', 'Glyphosate', 'Other'],
    size: 4,
  },
  {
    key: 'brand',
    label: 'Brand',
    options: scopeData.map((r) => r.brand),
    size: 4,
  },
];

const scopeLabel = (scope) => inputs.map(({key}) => scope[key]).join(' • ');

export default function CustomizedExpansionPanels() {
  const [scopes, setScopes] = React.useState(scopeData);
  const [expanded, setExpanded] = React.useState('');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return scopes.map((scope) => (
    <ExpansionPanel
      key={scope.id}
      square
      expanded={expanded === 'panel' + scope.id}
      onChange={handleChange('panel' + scope.id)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{scopeLabel(scope)}</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {inputs.map(({label, options, size, key}, i) => (
              <Grid key={i} item xs={12} md={size}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>{label}</InputLabel>
                  <Select
                    MenuProps={{
                      getContentAnchorEl: null,
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                    }}
                    defaultValue={scope[key]}
                    label={label}
                  >
                    {makeMenuItems(options)}
                  </Select>
                </FormControl>
              </Grid>
            ))}
          </Grid>
        </div>
      </ExpansionPanelDetails>
      <Box p={'0 24px 8px 24px'} display="flex" justifyContent="flex-end">
        <Box pr={1} pb={2}>
          <DeleteScopeModal
            onDelete={() => setScopes(scopes.filter((el) => el !== scope))}
          />
        </Box>
      </Box>
      <Divider />
    </ExpansionPanel>
  ));
}
