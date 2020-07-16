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
        <List>
          <Box p={1}>
            <ListItemText primary="United States of America" />
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
