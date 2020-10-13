import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import 'typeface-roboto';
import {
  Button,
  Grid,
  Box,
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  withStyles,
  ListItemSecondaryAction,
  Hidden,
  IconButton,
  List,
} from '@material-ui/core';
import {ExpandMore, Email} from '@material-ui/icons';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiListItem from '@material-ui/core/ListItem';
import ApprovalStatusProgressNotDone from './ApprovalStatusProgressNotDone';
import ApprovalStatusProgressDone from './ApprovalStatusProgressDone';

const ExpansionPanel = withStyles({
  root: {
    border: '0px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ListItem = withStyles({
  container: {
    width: '100%',
  },
})(MuiListItem);

const useStyles = makeStyles({
  listItemTextNoMargin: {
    margin: '0',
    flexGrow: '0',
  },
  linkNoDecorationAndCorrection: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  expandedSummary: {
    margin: 0,
  },
});

const programs = [
  {
    title: '2020 APEX & RT MESA Herbicide Program USA',
    programId: 'APIRFP',
    pulledBack: 'Version: 1.1 • In Draft Since: 20/20/2020',
    // • Program Creation to Approval Submission: 3 weeks
  },
  {
    title: '2020 Acetanilide Dicamba Incentive Offer US',
    programId: 'CHSAIO',
    pulledBack: 'Version: 1.1 • In Draft Since: 20/20/2020',
  },
  {
    title: '2020 Action Pact-Canada',
    programId: 'R1712',
    pulledBack: 'Version: 1.1 • In Draft Since: 20/20/2020',
  },
  {
    title: '2020 Crop Protection AMF-Canada',
    programId: 'D1707',
    pulledBack: 'Version: 1.1 • In Draft Since: 20/20/2020',
  },
  {
    title: '2020 Crop Protection Channel Development Resource US',
    programId: 'CHLCRC2',
    pulledBack: 'Version: 1.1 • In Draft Since: 20/20/2020',
  },
];

const people = [
  {
    name: 'Stefan Peters',
    department: 'Operations',
    progress: (
      <>
        <ApprovalStatusProgressNotDone />
        <Typography variant="caption">Not Done</Typography>
      </>
    ),
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'Oliver Hansen',
    department: 'Finance',
    progress: (
      <>
        <ApprovalStatusProgressNotDone />
        <Typography variant="caption">Not Done</Typography>
      </>
    ),
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'Van Henry',
    department: 'Finance',
    progress: (
      <>
        <ApprovalStatusProgressNotDone />
        <Typography variant="caption">Not Done</Typography>
      </>
    ),
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'Juan Ernesto Albino Ramirez Martinez',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressNotDone />
        <Typography variant="caption">Not Done</Typography>
      </>
    ),
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },

  {
    name: 'Mark Oberman',
    department: 'Operations',
    progress: (
      <>
        <ApprovalStatusProgressNotDone />
        <Typography variant="caption">Not Done</Typography>
      </>
    ),
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'April Tucker',
    department: 'Legal',
    progress: (
      <>
        <ApprovalStatusProgressDone />
        <Typography variant="caption">Done</Typography>
      </>
    ),
  },
  {
    name: 'Ralph Hubbard',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressDone />
        <Typography variant="caption">Done</Typography>
      </>
    ),
  },
  {
    name: 'Omar Alexander',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressDone />
        <Typography variant="caption">Done</Typography>
      </>
    ),
  },

  {
    name: 'Nicolas Ezequiel Fernandez Zapiola',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressDone />
        <Typography variant="caption">Done</Typography>
      </>
    ),
  },

  {
    name: 'Prekki Srinivasa Sudhakar',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressDone />
        <Typography variant="caption">Done</Typography>
      </>
    ),
  },
  {
    name: 'Wimonphan Tangmanvitayasak',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressDone />
        <Typography variant="caption">Done</Typography>
      </>
    ),
  },
];

const ApprovalStatusDraft = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Box pt={1} pb={1}>
          {programs.map(({title, programId, pulledBack}, i) => (
            <Fragment key={i}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                flexGrow="1"
                style={{height: '100%'}}
              >
                <ExpansionPanel elevation={0} square style={{width: '100%'}}>
                  <ExpansionPanelSummary
                    classes={{content: classes.expandedSummary}}
                    style={{padding: '0 16px 0 0', margin: 0}}
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ListItem
                      className={classes.linkNoDecorationAndCorrection}
                      button
                      component={Link}
                      to={'/program/' + i}
                      rel="noopener noreferrer"
                    >
                      <ListItemText
                        className={classes.listItemTextNoMargin}
                        primary={
                          <Typography
                            variant="subtitle1"
                            style={{fontWeight: 500}}
                          >
                            {[programId, title].join(' • ')}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2">{pulledBack}</Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Hidden smDown>
                          <Button
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            edge="end"
                            style={{textDecoration: 'none'}}
                          >
                            Email Owners
                          </Button>
                        </Hidden>
                        <Hidden only={['xl', 'lg', 'md']}>
                          <IconButton edge="end">
                            <Email />
                          </IconButton>
                        </Hidden>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                      {people.map(({name, department, progress, email}, i) => (
                        <>
                          <Grid item key={i} xs={12} sm={6}>
                            <Box
                              display="flex"
                              flexGrow="1"
                              alignItems="center"
                              justifyContent="space-between"
                              style={{height: '100%'}}
                            >
                              <Box display="flex" alignItems="center" pb={1}>
                                <Box
                                  display="flex"
                                  flexDirection="column"
                                  alignItems="center"
                                  justifyContent="center"
                                  pr={2}
                                  style={{minWidth: 70}}
                                >
                                  {progress}
                                </Box>
                                <Box display="flex" flexDirection="column">
                                  <Typography
                                    style={{lineHeight: '1.7'}}
                                    variant="overline"
                                  >
                                    {department}
                                  </Typography>
                                  <Typography style={{paddingBottom: 4}}>
                                    {name}
                                  </Typography>
                                </Box>
                              </Box>
                              <Box p={1}>{email}</Box>
                            </Box>
                            <Divider />
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Box>
              <Divider />
            </Fragment>
          ))}
        </Box>
      </List>
    </>
  );
};

export default ApprovalStatusDraft;
