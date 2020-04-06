import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import 'typeface-roboto';
import Link from '@material-ui/core/Link';

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
});

const ProgramListItems = () => {
  const classes = useStyles();

  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <Fragment key={n}>
          <ListItem
            component={Link}
            to="/"
            className={classes.listItemCorrection}
            button
          >
            <ListItemText
              className={classes.listItemTextNoMargin}
              primary={2016 + n + ' Acceleron Loyalty'}
              secondary={'SDACCL • Version 1.1 • 09/01/2019 - 08/31/2020'}
            />
            <ListItemText
              classes={{primary: classes.listItemTertiary}}
              primary={
                'TED: ' +
                (5e6 + n * 482759).toLocaleString() +
                'USD • Type: Activity Incentive • Payee: Dealer/Retail • Program Communication Date: 01/01/2020'
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="morevert">
                <MoreVertIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default ProgramListItems;
