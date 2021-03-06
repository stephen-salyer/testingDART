import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  ListItemText,
  List,
  ListItemSecondaryAction,
  Divider,
  Button,
  Box,
  Container,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Publish} from '@material-ui/icons';
import ProgramMenu from './ProgramMenu';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    paddingTop: '16px',
  },
  indicator: {
    backgroundColor: '#142357',
  },
  listItemTertiary: {
    marginTop: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
  listItemTextMargin: {
    marginBottom: '0',
  },
  tabs: {
    minWidth: '200px',
  },
});

export default function AttachedFiles() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12}>
            <Box p={3} display="flex" justifyContent="flex-end">
              <Button color="primary" variant="outlined" endIcon={<Publish />}>
                Upload Attachment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {[1, 2, 3, 4].map((n) => (
            <Grid item sm={12} key={n}>
              <List style={{paddingLeft: 16}}>
                <ListItemText
                  className={classes.listItemTextMargin}
                  primary={
                    <Typography variant="overline" style={{lineHeight: '0px'}}>
                      Person Name Here • Date Here
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle1">
                      Attachment Name 123-456-789 ABC-DEF-GHI
                    </Typography>
                  }
                />
                <ListItemText
                  style={{paddingRight: 50}}
                  primary={
                    <Typography className={classes.listItemTertiary}>
                      Additional information is what would go here. This
                      described the attachment and its purpose
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <ProgramMenu />
                </ListItemSecondaryAction>
              </List>
              <Divider />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
