import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link, withRouter} from 'react-router-dom';
import 'typeface-roboto';
import {Typography, Box} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  listItemTertiary: {
    marginTop: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
  listItemTextNoMargin: {
    marginBottom: '0',
  },
  linkNoDecorationAndCorrection: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export const Programs = [
  {
    title: 'Acceleron Loyalty',
    id: 'SDACCL',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 5,323,000 USD',
    type: 'Type: Loyalty Incentive',
    components: 'Components: 2',
    approvalStatus: 'Pending Approval',
  },
  {
    title: '2020 Asgrow 2 You - 2018 - 2020',
    id: 'SD2U80',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 2,189,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 3',
    approvalStatus: 'Approved',
  },
  {
    title: '2020 Asgrow 2 You - 2019 - 2021',
    id: 'SD2U91',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 5,323,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 4',
    approvalStatus: 'Pending Approval',
  },
  {
    title: '2020 Asgrow-DEKALB-DeltaPine Subs and Cuts Program USA',
    id: 'SDADSC',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 4,286,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 1',
    approvalStatus: 'Pending Approval',
  },
  {
    title: '2020 Bayer Plus Portfolio Rewards',
    id: 'CHRRPL',
    version: 'Version 2.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 115,752,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 5',
    approvalStatus: 'Approved',
  },
  {
    title: '2020 Bayer Plus Portfolio Rewards v2',
    id: 'CHRRPL',
    version: 'Version 2.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 115,752,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 1',
    approvalStatus: 'Approved',
  },
  {
    title: '2020 Branded Seed DDR',
    id: 'SDTDDR',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 12,340,000 USD',
    type: 'Type: Activity Incentive',
    components: 'Components: 2',
    approvalStatus: 'Approved',
  },
  {
    title: '2020 Branded Seed LCR',
    id: 'SDBRSD',
    version: 'Version 1.2',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 292,659,000 AUD',
    type: 'Type: Volume Incentive',
    components: 'Components: 5',
    approvalStatus: 'Pending Approval',
  },
  {
    title: '2020 Coastal Seed and Trait Crop Switch Replant',
    id: 'SDCLMSCN2',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 2,505,000 EUR',
    type: 'Type: Guarantee/Claim',
    components: 'Components: 6',
    approvalStatus: 'Approved',
  },
  {
    title: '2020 DEKALB and Asgrow Production Grower Program',
    id: 'SDPROD',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 1,058,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 1',
    approvalStatus: 'Pending Approval',
  },
];

const ProgramListItemsAll = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Box pt={1} pb={1}>
          {Programs.map(
            (
              {
                title,
                id,
                version,
                year,
                budget,
                type,
                components,
                approvalStatus,
              },
              i
            ) => (
              <Fragment key={i}>
                <ListItem
                  className={classes.linkNoDecorationAndCorrection}
                  button
                  component={Link}
                  to={'/program/' + i}
                  rel="noopener noreferrer"
                >
                  <ListItemText
                    className={classes.listItemTextNoMargin}
                    primary={
                      <Typography
                        variant="subtitle1"
                        style={{fontWeight: 'bold'}}
                      >
                        {title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2">
                        {[id, version, year].join(' • ')}
                      </Typography>
                    }
                  />
                  <ListItemText
                    classes={{primary: classes.listItemTertiary}}
                    primary={
                      <Typography variant="body2">
                        {[budget, components, type, approvalStatus].join(' • ')}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider />
              </Fragment>
            )
          )}
        </Box>
      </List>
    </>
  );
};

export default withRouter(ProgramListItemsAll);
