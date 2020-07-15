import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import 'typeface-roboto';
import {
  Box,
  Typography,
  withStyles,
  List,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ListItemSecondaryAction,
  Hidden,
  IconButton,
  ExpansionPanelDetails,
  Grid,
} from '@material-ui/core';
import MuiListItem from '@material-ui/core/ListItem';
import ApprovalStatusProgressApproved from './ApprovalStatusProgressApproved';
import {ExpandMore, Email} from '@material-ui/icons';

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
    pulledBack: '22/22/2222',
    timeToApprove: '2 Weeks',
  },
  {
    title: '2020 Acetanilide Dicamba Incentive Offer US',
    programId: 'CHSAIO',
    pulledBack: '33/33/3333',
    timeToApprove: '3 Weeks',
  },
  {
    title: '2020 Action Pact-Canada',
    programId: 'R1712',
    pulledBack: '44/44/4444',
    timeToApprove: '4 Weeks',
  },
  {
    title: '2020 Crop Protection AMF-Canada',
    programId: 'D1707',
    pulledBack: '55/55/5555',
    timeToApprove: '5 Weeks',
  },
  {
    title: '2020 Crop Protection Channel Development Resource US',
    programId: 'CHLCRC2',
    pulledBack: '66/66/6666',
    timeToApprove: '6 Weeks',
  },
];

const people = [
  {
    name: 'Stefan Peters',
    department: 'Operations',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Not Started</Typography>
      </>
    ),
  },
  {
    name: 'Oliver Hansen',
    department: 'Finance',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Pending</Typography>
      </>
    ),
  },
  {
    name: 'Van Henry',
    department: 'Finance',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Pending</Typography>
      </>
    ),
  },
  {
    name: 'Juan Ernesto Albino Ramirez Martinez',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Pending</Typography>
      </>
    ),
  },

  {
    name: 'Mark Oberman',
    department: 'Operations',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Pending</Typography>
      </>
    ),
  },
  {
    name: 'April Tucker',
    department: 'Legal',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Approved</Typography>
      </>
    ),
  },
  {
    name: 'Ralph Hubbard',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Approved</Typography>
      </>
    ),
  },
  {
    name: 'Omar Alexander',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Approved</Typography>
      </>
    ),
  },

  {
    name: 'Nicolas Ezequiel Fernandez Zapiola',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Approved</Typography>
      </>
    ),
  },

  {
    name: 'Prekki Srinivasa Sudhakar',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Approved</Typography>
      </>
    ),
  },
  {
    name: 'Wimonphan Tangmanvitayasak',
    department: 'Marketing',
    progress: (
      <>
        <ApprovalStatusProgressApproved />
        <Typography variant="caption">Approved</Typography>
      </>
    ),
  },
];

const ApprovalStatusApproved = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Box pt={1} pb={1}>
          {programs.map(({title, programId, pulledBack, timeToApprove}, i) => (
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
                          <Typography variant="body2">
                            Approved On: {pulledBack} • Time to Approve:{' '}
                            {timeToApprove}
                          </Typography>
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

export default ApprovalStatusApproved;
