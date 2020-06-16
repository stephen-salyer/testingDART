import React from 'react';
import Container from '@material-ui/core/Container';
import SecondaryNavProgramPrintable from './SecondaryNavProgramPrintable';
import {
  CardHeader,
  Box,
  Typography,
  Grid,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const printables = [
  {
    header: 'Program Summary',
    items: [
      {
        mediumBreak: 4,
        title: 'Program Name',
        secondary: 'An_Extremely Long Program Name 123123123123123',
      },
      {mediumBreak: 4, title: 'Program ID', secondary: 'SY6RH'},
      {mediumBreak: 4, title: 'Program Version', secondary: '1.2'},
      {mediumBreak: 4, title: 'Program Status', secondary: 'Draft'},
      {mediumBreak: 4, title: 'Market Year', secondary: '2020'},
      {
        mediumBreak: 4,
        title: 'Start Communication Date',
        secondary: '01/18/2020',
      },
      {
        mediumBreak: 4,
        title: 'End Communication Date',
        secondary: '01/18/2021',
      },
    ],
  },
  {
    header: 'Program Scope',
    items: [
      {
        mediumBreak: 4,
        title: 'Region',
        secondary: 'Europe / Middle East / Africa',
      },
      {mediumBreak: 4, title: 'Country', secondary: 'Poland'},
      {mediumBreak: 4, title: 'Business Category', secondary: 'Climate'},
      {mediumBreak: 4, title: 'Product', secondary: 'Hardware'},
      {mediumBreak: 4, title: 'Brand', secondary: 'Fieldview'},
    ],
  },
  {
    header: 'Marketing',
    items: [
      {
        mediumBreak: 4,
        title: 'Program Strategic Intent',
        secondary:
          'Support seed business with an offer that differentiates Bayer brand and support Bayer genetics value communication',
      },
      {mediumBreak: 4, title: 'Reason', secondary: 'Sales Volume'},
      {
        mediumBreak: 4,
        title: 'Program Classification',
        secondary: 'Marketing Program',
      },
    ],
  },
  {
    header: 'Operations',
    items: [
      {
        mediumBreak: 4,
        title: 'Payee',
        secondary: 'Dealer / Retail',
      },
      {mediumBreak: 4, title: 'Payment Start Date', secondary: '01/01/2020'},
      {mediumBreak: 4, title: 'Payment End Date', secondary: '01/01/2021'},
    ],
  },
  {
    header: 'Owners',
    items: [
      {
        mediumBreak: 4,
        title: 'Oliver Hanson',
        secondary: 'Marketing',
      },
      {
        mediumBreak: 4,
        title: 'Henry Van',
        secondary: 'Marketing',
      },
      {
        mediumBreak: 4,
        title: 'April Tucker',
        secondary: 'Marketing',
      },
      {
        mediumBreak: 4,
        title: 'Ralph Hubbard',
        secondary: 'Operations',
      },
      {
        mediumBreak: 4,
        title: 'Omar Alenxander',
        secondary: 'Operations',
      },
      {
        mediumBreak: 4,
        title: 'Amber Hangler',
        secondary: 'Operations',
      },
      {
        mediumBreak: 4,
        title: 'Jake Umeba',
        secondary: 'Finance',
      },
      {
        mediumBreak: 4,
        title: 'Nicolas Ezequiel Fernandez Zapiola',
        secondary: 'Finance',
      },
      {
        mediumBreak: 4,
        title: 'Juan Ernesto Albino Ramirez Martinez',
        secondary: 'Finance',
      },
    ],
  },
  {
    header: 'Finance',
    items: [
      {
        mediumBreak: 4,
        title: 'Payee',
        secondary: 'Dealer / Retail',
      },
      {
        mediumBreak: 4,
        title: 'Funding Source',
        secondary: 'Discretionary Program',
      },
      {
        mediumBreak: 4,
        title: 'Market Funding Category',
        secondary: 'Grower Incentive',
      },
      {
        mediumBreak: 4,
        title: 'Liability Classification',
        secondary: 'Accured Market Funding',
      },
      {
        mediumBreak: 4,
        title: 'Taxes',
        secondary: 'Pay',
      },
      {
        mediumBreak: 4,
        title: 'Criteria Definition',
        secondary: 'Discretionary',
      },
      {
        mediumBreak: 4,
        title: 'Does Contract Have Earning Criteria?',
        secondary: 'Yes',
      },
      {
        mediumBreak: 4,
        title: 'Currency',
        secondary: 'CAN',
      },
      {
        mediumBreak: 4,
        title: 'Does program require consumption-based accrual methodology?',
        secondary: 'Required',
      },
      {
        mediumBreak: 4,
        title: 'Key Accural Assumption Methods',
        secondary: 'Blank',
      },
      {
        mediumBreak: 4,
        title: 'Is There Whitepaper Supporting Accural Method?',
        secondary: 'Document Attached',
      },
      {
        mediumBreak: 4,
        title: 'Program TED exceeds ER Threshold',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title: 'Global Accounting TED Threshold',
        secondary: '10,000,000 CAN',
      },
      {
        mediumBreak: 4,
        title: 'Program Term > 12 Months',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title: 'Program Total Expected Discount (TED)',
        secondary: '1,000,000 CAN',
      },
      {
        mediumBreak: 4,
        title: 'Program Total Expected Discount (TED) - USD',
        secondary: '1,000,000 USD FY19 Budget Rate',
      },
      {
        mediumBreak: 4,
        title: 'Program Total Expected Discount (TED) - EUR',
        secondary: '1,000,000 Pounds FY19 Budget Rate',
      },
      {
        mediumBreak: 4,
        title: 'Multi-Year Earning Criteria?',
        secondary: 'Yes',
      },
      {
        mediumBreak: 4,
        title: 'New or Signifigantly Changed Program?',
        secondary: 'Yes',
      },
      {
        mediumBreak: 4,
        title: 'Does The Program Offer Free Rebate or Rebate of Any Kind?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title: 'Intigrated Acre?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title: 'Payment with Prepayment Terms?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title: 'External Reporting Required?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title: 'Document The Basis For Significant Change',
        secondary: 'This is the reason why is changed.',
      },
      {
        mediumBreak: 4,
        title:
          'Does this program allow customers a refund/credit if the price of the product is reduced within a specified period of time after the date of original sale? Due to the revenue accounting impacts, Global ACC BP approval is required for all Price Protection programs.',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title:
          'Does the program provide customers a credit/rebill for the purpose of extending the due date for product that they have not sold within a specified period of time? Due to the potential revenue accounting impacts, Global ACC BP approval is required for all credit/rebill programs.',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title:
          'Dealer Return Fee Program. Does the program subject the dealer to a handling fee per unit when product returns exceed a defined threshold and/or a credit when product returns remain below a defined threshold?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title:
          'Could this program alone or in combination with other programs result in a product being sold below cost?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title:
          'Does nondiscretionary program provide different opportunities/incentives to similarly situated customers who might compete against each other in using/reselling that product?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title:
          'Does the program combine the purchase or use of multiple products to qualify for the incentive?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title:
          'Does the program require exclusivity or loyalty to one or more of our products or brands?',
        secondary: 'No',
      },
      {
        mediumBreak: 4,
        title: 'Legal Approval Required',
        secondary: 'No',
      },
    ],
  },
  {
    header: 'Approvers',
    items: [
      {
        mediumBreak: 4,
        title: 'Global Accounting',
        secondary: 'Justice Madden',
      },
      {
        mediumBreak: 4,
        title: 'Global Accounting',
        secondary: 'Alberto Shepard',
      },
      {
        mediumBreak: 4,
        title: 'Global Accounting',
        secondary: 'Anahi Mayo',
      },
      {
        mediumBreak: 4,
        title: 'Non-DOA • Operations Commercial Org.',
        secondary: 'Justice Madden',
      },
      {
        mediumBreak: 4,
        title: 'Non-DOA • Legal',
        secondary: 'Alberto Shepard',
      },
      {
        mediumBreak: 4,
        title: 'Non-DOA • Sales',
        secondary: 'Anahi Mayo',
      },
      {
        mediumBreak: 4,
        title: 'Non-DOA • Marketing',
        secondary: 'Mohamed Ferrell',
      },
      {
        mediumBreak: 4,
        title: 'Non-DOA • Additional',
        secondary: 'Andy Kamp',
      },
      {
        mediumBreak: 4,
        title: 'DOA • Finance',
        secondary: 'Alberto Shepard',
      },
      {
        mediumBreak: 4,
        title: 'DOA • Sales',
        secondary: 'Anahi Mayo',
      },
      {
        mediumBreak: 4,
        title: 'DOA • Operations Commercial Org.',
        secondary: 'Mohamed Ferrell',
      },
      {
        mediumBreak: 4,
        title: 'DOA • Additional',
        secondary: 'Andy Kamp',
      },
    ],
  },
  {
    header: 'Component - Canola',
    items: [
      {
        mediumBreak: 4,
        title: 'Minimum Volume to Qualify',
        secondary: '2',
      },
      {
        mediumBreak: 4,
        title: 'Component Incentive Type',
        secondary: 'Payment Incentive',
      },
      {
        mediumBreak: 4,
        title: 'Taxes',
        secondary: 'Pay',
      },
      {
        mediumBreak: 4,
        title: 'Treatment - Go To Market Partners',
        secondary: '43%',
      },
      {
        mediumBreak: 4,
        title: 'Treatment - Go To Grower',
        secondary: '57',
      },
      {
        mediumBreak: 4,
        title: 'Is This Program For A Specific Customer?',
        secondary: 'Yes',
      },
      {
        mediumBreak: 4,
        title: 'Which Geographies?',
        secondary: 'Some Geographies',
      },
      {
        mediumBreak: 4,
        title: 'Counties',
        secondary: 'US',
      },
      {
        mediumBreak: 4,
        title: 'States',
        secondary: 'US - Arkansas • US - Alabama',
      },
      {
        mediumBreak: 4,
        title: 'Counties',
        secondary: 'US - Arkansas - County 1 • US - Alabama - County 2',
      },
      {
        mediumBreak: 4,
        title: 'Which Customers?',
        secondary: 'Some Account Classification',
      },
      {
        mediumBreak: 4,
        title: 'Account Classification',
        secondary: 'Farmer Customer',
      },
      {
        mediumBreak: 4,
        title: 'Segment',
        secondary: 'Not Sure What Goes Here',
      },
      {
        mediumBreak: 4,
        title: 'Customers Included',
        secondary: '00012345 - Oliver Hansen • 00012345 - Van Henry',
      },
      {
        mediumBreak: 4,
        title: 'Which Products?',
        secondary: 'All Products',
      },
    ],
  },
  {
    header: 'Calculations Applied to Eligible Sales',
    items: [
      {
        mediumBreak: 6,
        title: 'Component Tier Rates',
        secondary: 'Date',
      },
      {mediumBreak: 6, title: 'Rate', secondary: 'FOC Discount'},
      {mediumBreak: 4, title: 'Type', secondary: 'Product'},
      {mediumBreak: 4, title: 'Product', secondary: 'Corn'},
      {mediumBreak: 4, title: 'Incentive', secondary: '25%'},
      {mediumBreak: 6, title: 'Min / Max Volume', secondary: '24 / 10,000'},
      {mediumBreak: 6, title: 'Estimated Impact', secondary: '0.25%'},
    ],
  },
];

const ProgramPrintable = () => (
  <>
    <SecondaryNavProgramPrintable />
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {printables.map(({header, items}) => (
          <>
            <Grid key={header} item xs={12}>
              <CardHeader
                title={
                  <>
                    <Box display="flex" alignItems="center">
                      <Typography variant="h5">{header}</Typography>
                    </Box>
                  </>
                }
              />
              <Divider />
            </Grid>
            <Grid container spacing={3}>
              {items.map(({title, secondary, mediumBreak}, i) => (
                <>
                  <Grid key={i} item xs={12} md={mediumBreak}>
                    <ListItem>
                      <ListItemText primary={title} secondary={secondary} />
                    </ListItem>
                    <Divider />
                  </Grid>
                </>
              ))}
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  </>
);

export default ProgramPrintable;
