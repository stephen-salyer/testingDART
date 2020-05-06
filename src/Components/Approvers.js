import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Grid,
  Box,
  Divider,
  TextField,
  List,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {RemoveCircle} from '@material-ui/icons';
import DeleteWaveModal from './DeleteWaveModal';
import ApproverSnackbar from './ApproverSnackbar';

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
    wave: 'Wave 1',
    approvers: '(9) Approvers',
    notStarted: '(3) Not Started',
  },
  {
    id: 2,
    wave: 'Wave 2',
    approvers: '(6) Approvers',
    notStarted: '(1) Not Started',
  },
  {
    id: 3,
    wave: 'Wave 3',
    approvers: '(3) Approvers',
    notStarted: '(2) Not Started',
  },
  {
    id: 4,
    wave: 'Wave 4',
    approvers: '(4) Approvers',
    notStarted: '(9) Not Started',
  },
];

const inputs = [
  {
    key: 'wave',
    label: 'Wave',
    options: ['1', '2', '3', '4'],
  },
  {
    key: 'approvers',
    label: 'Approvers',
    options: ['(9)', '(6)', '(3)', '(4)'],
  },
  {
    key: 'notStarted',
    label: 'Not Started',
    options: ['(3)', '(1)', '(2)', '(9)'],
  },
];

const accordians = [
  {
    title: ['GLobal Accounting', 'Non-DOA', 'DOA'],
  },
];

const marketingNames = [
  'Oliver Hansen • External Reporting • $1,000,000 • 1 Year',
  'Van Henry • External Reporting • $1,000,000 • 1 Year',
  'April Tucker • External Reporting • $1,000,000 • 1 Year',
  'Ralph Hubbard • External Reporting • $1,000,000 • 1 Year',
  'Omar Alexander • External Reporting • $1,000,000 • 1 Year',
  'Carlos Abbott • External Reporting • $1,000,000 • 1 Year',
  'Miriam Wagner • External Reporting • $1,000,000 • 1 Year',
  'Bradley Wilkerson • External Reporting • $1,000,000 • 1 Year',
  'Virginia Andrews • External Reporting • $1,000,000 • 1 Year',
  'Kelly Snyder • External Reporting • $1,000,000 • 1 Year',
];

const scopeLabel = (scope) => inputs.map(({key}) => scope[key]).join(' • ');

export default function Approvers() {
  const [scopes] = React.useState(scopeData);
  const [expanded, setExpanded] = React.useState('');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {scopes.map((scope) => (
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
            <Container maxWidth="md">
              <Grid item container xs={12} spacing={3}>
                <Grid item xs={12}>
                  <Autocomplete
                    freeSolo
                    options={marketingNames.map((n) => ({title: n}))}
                    getOptionLabel={(option) => option.title}
                    style={{width: '100%'}}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Add Approver"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <Grid item key={n} xs={12} md={6}>
                    <List>
                      <ListItemText
                        className={classes.listItemTextNoMargin}
                        primary={
                          <Typography
                            variant="overline"
                            style={{lineHeight: '0px'}}
                          >
                            Not Started
                          </Typography>
                        }
                        secondary={
                          <Typography variant="subtitle1">
                            This is a long first and last name
                          </Typography>
                        }
                      />
                      <ListItemText
                        classes={{primary: classes.listItemTertiary}}
                        primary={'External Reporting • $1,000,000 • 1 Year'}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <RemoveCircle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </List>
                    <Divider />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </ExpansionPanelDetails>
          <Box p={'0 24px 8px 24px'} display="flex" justifyContent="flex-end">
            <Box pr={1}>
              <DeleteWaveModal />
            </Box>
            <ApproverSnackbar />
          </Box>
          <Divider />
        </ExpansionPanel>
      ))}
    </>
  );
}
