import {
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';
import MaterialTable from 'material-table';

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
  const [state, setState] = React.useState({
    columns: [
      {title: 'Incentive', field: 'incentive'},
      {title: 'Minimum Sales Target %', field: 'minimumSalesTargetPercent'},
      {title: 'Maximum Sales Target %', field: 'maximumSalesTargetPercent'},
    ],
    data: [
      {
        incentive: 'blank',
        minimumSalesTargetPercent: 'blank',
        maximumSalesTargetPercent: 'blank',
      },
    ],
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Calculations Applied to Eligible Sales"
        />
        <Divider />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">
            Tier Measure
          </InputLabel>
          <Select MenuProps={MenuProps} label="Tier Measure" defaultValue={10}>
            <MenuItem value={10}>Date</MenuItem>
            <MenuItem value={20}>FOC</MenuItem>
            <MenuItem value={30}>None</MenuItem>
            <MenuItem value={40}>Sales Target</MenuItem>
            <MenuItem value={50}>Volume</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl variant="outlined" fullWidth>
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
      <Grid item xs={12} md={4}>
        <FormControl variant="outlined" fullWidth>
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
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">
            Incentive Value
          </InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Incentive Value"
            defaultValue={10}
          >
            <MenuItem value={10}>FOC Discount</MenuItem>
            <MenuItem value={20}>FOC Product</MenuItem>
            <MenuItem value={30}>Percentage</MenuItem>
            <MenuItem value={40}>Program Currency</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Estimated Volume Impacted by...</InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Estimated Volume Impacted by..."
            defaultValue={10}
          >
            <MenuItem value={10}>Percentage</MenuItem>
            <MenuItem value={20}>Number of Units</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <MaterialTable
          title="Tier Rates"
          columns={state.columns}
          data={state.data}
          options={{
            search: false,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return {...prevState, data};
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return {...prevState, data};
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return {...prevState, data};
                  });
                }, 600);
              }),
          }}
        />
      </Grid>
    </Grid>
  );
}
