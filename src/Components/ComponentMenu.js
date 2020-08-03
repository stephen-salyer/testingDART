import React from 'react';
import 'typeface-roboto';
import {
  Menu,
  Button,
  IconButton,
  Box,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import {MoreVert} from '@material-ui/icons/';
import DeleteComponentModal from './DeleteComponentModal';
import {red} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const ComponentMenu = () => {
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
          <Button onClick={handleClose}>Copy</Button>
          <ThemeProvider theme={theme}>
            <Button color="primary" onClick={handleClose}>
              <DeleteComponentModal />
            </Button>
          </ThemeProvider>
        </Box>
      </Menu>
    </>
  );
};

export default ComponentMenu;
