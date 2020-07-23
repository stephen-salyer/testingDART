import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  MenuItem,
  Box,
  Divider,
  IconButton,
  Typography,
  List,
  ListItemSecondaryAction,
  Menu,
  Container,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ApproverManualNotify from './ApproverManualNotify';
import {Members, approvers} from './ApproverNonDOADetails';
import {RemoveCircle} from '@material-ui/icons';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export default function ApproverGlobalAccounting() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Autocomplete
          options={Members}
          MenuProps={MenuProps}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="Search Members" variant="outlined" />
          )}
        />
        <Box style={{maxHeight: '400px', overflow: 'scroll'}}>
          {approvers.map(({progress, name, wave, ted, year}, i) => (
            <>
              <List key={i}>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <ApproverManualNotify />
                  <Box display="flex" flexDirection="column" pr={6}>
                    <Typography variant="overline" style={{lineHeight: '1.7'}}>
                      {progress}
                    </Typography>
                    <Typography variant="subtitle1">{name}</Typography>
                    <Typography
                      style={{paddingBottom: 4}}
                      color="textSecondary"
                    >
                      {[wave, ted, year].join(' • ')}
                    </Typography>
                  </Box>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircle />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Box>
              </List>
              <Divider />
            </>
          ))}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Remove Approver</MenuItem>
          </Menu>
        </Box>
      </Container>
    </>
  );
}
