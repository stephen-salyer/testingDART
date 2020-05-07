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

const ApprovalStatusDraft = () => {
  const classes = useStyles();

  return (
    <List>
      {[1, 2, 3, 4, 5].map((n) => (
        <Fragment key={n}>
          <Link
            to={'/program/' + n}
            rel="noopener noreferrer"
            className={classes.linkNoDecoration}
          >
            <ListItem className={classes.listItemCorrection} button>
              <ListItemText
                className={classes.listItemTextNoMargin}
                primary={'SDACCL • Acceleron Loyalty'}
                secondary={'Pulled Back: 5 Times'}
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <Grid item key={n} xs={12} md={6} lg={4}>
                  <Box>
                    <Fragment key={n}>
                      <List>
                        <ListItem>
                          <Box pr={2}>
                            <Typography variant="overline">DONE</Typography>
                          </Box>
                          <Box display="flex" flexDirection="column">
                            <ListItemText
                              primary={
                                <Typography
                                  className={classes.department}
                                  variant="overline"
                                >
                                  Marketing
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  className={classes.lastname}
                                  variant="subtitle1"
                                >
                                  Average Last Name Length
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
                                  Average First Name Length
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
                    </Fragment>
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
