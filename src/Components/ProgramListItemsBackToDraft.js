import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {Link, withRouter} from 'react-router-dom';
import 'typeface-roboto';
import {Programs} from './ProgramListItemsAll';
import {Typography} from '@material-ui/core';
import ProgramMenu from './ProgramMenu';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  linkNoDecorationAndCorrection: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const ProgramListItemsBackToDraft = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        {Programs.map(
          (
            {title, id, version, year, ted, type, payee, communicationDate},
            i
          ) => (
            <Fragment key={i}>
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
                    <Typography variant="subtitle1" style={{fontWeight: 500}}>
                      {[id, title].join(' • ')}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2">
                      {[ted, version, year].join(' • ')}
                    </Typography>
                  }
                />
                <ListItemText
                  classes={{primary: classes.listItemTertiary}}
                  primary={
                    <Typography variant="body2" color="textSecondary">
                      {[type, payee, communicationDate].join(' • ')}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <ProgramMenu />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Fragment>
          )
        )}
      </List>
    </>
  );
};

export default withRouter(ProgramListItemsBackToDraft);
