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

export default function GeographyEligibilityState() {
  return (
    <>
      <Box style={{height: '255px', overflow: 'scroll'}} pl={2}>
        {[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
        ].map((n) => (
          <>
            <List key={n}>
              <ListItemText primary="Material" secondary="Product • Brand" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <RemoveCircleIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </List>
            <Divider />
          </>
        ))}
      </Box>
    </>
  );
}
