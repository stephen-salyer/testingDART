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

export default function ProductEligibilityMateials() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([materials[0], materials[1]]);
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
            <ListItemText
              primary={option.material}
              secondary={
                <>
                  <Typography color="textSecondary">
                    {option.product} • {option.brand}
                  </Typography>
                </>
              }
            />
          </React.Fragment>
        )}
        options={[...materials].sort((a, b) => {
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + materials.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + materials.indexOf(b) : bi;
          return ai - bi;
        })}
        groupBy={(materials) => materials.product}
        getOptionLabel={(option) => option.product}
        renderInput={(params) => (
          <>
            <TextField
              onClick={handleClick}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              {...params}
              variant="outlined"
              label="Materials"
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
                <Typography>Product1 • Brand1</Typography>
                <Typography variant="caption" color="TextSecondary">
                  2/21 selected
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
                <ListItem key={label.material} divider style={{padding: 16}}>
                  <ListItemText primary={label.material} />
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

const materials = [
  {
    material: 'Material1',
    brand: 'Brand1',
    product: 'Product1',
  },
  {
    material: 'Material2',
    brand: 'Brand2',
    product: 'Product2',
  },
  {
    material: 'Material3',
    brand: 'Brand3',
    product: 'Product3',
  },
  {
    material: 'Material4',
    brand: 'Brand4',
    product: 'Product4',
  },
];
