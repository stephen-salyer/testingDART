import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Add, Search} from '@material-ui/icons';
import {
  Button,
  Typography,
  Box,
  IconButton,
  Grid,
  CardHeader,
  Divider,
  FormControlLabel,
  Checkbox,
  ListItemText,
  ListItem,
  List,
  TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    display: 'flex',
    flexDirection: 'column',
    outline: 0,
    minWidth: '600px',
  },
  modalButton: {
    marginTop: '8px',
    maxWidth: '98px',
  },
}));

const customers = [
  {name: 'Oliver Hansen', sapId: '00012345'},
  {name: 'Van Henry', sapId: '00012346'},
  {name: 'April Tucker', sapId: '00012347'},
  {name: 'Ralph Hubbard', sapId: '00012348'},
  {name: 'Omar Alexander', sapId: '00012349'},
  {name: 'Minh Amato', sapId: '00012350'},
  {name: 'Janean Delosh', sapId: '00012351'},
  {name: 'Cory Waddington', sapId: '00012352'},
  {name: 'Humberto Kiley', sapId: '00012353'},
  {name: 'Maisha Parson', sapId: '00012354'},
];

export default function CustomerSearchModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <div>
      <Box style={{padding: '8px 16px'}}>
        <Button
          color="primary"
          variant="outlined"
          endIcon={<Search />}
          onClick={() => setOpen(true)}
        >
          Search Customers
        </Button>
      </Box>
      <Modal
        disableBackdropClick
        disableEnforceFocus
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CardHeader
              title={
                <>
                  <Box
                    pl={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">Search Customers</Typography>
                    <IconButton component="span" onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </>
              }
            />
            <Divider />

            <Grid container>
              <Grid
                item
                md={7}
                style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}
              >
                <Box ml={3} mr={3} mt={1} mb={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Select All"
                  />
                </Box>
                <Divider />
                <List
                  style={{maxHeight: '393px', overflow: 'scroll', padding: 0}}
                >
                  {customers.map(({name, sapId}, i) => (
                    <Box key={i}>
                      <ListItem>
                        <FormControlLabel
                          control={
                            <Box pl={1} pr={0} pt={0} pb={0}>
                              <Checkbox
                                checked={state.checkedC}
                                onChange={handleChange}
                                color="primary"
                                name="checkedC"
                              />
                            </Box>
                          }
                          label={
                            <ListItemText primary={sapId} secondary={name} />
                          }
                        />
                      </ListItem>
                      <Divider />
                    </Box>
                  ))}
                </List>
              </Grid>
              <Grid item md={5}>
                <Box p={3}>
                  <Autocomplete
                    options={customers}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search Name / SAP ID"
                        variant="outlined"
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item style={{padding: '8px 16px'}}>
                <Button variant="contained" color="primary" endIcon={<Add />}>
                  add (5) Customers To List
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
