import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  IconButton,
  Box,
  ListItem,
  ListItemText,
  Divider,
  InputBase,
  fade,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {Help, Search} from '@material-ui/icons';

const information = [
  {
    primary: 'Funding Source/Market Funding Category',
    secondary:
      'Select funding source for majority of program spend. If more than one source, please document both sources and related supporting analysis within the &quot;Key Accrual Methodology Assumptions&quot;.',
  },
  {
    primary:
      'Does program require consumption-based accrual methodology which includes channel inventory carryover considerations?',
    secondary:
      'Consumption based accrual methodology is defined as: Accrual based on sales to direct customer (i.e. retailer/dealer) but rebate/discount based on sales to indirect customer (i.e. grower).',
  },
  {
    primary: 'Multi-Year Earnings Criteria',
    secondary:
      'Programs with any earning criteria reference to prior year data (such as earn backs, purchases, prices or ending inventory) and/or Programs offering future discount rights (next season/crop year) based on current season purchases.',
  },
  {
    primary: 'Integrated Acre',
    secondary:
      'Program requires purchase of a combination of products to earn a discount or rebate.',
  },
  {
    primary: 'Does this program offer free product or rebate in kind?',
    secondary:
      'Programs offering incentives to customers that are fulfilled with something other than cash/check or credit note.',
  },
  {
    primary: 'New or Significantly Changed Program',
    secondary:
      'Significant changes include, but are not limited to, fundamental changes to program criteria. The addition of any multi-year criteria, requirements to purchase a combination of products, or where discount eliminates profit is considered significant. Changes to price, volume, or the incentive percentage of sales are not considered significant.',
  },
  {
    primary: 'Program with Prepayment Terms',
    secondary:
      'Programs with payments/account credits in excess of the related program accrual at time of payment.',
  },
  {
    primary: 'Estimated Annual Prepayments Under Program (Program Currency)',
    secondary: 'Program prepayment threshold is 20M USD',
  },
  {
    primary:
      'Could this program alone or in combination with other programs result in a product being sold below cost?',
    secondary:
      'Selling below cost can result in antitrust violations and has potential accounting implications; therefore requires legal and accounting review. Excludes replant and/or claims/PPI programs.',
  },
  {
    primary:
      'Does nondiscretionary program provide different opportunities/incentives to similarly situated customers who might compete against each other in using/reselling that product?',
    secondary:
      'Similarly situated should be evaluated in terms of product offerings, number of locations/acres, volume or other similar comparative factors. For example, are two similarly situated dealers who compete against each other provided different opportunities or incentives under the program, or some similarly situated dealers are covered by the program and others are not? If so, Legal review required.',
  },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.15),
    },
    margin: 0,
    padding: '8px 0',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: 38,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function InfoModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Help onClick={handleOpen} />
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box display="flex" justifyContent="space-between">
              <h2 id="transition-modal-title" style={{margin: '10px 0'}}>
                Descriptions and Examples
              </h2>
              <IconButton
                onClick={handleClose}
                color="inherit"
                style={{height: '48px', margin: '0 -16px 0 0'}}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box pb={2} pt={1}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{'aria-label': 'search'}}
                />
              </div>
            </Box>
            <Box style={{overflow: 'scroll', height: '40vh'}}>
              {information.map(({primary, secondary}) => (
                <>
                  <ListItem>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                  <Divider />
                </>
              ))}
            </Box>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
