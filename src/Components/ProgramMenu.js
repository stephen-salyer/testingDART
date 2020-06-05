import React from 'react';
import 'typeface-roboto';
import {Menu, Box, Button} from '@material-ui/core';
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
      <MoreVert onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button fullWidth={true} onClick={handleClose} endIcon={<FileCopy />}>
          copy
        </Button>
        <Box onClick={handleClose}>
          <DeleteComponentModal />
        </Box>
      </Menu>
    </>
  );
};

export default ProgramMenu;
