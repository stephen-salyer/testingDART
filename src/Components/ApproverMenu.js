import React from 'react';
import 'typeface-roboto';
import {
  Menu,
  Button,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
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

  const [age, setAge] = React.useState('10');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const menuProps = {
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
        anchorOrigin={{
          vertical: 'left',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'right',
          horizontal: 'center',
        }}
      >
        <Box display="flex" flexDirection="column" p={1}>
          <ApproverManualNotify />
          <Box pt={1} pb={1}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Wave
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                DefaultValue={10}
                label="Wave"
                MenuProps={menuProps}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                <MenuItem value={40}>4</MenuItem>
                <MenuItem value={50}>5</MenuItem>
                <MenuItem value={60}>6</MenuItem>
                <MenuItem value={70}>7</MenuItem>
                <MenuItem value={80}>8</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button onClick={handleClose}>
            <DeleteComponentModal />
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default ApproverMenu;
