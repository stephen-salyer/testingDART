import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  TextField,
  Box,
  ListItem,
  Typography,
  Collapse,
  List,
} from '@material-ui/core';
import {
  RemoveCircle,
  CheckBox,
  CheckBoxOutlineBlank,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function ProductEligibilityBrands() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([brands[0], brands[1]]);
  const [pendingValue, setPendingValue] = React.useState([]);

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick1 = () => {
    setOpen(!open);
  };

  const open1 = Boolean(anchorEl);
  const id = open1 ? 'github-label' : undefined;

  return (
    <React.Fragment>
      <Autocomplete
        open={open1}
        id={id}
        anchorEl={anchorEl}
        onClose={handleClose}
        multiple
        disableClearable
        value={pendingValue}
        onChange={(event, newValue) => {
          setPendingValue(newValue);
        }}
        disableCloseOnSelect
        renderTags={() => null}
        noOptionsText="No labels"
        renderOption={(option, {selected}) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{marginRight: 8}}
              checked={selected}
            />
            <ListItemText primary={option.brand} />
          </React.Fragment>
        )}
        options={[...brands].sort((a, b) => {
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + brands.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + brands.indexOf(b) : bi;
          return ai - bi;
        })}
        groupBy={(brands) => brands.product}
        getOptionLabel={(option) => option.product}
        renderInput={(params) => (
          <>
            <TextField
              onClick={handleClick}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              {...params}
              variant="outlined"
              label="Brands"
              placeholder="Search"
            />
          </>
        )}
      />
      <Box style={{maxHeight: '550px', overflow: 'scroll'}}>
        <ListItem button onClick={handleClick1}>
          <ListItemText
            primary={
              <>
                <Typography>Product1</Typography>
                <Typography variant="caption" color="TextSecondary">
                  2/36 selected
                </Typography>
              </>
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            style={{maxHeight: '228px', overflow: 'scroll'}}
          >
            {value.map((label) => (
              <>
                <ListItem key={label.brand} divider style={{padding: 16}}>
                  <ListItemText primary={label.brand} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircle />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </>
            ))}
          </List>
        </Collapse>
      </Box>
    </React.Fragment>
  );
}

const brands = [
  {
    brand: 'brand1',
    product: 'product1',
  },
  {
    brand: 'brand2',
    product: 'product2',
  },
  {
    brand: 'brand3',
    product: 'product3',
  },
  {
    brand: 'brand4',
    product: 'product4',
  },
];
