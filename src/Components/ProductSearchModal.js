import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Add} from '@material-ui/icons';
import {
  Button,
  Typography,
  Box,
  CardHeader,
  Divider,
  Grid,
} from '@material-ui/core';
import ProductEligibilityMaterialModal from './ProductEligibility/ProductEligibilityMaterialModal';

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
    minWidth: '800px',
    maxHeight: '70vh',
  },
  modalButton: {
    marginTop: '8px',
    maxWidth: '98px',
  },
  materialButtonLabel: {
    textTransform: 'none',
  },
}));

export default function ProductSearchModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        fullWidth
        className={classes.materialButtonLabel}
        size="medium"
        style={{height: 56, justifyContent: 'space-between'}}
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        <Typography variant="body1" style={{color: 'rgba(0, 0, 0, 0.54)'}}>
          Add Materials
        </Typography>
        <Add style={{color: 'rgba(0, 0, 0, 0.54)'}} />
      </Button>
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
                  <Box display="flex" alignItems="center" pl={1}>
                    <Typography variant="h5">Search Materials</Typography>
                  </Box>
                </>
              }
            />
            <Divider />
            <ProductEligibilityMaterialModal />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
