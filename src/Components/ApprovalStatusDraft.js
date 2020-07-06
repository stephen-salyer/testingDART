import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {Link} from 'react-router-dom';
import 'typeface-roboto';
import {
  Button,
  Grid,
  Box,
  Typography,
  Container,
  Hidden,
  IconButton,
} from '@material-ui/core';
import {Email} from '@material-ui/icons';
import ApprovalStatusProgressApproved from './ApprovalStatusProgressApproved';
import ApprovalStatusProgressNotStarted from './ApprovalStatusProgressNotStarted';
import ApprovalStatusProgressPending from './ApprovalStatusProgressPending';

const useStyles = makeStyles({
  linkNoDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const programs = [
  {
    title: '2020 APEX & RT MESA Herbicide Program USA',
    programId: 'APIRFP',
    pulledBack: '3 Times • Program Creation to Approval Submission: 3 weeks',
  },
  {
    title: '2020 Acetanilide Dicamba Incentive Offer US',
    programId: 'CHSAIO',
    pulledBack: '5 Times',
  },
  {title: '2020 Action Pact-Canada', programId: 'R1712', pulledBack: '1 Time'},
  {
    title: '2020 Crop Protection AMF-Canada',
    programId: 'D1707',
    pulledBack: '7 Times',
  },
  {
    title: '2020 Crop Protection Channel Development Resource US',
    programId: 'CHLCRC2',
    pulledBack: '30 Times',
  },
];

const people = [
  {
    name: 'Stefan Peters',
    department: 'Operations',
    progress: <ApprovalStatusProgressNotStarted />,
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'Oliver Hansen',
    department: 'Finance',
    progress: <ApprovalStatusProgressPending />,
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'Van Henry',
    department: 'Finance',
    progress: <ApprovalStatusProgressPending />,
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'Juan Ernesto Albino Ramirez Martinez',
    department: 'Marketing',
    progress: <ApprovalStatusProgressPending />,
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },

  {
    name: 'Mark Oberman',
    department: 'Operations',
    progress: <ApprovalStatusProgressPending />,
    email: (
      <Button edge="end" aria-label="delete">
        EMAIL
      </Button>
    ),
  },
  {
    name: 'April Tucker',
    department: 'Legal',
    progress: <ApprovalStatusProgressApproved />,
  },
  {
    name: 'Ralph Hubbard',
    department: 'Marketing',
    progress: <ApprovalStatusProgressApproved />,
  },
  {
    name: 'Omar Alexander',
    department: 'Marketing',
    progress: <ApprovalStatusProgressApproved />,
  },

  {
    name: 'Nicolas Ezequiel Fernandez Zapiola',
    department: 'Marketing',
    progress: <ApprovalStatusProgressApproved />,
  },

  {
    name: 'Prekki Srinivasa Sudhakar',
    department: 'Marketing',
    progress: <ApprovalStatusProgressApproved />,
  },
  {
    name: 'Wimonphan Tangmanvitayasak',
    department: 'Marketing',
    progress: <ApprovalStatusProgressApproved />,
  },
];

const ApprovalStatusDraft = () => {
  const classes = useStyles();

  return (
    <List>
      {programs.map(({title, programId, pulledBack}, i) => (
        <Fragment key={i}>
          <Link
            to={'/program/:id'}
            rel="noopener noreferrer"
            className={classes.linkNoDecoration}
          >
            <ListItem className={classes.listItemCorrection} button>
              <ListItemText
                className={classes.listItemTextNoMargin}
                primary={
                  <>
                    <Typography>
                      {programId} • {title}
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography>Pulled Back: {pulledBack}</Typography>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Link
                  to={'/approval-status/'}
                  rel="noopener noreferrer"
                  className={classes.linkNoDecoration}
                >
                  <Hidden smDown>
                    <Button edge="end">Email Owners</Button>
                  </Hidden>
                  <Hidden only={['xl', 'lg', 'md']}>
                    <IconButton edge="end">
                      <Email />
                    </IconButton>
                  </Hidden>
                </Link>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
          <Divider />
          <Container maxWidth="lg" style={{paddingTop: 16}}>
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
                        {progress}
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
          </Container>
        </Fragment>
      ))}
    </List>
  );
};

export default ApprovalStatusDraft;
