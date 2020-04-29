import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InfoModal from './InfoModal';
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
          // increase the specificity for the pseudo class
          color: 'blue',
        },
      },
    },
  },
}));

export default function Finance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Funding Source
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              label="Funding Source"
            >
              <MenuItem value={10}>Credit / Rebill</MenuItem>
              <MenuItem value={20}>Discretionary Programs</MenuItem>
              <MenuItem value={30}>Distribution Compensation</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Market Funding Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              label="Market Funding Category"
            >
              <MenuItem value={10}>Grower Incentive</MenuItem>
              <MenuItem value={20}>Performance Claims</MenuItem>
              <MenuItem value={30}>Strategic Agreement</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Liability Classification
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
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
        <Grid item xs={12} sm={6} md={6}>
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
        <Grid item xs={12} sm={6} md={6}>
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
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              label="Currency"
            >
              <MenuItem value={10}>Currency 1</MenuItem>
              <MenuItem value={20}>Currency 2</MenuItem>
              <MenuItem value={30}>Currency 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={12} md={6}>
          <Box display="flex">
            <Box mt={-1}>
              <InfoModal />
            </Box>
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
            </FormControl>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Key Accural Assumption Methods"
            multiline
            rows="3"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardHeader
              titleTypographyProps={{variant: 'h5'}}
              title="Global Accounting and Legal Review"
            />
            <InfoModal />
          </Box>
          <Divider />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Program TED exceeds ER Threshold"
            defaultValue="No"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Global Accounting TED Threshold"
            defaultValue="$10,000,000 USD"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Program Term > 12 Months"
            defaultValue="No"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Program Total Expected Discount (TED)"
            defaultValue="1,000,000 USD"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Program Total Expected Discount (TED) - USD"
            defaultValue="$1,000,000 FY19 Budget Rate"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label="Program Total Expected Discount (TED) - EUR"
            defaultValue="€826,993 FY19 Budget Rate"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Multi-Year Earning Criteria?</FormLabel>
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
        <Grid item sm={12} md={6}>
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
          </FormControl>
        </Grid>
        <Grid item sm={12} md={6}>
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
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={12} md={6}>
          <FormControl
            component="fieldset"
            className={classes.formControlRadio}
          >
            <FormLabel>Intigrated Acre?</FormLabel>
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
        <Grid item sm={12} md={6}>
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
          </FormControl>
        </Grid>
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
          <TextField
            label="Document the basis for significant change"
            variant="outlined"
            multiline
            rows="4"
            defaultValue="Sample Text"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={6}>
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
          </FormControl>
        </Grid>
        <Grid item sm={12} md={6}>
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
          </FormControl>
        </Grid>
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
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
