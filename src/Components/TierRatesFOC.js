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
    incentive: '123',
    unitsPurchased: '12345',
    estimatedVolumeImpacted: '88',
  },
  {
    id: 2,
    incentive: '1234',
    unitsPurchased: '12345',
    estimatedVolumeImpacted: '88',
  },
  {
    id: 3,
    incentive: '12345',
    unitsPurchased: '12345',
    estimatedVolumeImpacted: '88',
  },
  {
    id: 4,
    incentive: '123456',
    unitsPurchased: '12345',
    estimatedVolumeImpacted: '88',
  },
];

export default function TierRatesFOC() {
  const [scopes, setScopes] = React.useState(scopeData);
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return scopeData.map(
    ({incentive, unitsPurchased, estimatedVolumeImpacted, id}) => (
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
                Incentive: {incentive}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Units Purchased: {unitsPurchased} • Estimated Volume Impacted:{' '}
                {estimatedVolumeImpacted}%
              </Typography>
            </Box>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Incentive"
                  defaultValue="123"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Units Purchased"
                  defaultValue="12345"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Estimated % Volume Impacted"
                  defaultValue="88"
                  variant="outlined"
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
