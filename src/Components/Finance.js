import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AttachmentIcon from '@material-ui/icons/Attachment';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Box,
  FormControlLabel,
  Radio,
  Button,
  CardHeader,
  ListItemText,
  Typography,
  Divider,
  Checkbox,
  FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: 'orange',
        '&$focused': {
          color: 'blue',
        },
      },
    },
  },
  customWidth: {
    maxWidth: 500,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

const names = [
  'Credit/Rebill (extend payment terms – no expense)',
  'Discretionary Programs',
  'Distribution Compensation',
  'Grower Incentives',
  'Guarantee/Performance Claims',
  'Key Account/Strategic Agreements',
  'Licensee/Multiplier Programs',
  'Non-Standard Cost',
  'Payment Incentives',
  'Returns & Allowances',
  'SG&A (ex: Dealer Compensation)',
];

export default function Finance() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className={classes.formControl}
          >
            <InputLabel>Funding Source</InputLabel>

            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              label="Funding Source"
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Market Funding Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              MenuProps={MenuProps}
              label="Market Funding Category"
            >
              <MenuItem value={10}>Grower Incentive</MenuItem>
              <MenuItem value={20}>Performance Claims</MenuItem>
              <MenuItem value={30}>Strategic Agreement</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Liability Classification
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              MenuProps={MenuProps}
              label="Liability Classification"
            >
              <MenuItem value={10}>Accured Market Funding</MenuItem>
              <MenuItem value={20}>
                Accured Saled Commissions, Marketing, Advertising Programs
              </MenuItem>
              <MenuItem value={30}>Contra AR</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Taxes</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Pay"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="Do Not Pay"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Criteria Definition</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Discretionary"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="Non-discretionary"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Does Contract Have Earning Criteria?</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              MenuProps={MenuProps}
              label="Currency"
            >
              <MenuItem value={10}>Currency 1</MenuItem>
              <MenuItem value={20}>Currency 2</MenuItem>
              <MenuItem value={30}>Currency 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>
              <Typography>
                Does program require consumption-based accrual methodology?
              </Typography>
            </FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Required"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="Not Required"
                />
              </Box>
            </RadioGroup>
            <Divider />
            <FormHelperText>
              Consumption based accrual methodology is defined as: Accrual based
              on sales to direct customer (i.e. retailer/dealer) but
              rebate/discount based on sales to indirect customer (i.e. grower).
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Key Accural Assumption Methods"
            multiline
            rows="3"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>
              Is There Whitepaper Supporting Accural Method?
            </FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex" pt={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AttachmentIcon />}
                >
                  Attach Whitepaper
                </Button>
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={{padding: '0'}}>
          <CardHeader
            titleTypographyProps={{variant: 'h5'}}
            title="Global Accounting and Legal Review"
          />
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Program TED exceeds ER Threshold"
            defaultValue="No"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Global Accounting TED Threshold"
            defaultValue="$10,000,000 USD"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Program Term > 12 Months"
            defaultValue="No"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Program Total Expected Discount (TED)"
            defaultValue="1,000,000 USD"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Program Total Expected Discount (TED) - USD"
            defaultValue="$1,000,000 FY19 Budget Rate"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Program Total Expected Discount (TED) - EUR"
            defaultValue="€826,993 FY19 Budget Rate"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Multi-Year Earnings Criteria?</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
            <Divider />
            <FormHelperText>
              Programs with any earning criteria reference to prior year data
              (such as earn backs, purchases, prices or ending inventory) and/or
              Programs offering future discount rights (next season/crop year)
              based on current season purchases.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>New or Signifigantly Changed Program?</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
            <Divider />
            <FormHelperText>
              Significant changes include, but are not limited to, fundamental
              changes to program criteria. The addition of any multi-year
              criteria, requirements to purchase a combination of products, or
              where discount eliminates profit is considered significant.
              Changes to price, volume, or the incentive percentage of sales are
              not considered significant.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>
              <Typography>
                Does The Program Offer Free Rebate or Rebate of Any Kind?
              </Typography>
            </FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
              <Divider />
              <FormHelperText>
                Programs offering incentives to customers that are fulfilled
                with something other than cash/check or credit note.
              </FormHelperText>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>
              <Typography>Intigrated Acre?</Typography>
            </FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
            <Divider />
            <FormHelperText>
              Program requires purchase of a combination of products to earn a
              discount or rebate.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Payment with Prepayment Terms?</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
            <Divider />
            <FormHelperText>
              Programs with payments/account credits in excess of the related
              program accrual at time of payment.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>External Reporting Required?</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItemText
            primary={
              <Typography variant="body1">
                Does this program allow customers a refund/credit if the price
                of the product is reduced within a specified period of time
                after the date of original sale? Due to the revenue accounting
                impacts, Global ACC BP approval is required for all Price
                Protection programs.
              </Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{paddingTop: '8px'}}>
                No
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItemText
            primary={
              <Typography variant="body1">
                Does the program provide customers a credit/rebill for the
                purpose of extending the due date for product that they have not
                sold within a specified period of time? Due to the potential
                revenue accounting impacts, Global ACC BP approval is required
                for all credit/rebill programs.
              </Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{paddingTop: '8px'}}>
                No
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItemText
            primary={
              <Typography variant="body1">
                Dealer Return Fee Program. Does the program subject the dealer
                to a handling fee per unit when product returns exceed a defined
                threshold and/or a credit when product returns remain below a
                defined threshold?
              </Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{paddingTop: '8px'}}>
                No
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Document the basis for significant change"
            variant="outlined"
            multiline
            rows="4"
            defaultValue="Sample Text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>
              <Typography>
                Could this program alone or in combination with other programs
                result in a product being sold below cost?
              </Typography>
            </FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
            <Divider />
            <FormHelperText>
              Selling below cost can result in antitrust violations and has
              potential accounting implications; therefore requires legal and
              accounting review. Excludes replant and/or claims/PPI programs.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>
              <Typography>
                Does nondiscretionary program provide different
                opportunities/incentives to similarly situated customers who
                might compete against each other in using/reselling that
                product?
              </Typography>
            </FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <Box display="flex">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="No"
                />
              </Box>
            </RadioGroup>
            <Divider />
            <FormHelperText>
              Similarly situated should be evaluated in terms of product
              offerings, number of locations/acres, volume or other similar
              comparative factors. For example, are two similarly situated
              dealers who compete against each other provided different
              opportunities or incentives under the program, or some similarly
              situated dealers are covered by the program and others are not? If
              so, Legal review required.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItemText
            primary={
              <Typography variant="body1">
                Does the program combine the purchase or use of multiple
                products to qualify for the incentive?
              </Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{paddingTop: '8px'}}>
                No
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItemText
            primary={
              <Typography variant="body1">
                Does the program require exclusivity or loyalty to one or more
                of our products or brands?
              </Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{paddingTop: '8px'}}>
                No
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListItemText
            primary={
              <Typography variant="body1">Legal Approval Required</Typography>
            }
            secondary={
              <Typography variant="subtitle1" style={{paddingTop: '8px'}}>
                No
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}
