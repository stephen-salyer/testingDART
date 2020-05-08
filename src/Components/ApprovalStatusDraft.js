import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {Link} from 'react-router-dom';
import 'typeface-roboto';
import {Button, Grid, Box, Typography, Container} from '@material-ui/core';

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
    lineHeight: 0.5,
  },
});

const programs = [
  {
    title: '2017 APEX & RT MESA Herbicide Program USA',
    programId: 'APIRFP',
    pulledBack: '3 Times',
  },
  {
    title: '2017 Acetanilide Dicamba Incentive Offer US',
    programId: 'CHSAIO',
    pulledBack: '5 Times',
  },
  {title: '2017 Action Pact-Canada', programId: 'R1712', pulledBack: '1 Time'},
  {
    title: '2017 Crop Protection AMF-Canada',
    programId: 'D1707',
    pulledBack: '7 Times',
  },
  {
    title: '2017 Crop Protection Channel Development Resource US',
    programId: 'CHLCRC2',
    pulledBack: '30 Times',
  },
];

const people = [
  {name: 'Oliver Hansen', department: 'Finance', progress: 'Done'},
  {name: 'Van Henry', department: 'Finance', progress: 'Not Done'},
  {name: 'April Tucker', department: 'Legal', progress: 'Done'},
  {name: 'Ralph Hubbard', department: 'Marketing', progress: 'Done'},
  {name: 'Omar Alexander', department: 'Marketing', progress: 'Approved'},
  {name: 'Stefan Peters', department: 'Operations', progress: 'Not Done'},
  {name: 'Mark Oberman', department: 'Operations', progress: '5 Weeks Pending'},
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
                  <Button edge="end">Email Owners</Button>
                </Link>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
          <Divider />
          <Container maxWidth="large">
            <Grid container spacing={3}>
              {people.map(({name, department, progress}, i) => (
                <Grid item key={i} xs={12} md={6} lg={4}>
                  <Box>
                    <List>
                      <ListItem>
                        <Box
                          style={{width: '72px'}}
                          display="flex"
                          justifyContent="center"
                          pr={2}
                        >
                          <Typography
                            style={{lineHeight: '1.7'}}
                            variant="overline"
                          >
                            {progress}
                          </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                          <ListItemText
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
                                className={classes.lastname}
                                variant="subtitle1"
                              >
                                {name.split(' ')[1]}
                              </Typography>
                            }
                          />
                          <ListItemText
                            style={{margin: '0'}}
                            primary={
                              <Typography
                                className={classes.firstname}
                                variant="caption"
                              >
                                {name.split(' ')[0]}
                              </Typography>
                            }
                          />
                        </Box>
                        <ListItemSecondaryAction>
                          <Button edge="end" aria-label="delete">
                            EMAIL
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </List>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Fragment>
      ))}
    </List>
  );
};

export default ApprovalStatusDraft;
