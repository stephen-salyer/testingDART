import React from 'react';
import {
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  List,
  Box,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CheckBoxOutlineBlank, CheckBox, RemoveCircle} from '@material-ui/icons';
import OwnersToggle from './OwnersToggle';

const ownersNames = [
  {title: 'Justice Madden'},
  {title: 'Alberto Shepard'},
  {title: 'Anahi Mayo'},
  {title: 'Mohamed Ferrell'},
  {title: 'Jaylin Mcneil'},
  {title: 'Caden Sosa'},
  {title: 'Monica Carroll'},
  {title: 'Leia Roach'},
  {title: 'Kayden Jordan'},
  {title: 'Billy Lester'},
  {title: 'Kinsley Christian'},
  {title: 'Mohamed Hegal'},
];

// const labels = [
//   {title: 'Add Marketing Owner'},
//   {title: 'Add Operations Owner'},
//   {title: 'Add Finance Owner'},
// ];

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export default function CustomizedSelects() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([ownersNames[1], ownersNames[4]]);
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

  const handleClickRemove = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <React.Fragment>
          <Autocomplete
            open={open}
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
                <ListItemText primary={option.title} />
              </React.Fragment>
            )}
            options={[...ownersNames].sort((a, b) => {
              let ai = value.indexOf(a);
              ai = ai === -1 ? value.length + ownersNames.indexOf(a) : ai;
              let bi = value.indexOf(b);
              bi = bi === -1 ? value.length + ownersNames.indexOf(b) : bi;
              return ai - bi;
            })}
            getOptionLabel={(option) => option.state}
            renderInput={(params) => (
              <TextField
                onClick={handleClick}
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                {...params}
                variant="outlined"
                label="something"
                placeholder="Search"
              />
            )}
          />
          <Box style={{height: '255px', overflow: 'scroll'}}>
            {value.map((label) => (
              <>
                <List key={label}>
                  <Box display="flex" alignItems="center">
                    <OwnersToggle />

                    <ListItemText primary={label.title} />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={handleClickRemove}
                        edge="end"
                        aria-label="delete"
                      >
                        <RemoveCircle />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </Box>
                </List>
                <Divider />
              </>
            ))}
          </Box>
        </React.Fragment>
      </Grid>
    </Grid>

    // <div className={classes.root}>
    //   <Grid container spacing={3}>
    //     <>
    //       {selects.map((selects) => (
    //         <Grid item xs={12} md={4} key={selects}>
    //           <FormControl
    //             variant="outlined"
    //             fullWidth={true}
    //             className={classes.formControl}
    //           >
    //             <InputLabel id="demo-simple-select-outlined-label">
    //               {selects}
    //             </InputLabel>
    //             <Select
    //               multiple
    //               labelId="demo-simple-select-outlined-label"
    //               id="demo-simple-select-outlined"
    //               value={personName}
    //               onChange={handleChange}
    //               label={selects}
    //               MenuProps={MenuProps}
    //               renderValue={(selected) => selected.join(', ')}
    //             >
    //               {marketingNames.map((name) => (
    //                 <MenuItem key={name} value={name}>
    //                   <Checkbox checked={personName.includes(name)} />
    //                   <ListItemText primary={name} />
    //                 </MenuItem>
    //               ))}
    //             </Select>
    //           </FormControl>
    //           <Box
    //             style={{maxHeight: '520px', overflow: 'scroll', paddingTop: 8}}
    //           >
    //             {marketingNames.map((n) => (
    //               <Fragment key={n}>
    //                 <List style={{marginTop: '-8px'}}>
    //                   <ListItem>
    //                     <OwnersToggle />
    //                     <ListItemText
    //                       primary={n.split(' ')[1]}
    //                       secondary={n.split(' ')[0]}
    //                     />
    //                     <ListItemSecondaryAction>
    //                       <IconButton edge="end" aria-label="delete">
    //                         <RemoveCircleIcon />
    //                       </IconButton>
    //                     </ListItemSecondaryAction>
    //                   </ListItem>
    //                   <Divider />
    //                 </List>
    //               </Fragment>
    //             ))}
    //           </Box>
    //         </Grid>
    //       ))}
    //     </>
    //   </Grid>
    // </div>
  );
}
