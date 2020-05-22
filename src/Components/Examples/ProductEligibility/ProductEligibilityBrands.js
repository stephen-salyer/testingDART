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

export default function ProductEligibilityBrands() {
  return (
    <>
      <Box style={{maxHeight: '255px', overflow: 'scroll'}} pl={2}>
        {[1, 2, 3].map((n) => (
          <div key={n}>
            <List>
              <ListItemText primary="Brand" secondary="Product" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <RemoveCircleIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </List>
            <Divider />
          </div>
        ))}
      </Box>
    </>
  );
}
