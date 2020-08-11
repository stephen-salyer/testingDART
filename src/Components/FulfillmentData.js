import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import DeleteScopeModal from './DeleteScopeModal';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Grid, Box, Divider, TextField} from '@material-ui/core';

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
    dataSource: 'SAP',
  },
  {
    id: 2,
    dataSource: 'Other',
  },
];

const inputs = [
  {
    id: 1,
    key: 'dataSource',
    label: 'Data Source',
    value: ['SAP'],
    size: 6,
  },
  {
    id: 2,
    key: 'dataNeeded',
    label: 'Data Needed',
    value:
      'Programs works with the SAP Pricing team on templates created/updated early Fall (& throughout year as new materials or changes are needed) for off invoice rebate to result during when ordering period begins. Timing: By Sept 1 if possible, contingent on SRP pricing being complete.  Discounts can only be applied after pricing loaded by Finance/SAP Pricing team. Ordering generally begins in Nov/Dec, if discounts are added after credit-rebills must result from Customer Care. Pricing team validates discounts with Customer Care in Canada',
    size: 6,
  },
];

export default function FulfillmentData() {
  const [scopes, setScopes] = React.useState(scopeData);
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return scopeData.map(({dataSource, id}) => (
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
              {[dataSource].join(' • ')}
            </Typography>
          </Box>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            {inputs.map(({label, value, size}, i) => (
              <Grid key={i} item xs={12} md={size}>
                <TextField
                  variant="outlined"
                  label={label}
                  defaultValue={value}
                  multiline
                  rows={6}
                  fullWidth
                />
              </Grid>
            ))}
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
  ));
}
