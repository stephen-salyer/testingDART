import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {RemoveCircle, Add} from '@material-ui/icons';
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
  ListItemSecondaryAction,
  ListItem,
  List,
  TextField,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
    minWidth: '50vw',
  },
  modalButton: {
    marginTop: '8px',
    maxWidth: '98px',
  },
}));

const customers = [
  {name: 'Oliver Hansen', sapId: '12345'},
  {name: 'Van Henry', sapId: '12345'},
  {name: 'April Tucker', sapId: '12345'},
  {name: 'Ralph Hubbard', sapId: '12345'},
  {name: 'Omar Alexander', sapId: '12345'},
  {name: 'Minh Amato', sapId: '12345'},
  {name: 'Janean Delosh', sapId: '12345'},
  {name: 'Cory Waddington', sapId: '12345'},
  {name: 'Humberto Kiley', sapId: '12345'},
  {name: 'Maisha Parson', sapId: '12345'},
];

const Members = [
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
];

export default function CustomerSearchModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
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
          onClick={() => setOpen(true)}
        >
          Search Customers
        </Button>
      </Box>
      <Modal
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
                  <Box display="flex" alignItems="center">
                    <IconButton component="span" onClick={() => setOpen(false)}>
                      <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h5">Search Customers</Typography>
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
                <Box ml={2} mr={2} mt={1} mb={1}>
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
                <List style={{maxHeight: '393px', overflow: 'scroll'}}>
                  {customers.map(({name, sapId}, i) => (
                    <Box key={i}>
                      <ListItem>
                        <FormControlLabel
                          control={<Checkbox color="primary" name="checkedC" />}
                          label={
                            <ListItemText primary={sapId} secondary={name} />
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <RemoveCircle />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </Box>
                  ))}
                </List>
              </Grid>
              <Grid item md={5}>
                <Box p={2}>
                  <Autocomplete
                    options={Members}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search Name / SAP ID"
                        variant="outlined"
                      />
                    )}
                  />
                </Box>
                <Box
                  pl={3}
                  pr={3}
                  pt={0}
                  pb={3}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Box pr={1}>
                    <Button color="primary">clear</Button>
                  </Box>
                  <Button variant="outlined" color="primary">
                    Apply Filters
                  </Button>
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
