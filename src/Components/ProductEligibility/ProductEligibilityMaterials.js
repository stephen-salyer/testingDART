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
  makeStyles,
} from '@material-ui/core';
import {
  RemoveCircle,
  CheckBox,
  CheckBoxOutlineBlank,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';
import ProductSearchModal from '../ProductSearchModal';

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  textField: {
    [`& fieldset`]: {
      borderRadius: '5px 0 0 5px',
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    display: 'flex',
    flexDirection: 'column',
    outline: 0,
    minWidth: '800px',
  },
  modalButton: {
    marginTop: '8px',
    maxWidth: '98px',
  },
}));

export default function ProductEligibilityMateials() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([materials[0]]);
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
      <Box display="flex">
        <Box display="flex" flexDirection="column" style={{width: '120%'}}>
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
                  primary={[option.productName, option.brand].join(' • ')}
                  secondary={[
                    option.traitCode,
                    option.relativeMaturity,
                    option.lifeCycle,
                    option.launchYear,
                  ].join(' • ')}
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
            getOptionLabel={(option) => option.productName}
            renderInput={(params) => (
              <>
                <TextField
                  className={classes.textField}
                  onClick={handleClick}
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  {...params}
                  variant="outlined"
                  label="Material Validation"
                  placeholder="Search"
                />
              </>
            )}
          />
        </Box>
        <div>
          <ProductSearchModal />
        </div>
      </Box>
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
                <ListItem key={label.productName} divider style={{padding: 16}}>
                  <ListItemText
                    primary={[label.productName, label.brand].join(' • ')}
                    secondary={[
                      label.traitCode,
                      label.relativeMaturity,
                      label.lifeCycle,
                      label.launchYear,
                    ].join(' • ')}
                  />
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
    productName: 'DKB230PR13',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
];
