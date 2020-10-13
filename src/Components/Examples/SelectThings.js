import {
  Box,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {Add, Remove} from '@material-ui/icons';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
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

export default function SelectThings() {
  const [alignment, setAlignment] = React.useState('left');
  const [alignment1, setAlignment1] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleAlignment1 = (event, newAlignment) => {
    setAlignment1(newAlignment);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Calculations Applied to Eligible Sales"
        />
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">
            Tier Measure
          </InputLabel>
          <Select MenuProps={MenuProps} label="Tier Measure" defaultValue={40}>
            <MenuItem value={10}>Date</MenuItem>
            <MenuItem value={20}>None</MenuItem>
            <MenuItem value={30}>Sales Target</MenuItem>
            <MenuItem value={40}>Volume</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      {/* <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel>Calculation On</InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Calculation On"
            defaultValue={10}
          >
            <MenuItem value={10}>Germ and Trait Only</MenuItem>
            <MenuItem value={20}>Germplasm Only</MenuItem>
            <MenuItem value={30}>Not Applicable</MenuItem>
            <MenuItem value={40}>Seed Treatment Only</MenuItem>
            <MenuItem value={50}>Trait Only</MenuItem>
            <MenuItem value={60}>Whole Bag</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}
      {/* <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">
            Incentive Value
          </InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Incentive Value"
            defaultValue={10}
          >
            <MenuItem value={10}>Percentage</MenuItem>
            <MenuItem value={20}>Program Currency</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>Estimated Volume Value</InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Estimated Volume Value"
            defaultValue={10}
          >
            <MenuItem value={10}>Percentage</MenuItem>
            <MenuItem value={20}>Number of Units</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}
      <Grid item xs={12}>
        <CardHeader title="Tier Rates" />
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <></>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" justifyContent="flex-end">
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  value="left"
                  aria-label="left aligned"
                  style={{minWidth: 50}}
                >
                  %
                </ToggleButton>
                <ToggleButton
                  value="justify"
                  aria-label="justified"
                  style={{minWidth: 50}}
                >
                  USD$
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <></>
          </Grid>
          <Grid item xs={3}>
            <></>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" justifyContent="flex-end">
              <ToggleButtonGroup
                value={alignment1}
                exclusive
                onChange={handleAlignment1}
                aria-label="text alignment"
              >
                <ToggleButton
                  value="left"
                  aria-label="left aligned"
                  style={{minWidth: 50}}
                >
                  %
                </ToggleButton>
                <ToggleButton
                  value="justify"
                  aria-label="justified"
                  style={{minWidth: 50}}
                >
                  Unit
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <></>
          </Grid>
          <Grid item xs={1}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{height: '100%'}}
            >
              1.
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex">
              <TextField
                id="outlined-basic"
                label="Incentive"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <TextField id="outlined-basic" label="Minimum Volume" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField id="outlined-basic" label="Maximum Volume" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <Box display="flex">
              <TextField
                id="outlined-basic"
                label="Volume Impacted"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box display="flex">
              <IconButton aria-label="delete">
                <Add />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{height: '100%'}}
            >
              2.
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex">
              <TextField
                id="outlined-basic"
                label="Incentive"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <TextField id="outlined-basic" label="Minimum Volume" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField id="outlined-basic" label="Maximum Volume" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <Box display="flex">
              <TextField
                id="outlined-basic"
                label="Volume Impacted"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box display="flex">
              <IconButton aria-label="delete">
                <Add />
              </IconButton>
              <IconButton aria-label="delete">
                <Remove />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={2}>
            <TextField
              disabled
              id="standard-disabled"
              label="Unimpacted Volume"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Calculation Base</InputLabel>
            <Select
              MenuProps={MenuProps}
              label="Calculation Base"
              defaultValue={10}
            >
              <MenuItem value={10}>Gross Sell Price (List Price)</MenuItem>
              <MenuItem value={20}>Net Invoice Price</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
