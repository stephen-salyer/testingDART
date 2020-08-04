import React from 'react';
import {
  Divider,
  Box,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
  List,
} from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default function ProductEligibilityProduct() {
  return (
    <>
      <Box style={{maxHeight: '550px', overflow: 'scroll'}} pl={2}>
        <List>
          <Box p={1}>
            <ListItemText primary="Product1" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <RemoveCircleIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </Box>
        </List>
        <Divider />
      </Box>
    </>
  );
}
