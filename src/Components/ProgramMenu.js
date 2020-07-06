import React from 'react';
import 'typeface-roboto';
import {Menu, Button, IconButton} from '@material-ui/core';
import {MoreVert, FileCopy} from '@material-ui/icons/';
import DeleteComponentModal from './DeleteComponentModal';

const ProgramMenu = () => {
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
        style={{maxWidth: 160}}
      >
        <Button fullWidth={true} onClick={handleClose} endIcon={<FileCopy />}>
          copy
        </Button>
        <Button fullWidth={true} onClick={handleClose}>
          <DeleteComponentModal />
        </Button>
      </Menu>
    </>
  );
};

export default ProgramMenu;
