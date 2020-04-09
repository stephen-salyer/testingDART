import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import {Link, withRouter} from 'react-router-dom';
import 'typeface-roboto';

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
});

const ProgramListItemsApproved = () => {
  const classes = useStyles();

  return (
    <List>
      {[1, 2, 3, 4].map((n) => (
        <Fragment key={n}>
          <Link
            to={'/program/' + n}
            rel="noopener noreferrer"
            className={classes.linkNoDecoration}
          >
            <ListItem className={classes.listItemCorrection} button>
              <ListItemText
                className={classes.listItemTextNoMargin}
                primary={'Asgrow 2 You'}
                secondary={'SD2U80 • Version 1.0 • 09/01/2019 - 08/31/2020'}
              />
              <ListItemText
                classes={{primary: classes.listItemTertiary}}
                primary={
                  'TED: ' +
                  (5e6 + n * 482759).toLocaleString() +
                  'USD • Type: Activity Incentive • Payee: Dealer/Retail • Program Communication Date: 06/01/2020'
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="morevert">
                  <MoreVertIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default withRouter(ProgramListItemsApproved);
