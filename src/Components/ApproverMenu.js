import React from 'react';
import 'typeface-roboto';
import {Menu, Button, IconButton, Box} from '@material-ui/core';
import {MoreVert} from '@material-ui/icons/';
import DeleteComponentModal from './DeleteComponentModal';
import ApproverManualNotify from './ApproverManualNotify';

const ApproverMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} edge="end" aria-label="morevert">
        <MoreVert />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box display="flex" flexDirection="column">
          <ApproverManualNotify />
          <Button onClick={handleClose}>
            <DeleteComponentModal />
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default ApproverMenu;
