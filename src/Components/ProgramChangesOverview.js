import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Divider, Box, ListItemText} from '@material-ui/core';

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

export default function ProgramChangesOverview() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Box display="flex" style={{width: '100%'}}>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ListItemText
                  primary="Program Name"
                  secondary="An Extremely Long Program Name 123123123123123"
                />
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  primary="Program ID"
                  secondary="Program ID Here"
                />
                <Divider />
              </Grid>
            </Grid>
          </Grid>
          <Box pl={3} pr={3}>
            <Divider
              style={{height: '100%', width: 1}}
              orientation="vertical"
              flexItem
            />
          </Box>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ListItemText
                  primary="Program Name"
                  secondary="An Extremely Long Program Name"
                />
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <ListItemText primary="Program ID" secondary="Program ID" />
                <Divider />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
