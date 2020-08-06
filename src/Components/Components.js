import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Box,
  TextField,
  Divider,
  Button,
  Hidden,
  IconButton,
} from '@material-ui/core';
import ComponentInformation from './ComponentInformation';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ComponentMenu from './ComponentMenu';
import {Add} from '@material-ui/icons';

const selectableComponents = [
  {
    label: 'Canola',
  },
  {label: 'Corn'},
  {label: 'Soybean'},
  {label: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg'},
  {label: 'Crop Here'},
];

export default function Components() {
  return (
    <>
      <Box p={3}>
        <Grid container spacing={3}>
          <Hidden smDown>
            <Grid item xs={4}>
              <Autocomplete
                disableClearable
                defaultValue={selectableComponents[0]}
                options={selectableComponents}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Components" variant="filled" />
                )}
              />
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={9}>
              <Autocomplete
                disableClearable
                defaultValue={selectableComponents[0]}
                options={selectableComponents}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Components" variant="filled" />
                )}
              />
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item xs={8}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                style={{height: '100%'}}
              >
                <Button color="primary" variant="outlined" endIcon={<Add />}>
                  Add Component
                </Button>
                <Box pl={1}>
                  <ComponentMenu />
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                style={{height: '100%'}}
              >
                <IconButton color="primary" component="span">
                  <Add />
                </IconButton>
                <ComponentMenu />
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs={12} style={{marginBottom: -8}}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <ComponentInformation />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
