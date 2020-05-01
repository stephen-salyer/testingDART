import React, {Fragment} from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {
  Divider,
  CardHeader,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import CustomerSearchModal from '../CustomerSearchModal';

const customers = [
  {name: 'Oliver Hansen', sapId: '00012345'},
  {name: 'Van Henry', sapId: '00012345'},
  {name: 'April Tucker', sapId: '00012345'},
  {name: 'Ralph Hubbard', sapId: '00012345'},
  {name: 'Omar Alexander', sapId: '00012345'},
  {name: 'Minh Amato', sapId: '00012345'},
  {name: 'Janean Delosh', sapId: '00012345'},
  {name: 'Cory Waddington', sapId: '00012345'},
  {name: 'Humberto Kiley', sapId: '00012345'},
  {name: 'Maisha Parson', sapId: '00012345'},
];

export default function CustomerEligibility() {
  const [value, setValue] = React.useState('Include');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid item sm={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Customer Eligibility"
        />
      </Grid>
      <Grid item md={12} lg={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Customers</InputLabel>
          <Select label="Which Customers" defaultValue={20}>
            <MenuItem value={10}>All Customer</MenuItem>
            <MenuItem value={20}>Some Account Classification</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={12} lg={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Account Classification</InputLabel>
          <Select label="Account Classification" defaultValue={20}>
            <MenuItem value={10}>Farmer Customer</MenuItem>
            <MenuItem value={20}>Farmer Customer</MenuItem>
            <MenuItem value={30}>Farmer Customer</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={12} lg={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Segment</InputLabel>
          <Select label="Segment" defaultValue={20}>
            <MenuItem value={10}>NEED SELECTIONS</MenuItem>
            <MenuItem value={20}>NEED SELECTIONS</MenuItem>
            <MenuItem value={30}>NEED SELECTIONS</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <CardHeader
              style={{opacity: '0.85'}}
              titleTypographyProps={{variant: 'h6'}}
              title="Customers"
            />
          </Box>
          <RadioGroup value={value} onChange={handleChange}>
            <Box display="flex" flexDirection="row">
              <FormControlLabel
                value="Include"
                control={<Radio />}
                label="Include"
              />
              <FormControlLabel
                value="Exclude"
                control={<Radio />}
                label="Exclude"
              />
            </Box>
          </RadioGroup>
        </Box>
        <Divider />
        <Box style={{maxHeight: '520px', overflow: 'scroll'}}>
          <List style={{padding: 0}}>
            {customers.map(({name, sapId}, i) => (
              <Fragment key={i}>
                <ListItem>
                  <ListItemText primary={sapId} secondary={name} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircleIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Box>
        <CustomerSearchModal />
      </Grid>
    </>
  );
}
