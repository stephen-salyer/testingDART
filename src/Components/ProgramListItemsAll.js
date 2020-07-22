import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {Link, withRouter} from 'react-router-dom';
import 'typeface-roboto';
import {Typography} from '@material-ui/core';
import ProgramMenu from './ProgramMenu';

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
    ted: 'TED: 5,323,000 USD',
    type: 'Type: Loyalty Incentive',
    payee: 'Payee: Dealer/Retailer',
    communicationDate: 'Communication Date: 06/01/2020',
    category: 'program',
  },
  {
    title: '2020 Asgrow 2 You - 2018 - 2020',
    id: 'SD2U80',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 2,189,000 USD',
    type: 'Type: Volume Incentive',
    payee: 'Payee: Dealer/Retailer',
    communicationDate: 'Communication Date: 06/01/2020',
    category: 'program',
  },
  {
    title: '2020 Asgrow 2 You - 2019 - 2021',
    id: 'SD2U91',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 5,323,000 USD',
    type: 'Type: Volume Incentive',
    payee: 'Payee: Dealer/Retailer',
    communicationDate: 'Communication Date: 06/01/2020',
    category: 'program',
  },
  {
    title: '2020 Asgrow-DEKALB-DeltaPine Subs and Cuts Program USA',
    id: 'SDADSC',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 4,286,000 USD',
    type: 'Type: Volume Incentive',
    payee: 'Payee: Dealer/Retailer',
    communicationDate: 'Communication Date: 08/01/2020',
    category: 'program',
  },
  {
    title: '2020 Bayer Plus Portfolio Rewards',
    id: 'CHRRPL',
    version: 'Version 2.0',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 115,752,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    payee: 'Payee: Farmer/Grower',
    communicationDate: 'Communication Date: 06/01/2020',
    category: 'program',
  },
  {
    title: '2020 Bayer Plus Portfolio Rewards v2',
    id: 'CHRRPL',
    version: 'Version 2.0',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 115,752,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    payee: 'Payee: Farmer/Grower',
    communicationDate: 'Communication Date: 06/01/2020',
    category: 'program',
  },
  {
    title: '2020 Branded Seed DDR',
    id: 'SDTDDR',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 12,340,000 USD',
    type: 'Type: Activity Incentive',
    payee: 'Payee: Dealer/Retailer',
    communicationDate: 'Communication Date: 06/01/2020',
    category: 'program',
  },
  {
    title: '2020 Branded Seed LCR',
    id: 'SDBRSD',
    version: 'Version 1.2',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 292,659,000 AUD',
    type: 'Type: Volume Incentive',
    payee: 'Payee: Dealer/Retail, Farmer/Grower',
    communicationDate: 'Communication Date: 05/01/2020',
    category: 'program',
  },
  {
    title: '2020 Coastal Seed and Trait Crop Switch Replant',
    id: 'SDCLMSCN2',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 2,505,000 EUR',
    type: 'Type: Guarantee/Claim',
    payee: 'Payee: Dealer/Retail',
    communicationDate: 'Communication Date: 09/01/2020',
    category: 'program',
  },
  {
    title: '2020 DEKALB and Asgrow Production Grower Program',
    id: 'SDPROD',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    ted: 'TED: 1,058,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    payee: 'Payee: Dealer/Retail',
    communicationDate: 'Communication Date: 06/01/2020',
    category: 'program',
  },
];

const ProgramListItemsAll = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        {Programs.map(
          (
            {title, id, version, year, ted, type, payee, communicationDate},
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
                    <Typography variant="subtitle1" style={{fontWeight: 500}}>
                      {[id, title].join(' • ')}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2">
                      {[ted, version, year].join(' • ')}
                    </Typography>
                  }
                />
                <ListItemText
                  classes={{primary: classes.listItemTertiary}}
                  primary={
                    <Typography variant="body2" color="textSecondary">
                      {[type, payee, communicationDate].join(' • ')}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <ProgramMenu />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Fragment>
          )
        )}
      </List>
    </>
  );
};

export default withRouter(ProgramListItemsAll);
