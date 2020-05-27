import React from 'react';
import {
  Box,
  ListItemText,
  List,
  ListItem,
  Collapse,
  Typography,
} from '@material-ui/core';
import {ExpandLess, ExpandMore} from '@material-ui/icons';

export default function ProductEligibilityBrands() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box style={{maxHeight: '255px', overflow: 'scroll'}}>
        <ListItem button onClick={handleClick}>
          <ListItemText
            primary={
              <>
                <Typography>Product</Typography>
                <Typography variant="caption">4/5 selected</Typography>
              </>
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem divider button>
              <ListItemText primary="Brand 1" />
            </ListItem>
            <ListItem divider button>
              <ListItemText primary="Brand 2" />
            </ListItem>
            <ListItem divider button>
              <ListItemText primary="Brand 3" />
            </ListItem>
            <ListItem divider button>
              <ListItemText primary="Brand 4" />
            </ListItem>
          </List>
        </Collapse>
      </Box>
    </>
  );
}
