import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import DeleteScopeModal from './DeleteScopeModal';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Grid, Box, Divider, TextField} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
    startDate: '01/01/2022',
    externalEndDate: '01/01/2022',
    internalEndDate: '01/01/2023',
    estimatedVolumeImpacted: '88',
  },
  {
    id: 2,
    incentive: '1234',
    startDate: '01/01/2022',
    externalEndDate: '01/01/2022',
    internalEndDate: '01/01/2023',
    estimatedVolumeImpacted: '2',
  },
  {
    id: 3,
    incentive: '12345',
    startDate: '01/01/2022',
    externalEndDate: '01/01/2022',
    internalEndDate: '01/01/2023',
    estimatedVolumeImpacted: '1',
  },
  {
    id: 4,
    incentive: '123456',
    startDate: '01/01/2022',
    externalEndDate: '01/01/2022',
    internalEndDate: '01/01/2023',
    estimatedVolumeImpacted: '1',
  },
  {
    id: 5,
    incentive: '1234567',
    startDate: '01/01/2022',
    externalEndDate: '01/01/2022',
    internalEndDate: '01/01/2023',
    estimatedVolumeImpacted: '0',
  },
];

export default function TierRatesDate() {
  const [scopes, setScopes] = React.useState(scopeData);
  const [expanded, setExpanded] = React.useState('');

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-01-01T03:24:00')
  );

  const [selectedDate2] = React.useState(new Date('2020-02-01T03:24:00'));

  const [selectedDate3] = React.useState(new Date('2020-02-01T03:24:00'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChange2 = (date2) => {
    setSelectedDate(date2);
  };

  const handleDateChange3 = (date3) => {
    setSelectedDate(date3);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return scopeData.map(
    ({
      incentive,
      startDate,
      externalEndDate,
      internalEndDate,
      estimatedVolumeImpacted,
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
                Incentive: {incentive} • Start Date: {startDate}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                External End Date: {externalEndDate} • Internal End Date:{' '}
                {internalEndDate} • Estimated Volume Impacted:{' '}
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth={true}
                    inputVariant="outlined"
                    format="YYY/MM/dd"
                    label="Start Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} md={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth={true}
                    inputVariant="outlined"
                    format="YYY/MM/dd"
                    label="External End Date"
                    value={selectedDate2}
                    onChange={handleDateChange2}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth={true}
                    inputVariant="outlined"
                    format="YYY/MM/dd"
                    label="internal End Date"
                    value={selectedDate3}
                    onChange={handleDateChange3}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} md={6}>
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
