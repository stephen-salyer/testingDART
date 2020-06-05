import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import {
  ListItemText,
  List,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Container,
  Button,
  Box,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Publish} from '@material-ui/icons';
import DeleteScopeModal from './DeleteComponentModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
  listItemTextNoMargin: {
    marginBottom: '0',
  },
  tabs: {
    minWidth: '200px',
  },
}));

export default function AttachedFiles() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Box pt={3} display="flex" justifyContent="flex-end">
              <Button color="primary" variant="outlined" endIcon={<Publish />}>
                Upload Attachment
              </Button>
            </Box>
          </Grid>
          {[1, 2, 3, 4].map((n) => (
            <Grid item sm={12} key={n}>
              <Fragment>
                <List>
                  <ListItemText
                    className={classes.listItemTextNoMargin}
                    primary={
                      <Typography
                        variant="overline"
                        style={{lineHeight: '0px'}}
                      >
                        Document Type
                      </Typography>
                    }
                    secondary={
                      <Typography variant="subtitle1">
                        Attachment Name
                      </Typography>
                    }
                  />
                  <ListItemText
                    classes={{primary: classes.listItemTertiary}}
                    primary={'Additional Information'}
                  />
                  <ListItemSecondaryAction>
                    <DeleteScopeModal />
                  </ListItemSecondaryAction>
                </List>
                <Divider />
              </Fragment>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
