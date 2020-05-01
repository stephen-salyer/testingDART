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
import ProductSearchModal from '../ProductSearchModal';

const products = [
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD657',
    brand: 'Stewart',
    traitCode: 'NS5031NFSF',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'OODD859',
    brand: 'Stewart',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
];

export default function ProductEligibility() {
  const [value, setValue] = React.useState('Include');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid item sm={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Product Eligibility"
        />
      </Grid>
      <Grid item md={12} lg={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Products</InputLabel>
          <Select label="Which Products" defaultValue={20}>
            <MenuItem value={10}>All Products</MenuItem>
            <MenuItem value={20}>Some Products</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={12} lg={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Brands</InputLabel>
          <Select label="Which Brands" defaultValue={20}>
            <MenuItem value={10}>Brand 1</MenuItem>
            <MenuItem value={20}>Brand 2</MenuItem>
            <MenuItem value={30}>Brand 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <CardHeader
              style={{opacity: '0.85'}}
              titleTypographyProps={{variant: 'h6'}}
              title="Products"
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
            {products.map(
              (
                {
                  productName,
                  brand,
                  traitCode,
                  relativeMaturity,
                  lifeCycle,
                  launchYear,
                },
                i
              ) => (
                <Fragment key={i}>
                  <ListItem>
                    <ListItemText
                      primary={[productName, brand].join(' • ')}
                      secondary={[
                        traitCode,
                        relativeMaturity,
                        lifeCycle,
                        launchYear,
                      ].join(' • ')}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <RemoveCircleIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </Fragment>
              )
            )}
          </List>
        </Box>
        <ProductSearchModal />
      </Grid>
    </>
  );
}
