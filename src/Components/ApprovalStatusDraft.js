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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  listItemCorrection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '&:hover': {
      textDecoration: 'none',
    },
    marginTop: '16px',
  },
  listItemTertiary: {
    marginTop: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
  listItemTextNoMargin: {
    marginBottom: '0',
  },
  linkNoDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
  department: {
    lineHeight: 2.6,
  },
  lastname: {
    lineHeight: 0.8,
  },
  firstname: {
    lineHeight: 2.6,
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
  {name: 'Oliver Hansen', department: 'Finance', progress: 'Done'},
  {name: 'Van Henry', department: 'Finance', progress: 'Not Done'},
  {
    name: 'April Tucker',
    department: 'Legal',
    progress: 'Done',
  },
  {name: 'Ralph Hubbard', department: 'Marketing', progress: 'Done'},
  {name: 'Omar Alexander', department: 'Marketing', progress: 'Approved'},
  {name: 'Stefan Peters', department: 'Operations', progress: 'Not Done'},
  {name: 'Mark Oberman', department: 'Operations', progress: '5 Weeks Pending'},
  {
    name: 'Nicolas Ezequiel Fernandez Zapiola',
    department: 'Marketing',
    progress: 'Done',
  },
  {
    name: 'Juan Ernesto Albino Ramirez Martinez',
    department: 'Marketing',
    progress: 'Approved',
  },
  {
    name: 'Prekki Srinivasa Sudhakar',
    department: 'Marketing',
    progress: 'Approved',
  },
  {
    name: 'Wimonphan Tangmanvitayasak',
    department: 'Marketing',
    progress: 'Approved',
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
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {people.map(({name, department, progress}, i) => (
                <>
                  <Grid item key={i} xs={12} md={6} lg={4}>
                    <Box
                      display="flex"
                      flexGrow="1"
                      flexDirection="column"
                      style={{height: '100%'}}
                    >
                      <List style={{height: '100%'}}>
                        <ListItem style={{height: '100%'}}>
                          <Box
                            style={{width: '72px', height: '100%'}}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            pr={2}
                          >
                            <Typography
                              style={{lineHeight: '1.7'}}
                              variant="overline"
                            >
                              {progress}
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            style={{height: '100%'}}
                          >
                            <ListItemText
                              style={{margin: '0'}}
                              primary={
                                <Typography
                                  className={classes.department}
                                  variant="overline"
                                >
                                  {department}
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  id="nameDiv"
                                  style={{
                                    paddingBottom: '8px',
                                    width: '185px',
                                  }}
                                  variant="subtitle1"
                                >
                                  {name}
                                </Typography>
                              }
                            />
                          </Box>
                          <Box style={{height: '100%'}}>
                            <ListItemSecondaryAction>
                              <Button edge="end" aria-label="delete">
                                EMAIL
                                {/* If approved make email go away */}
                              </Button>
                            </ListItemSecondaryAction>
                          </Box>
                        </ListItem>
                      </List>
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
