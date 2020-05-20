import React from 'react';
import 'typeface-roboto';
import {Typography, Menu, MenuItem, Box} from '@material-ui/core';
import {Delete, MoreVert, FileCopy} from '@material-ui/icons/';

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
        <MenuItem onClick={handleClose}>
          <Typography variant="inherit">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FileCopy style={{paddingRight: 8}} /> Copy
            </Box>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="inherit">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Delete color="error" style={{paddingRight: 8}} /> Delete Program
            </Box>
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProgramMenu;
