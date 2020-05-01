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

export default function CustomerSearchModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: false,
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
          Search Products
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
                    <Typography variant="h5">Search Products</Typography>
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
                  {products.map(
                    (
                      {
                        productName,
                        traitCode,
                        brand,
                        relativeMaturity,
                        lifeCycle,
                        launchYear,
                      },
                      i
                    ) => (
                      <Box key={i}>
                        <ListItem>
                          <FormControlLabel
                            control={
                              <Box pl={1} pr={0} pt={0} pb={0}>
                                <Checkbox color="primary" name="checkedC" />
                              </Box>
                            }
                            label={
                              <ListItemText
                                primary={[productName, brand].join(' • ')}
                                secondary={[
                                  traitCode,
                                  relativeMaturity,
                                  lifeCycle,
                                  launchYear,
                                ].join(' • ')}
                              />
                            }
                          />
                        </ListItem>
                        <Divider />
                      </Box>
                    )
                  )}
                </List>
              </Grid>
              <Grid item md={5}>
                <Box p={3}>
                  <Autocomplete
                    options={products} // THIS DOESNT WORK
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
