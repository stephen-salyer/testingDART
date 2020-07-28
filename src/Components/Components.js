import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Box, Chip, IconButton, Button} from '@material-ui/core';
import ComponentInformation from './ComponentInformation';
import {Done, Add} from '@material-ui/icons';

const selectableChips = [
  {
    label: 'Canola',
    icon: <Done />,
  },
  {label: 'Corn'},
  {label: 'Soybean'},
  {label: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg'},
  {label: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg'},
  {label: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg'},
  {label: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg'},
  {label: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg'},
  {label: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg'},
  {label: 'Crop Here'},
];

export default function Components() {
  const handleChipClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="flex-start"
        p={2}
        style={{overflow: 'scroll'}}
      >
        <Box pr={1}>
          <Button size="medium" endIcon={<Add />} style={{minWidth: 165}}>
            Add Component
          </Button>
        </Box>
        {selectableChips.map(({label, icon}) => (
          <Box key={label} pr={1}>
            {label === 'Canola' ? (
              <>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Chip
                    clickable
                    color="primary"
                    onDelete="handleChipClick"
                    onClick={handleChipClick}
                    label={label}
                    deleteIcon={icon}
                  />
                  <Box display="flex" pt={1}>
                    <Button variant="outlined" color="secondary">
                      Copy
                    </Button>
                    <Button color="primary">Delete</Button>
                  </Box>
                </Box>
              </>
            ) : (
              <Chip
                clickable
                onClick={handleChipClick}
                label={label}
                deleteIcon={icon}
              />
            )}
          </Box>
        ))}
      </Box>
      <Grid container>
        <ComponentInformation />
      </Grid>
    </>
  );
}
