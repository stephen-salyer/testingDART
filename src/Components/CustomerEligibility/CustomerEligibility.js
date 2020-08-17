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
  TextField,
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

export default function CustomerEligibility() {
  const [value, setValue] = React.useState('Include');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [customer, setAccounts] = React.useState(10);
  const someAccounts = customer === 20;
  const other = customer === 40;

  const handleChange1 = (event) => {
    setAccounts(event.target.value);
  };

  return (
    <>
      <Grid item xs={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Customer Eligibility"
        />
        <Divider />
      </Grid>
      <Grid item xs={12} lg={someAccounts ? 4 : 6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Customers</InputLabel>
          <Select
            MenuProps={MenuProps}
            onChange={handleChange1}
            label="Which Customers"
          >
            <MenuItem value={10}>All Customer</MenuItem>
            <MenuItem value={20}>Some Customer Groups</MenuItem>
            <MenuItem value={30}>Specific Customers</MenuItem>
            {/* display classification that goes with customer */}
            <MenuItem value={40}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {someAccounts && (
        <>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Account Classification</InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Account Classification"
                defaultValue={20}
              >
                <MenuItem value={10}>Farmer Customer</MenuItem>
                <MenuItem value={20}>Farmer Customer</MenuItem>
                <MenuItem value={30}>Farmer Customer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Segment</InputLabel>
              <Select MenuProps={MenuProps} label="Segment" defaultValue={20}>
                <MenuItem value={10}>NEED SELECTIONS</MenuItem>
                <MenuItem value={20}>NEED SELECTIONS</MenuItem>
                <MenuItem value={30}>NEED SELECTIONS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
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
      )}
      {other && (
        <>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Undefined Customers Here"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </>
      )}
    </>
  );
}
