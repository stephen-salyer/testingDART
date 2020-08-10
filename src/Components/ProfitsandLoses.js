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
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: 0,
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
    marketYear: '2020',
    ted: '1,234,567',
  },
  {
    id: 2,
    region: 'North America',
    country: 'United States of America',
    businessCategory: 'Crop Protection',
    product: 'Glyphosate',
    brand: 'Roundup',
    marketYear: '2020',
    ted: '1,234,567',
  },
  {
    id: 3,
    region: 'North America',
    country: 'United States of America',
    businessCategory: 'Crop Protection',
    product: 'Glyphosate',
    brand: 'Degree Xtra',
    marketYear: '2020',
    ted: '1,234,567',
  },
  {
    id: 4,
    region: 'North America',
    country: 'United States of America',
    businessCategory: 'Crop Protection',
    product: 'Dicamba',
    brand: 'Roundup Xtra',
    marketYear: '2020',
    ted: '1,234,567',
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
    id: 1,
    key: 'associatedScope',
    label: 'Associated Scope',
    options: [
      'North America • US • Crop Protection • Glyphosate • All',
      'North America • US • Crop Protection • Glyphosate • Roundup',
      'North America • US • Crop Protection • Glyphosate • Degree Extra',
      'North America • US • Crop Protection • Dicamba • Degree Extra',
    ],
    size: 6,
  },
  {
    id: 2,
    key: 'marketYear',
    label: 'Market Year',
    options: ['2019', '2020', '2021', '2022'],
    size: 3,
  },
];

export default function ProfitsandLoses() {
  const [scopes, setScopes] = React.useState(scopeData);
  const [expanded, setExpanded] = React.useState('');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return scopeData.map(
    ({
      region,
      country,
      businessCategory,
      product,
      brand,
      marketYear,
      ted,
      id,
    }) => (
      <>
        <ExpansionPanel
          key={id}
          square
          expanded={expanded === 'panel' + id}
          onChange={handleChange('panel' + id)}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" flexDirection="column">
              <Typography variant="subtitle1">
                {[region, country, businessCategory, product, brand].join(
                  ' • '
                )}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {ted} USD • {marketYear}
              </Typography>
            </Box>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              {inputs.map(({label, options, size, textArea}, i) => (
                <Grid key={i} item xs={12} md={size}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel>{label}</InputLabel>
                    <Select
                      MenuProps={{
                        getContentAnchorEl: null,
                        anchorOrigin: {
                          vertical: 'bottom',
                          horizontal: 'left',
                        },
                      }}
                      defaultValue={options[0]}
                      label={label}
                    >
                      {makeMenuItems(options)}
                    </Select>
                  </FormControl>
                  {textArea}
                </Grid>
              ))}
              <Grid item xs={12} md={3}>
                <TextField
                  variant="outlined"
                  label="Expected Discount"
                  defaultValue="2,100,000 USD"
                  fullWidth
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <Box p={'0 24px 8px 24px'} display="flex" justifyContent="flex-end">
            <Box pr={1} pb={2}>
              <DeleteScopeModal
                onDelete={() =>
                  setScopes(scopes.filter((el) => el !== scopeData))
                }
              />
            </Box>
          </Box>
          <Divider />
        </ExpansionPanel>
      </>
    )
  );
}
