import React, {Fragment} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const ProgramListItems = () => (
  <List>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
      <Fragment key={n}>
        <ListItem button>
          <ListItemText
            primary={2016 + n + ' Acceleron Loyalty'}
            secondary={
              // There is an error in the browser about this, I don't think it wants you to have elements in here
              <div>
                <div>SDACCL • Version 1.1 • 09/01/2019 - 08/31/2020</div>
                <div>
                  TED: {(5e6 + n * 482759).toLocaleString()} USD • Type:
                  Activity Incentive • Payee: Dealer/Retail • Program
                  Communication Date: 01/01/2020
                </div>
              </div>
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

export default ProgramListItems;
