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

export default function GeographyEligibilityCountry() {
  return (
    <>
      <Box style={{maxHeight: '255px', overflow: 'scroll'}}>
        <List style={{padding: 16}}>
          <ListItemText primary="US" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <RemoveCircleIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </List>
        <Divider />
      </Box>
    </>
  );
}
