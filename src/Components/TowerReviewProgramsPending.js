import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link, withRouter} from 'react-router-dom';
import 'typeface-roboto';
import {
  Typography,
  Box,
  Checkbox,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Tooltip,
  FormControlLabel,
  withStyles,
} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import {componentsInfoTowerReview} from './TowerReviewPrograms';
import TowerReviewInfoPop from './TowerReviewInfoPop';

const ExpansionPanel = withStyles({
  root: {
    border: '0px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  listItemTertiary: {
    marginTop: '0',
    flexGrow: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
  listItemTextNoMargin: {
    margin: '0',
    flexGrow: '0',
  },
  linkNoDecorationAndCorrection: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  expandedSummary: {
    margin: 0,
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
    action: <Checkbox />,
  },
  {
    title: '2020 Asgrow 2 You - 2018 - 2020',
    id: 'SD2U80',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 2,189,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 3',
    action: <TowerReviewInfoPop />,
  },
  {
    title: '2020 Bayer Plus Portfolio Rewards v2',
    id: 'CHRRPL',
    version: 'Version 2.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 115,752,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 1',
    action: <Checkbox />,
  },
  {
    title: '2020 Branded Seed DDR',
    id: 'SDTDDR',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 12,340,000 USD',
    type: 'Type: Activity Incentive',
    components: 'Components: 2',
    action: <Checkbox />,
  },
  {
    title: '2020 Branded Seed LCR',
    id: 'SDBRSD',
    version: 'Version 1.2',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 292,659,000 AUD',
    type: 'Type: Volume Incentive',
    components: 'Components: 5',
    action: <Checkbox />,
  },
  {
    title: '2020 Coastal Seed and Trait Crop Switch Replant',
    id: 'SDCLMSCN2',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 2,505,000 EUR',
    type: 'Type: Guarantee/Claim',
    components: 'Components: 6',
    action: <Checkbox />,
  },
  {
    title: '2020 DEKALB and Asgrow Production Grower Program',
    id: 'SDPROD',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 1,058,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 1',
    action: <Checkbox />,
  },
];

const TowerReviewProgramsPending = () => {
  const classes = useStyles();

  return (
    <>
      <Box pt={1} pb={1}>
        {Programs.map(
          ({title, id, version, year, budget, type, components, action}, i) => (
            <Fragment key={i}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                flexGrow="1"
                style={{height: '100%'}}
              >
                <ExpansionPanel elevation={0} square style={{width: '100%'}}>
                  <ExpansionPanelSummary
                    classes={{content: classes.expandedSummary}}
                    style={{padding: '0 16px 0 0', margin: 0}}
                    expandIcon={<ExpandMore />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                  >
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={
                        <Box pl={3} mr={-2}>
                          {action}
                        </Box>
                      }
                    />
                    <Box style={{width: '100%'}}>
                      <ListItem
                        style={{height: '100%', padding: 16}}
                        className={classes.linkNoDecorationAndCorrection}
                        button
                        component={Link}
                        to={'/program/' + i}
                        rel="noopener noreferrer"
                      >
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="flex-start"
                          style={{height: '100%'}}
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
                              <>
                                <Typography variant="body2">
                                  {[budget, components, type].join(' • ')}
                                </Typography>
                              </>
                            }
                          />
                        </Box>
                      </ListItem>
                    </Box>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                      {componentsInfoTowerReview.map(({comp, ted}, i) => (
                        <>
                          <Grid key={i} item xs={12} md={3}>
                            <ListItemText
                              className={classes.listItemTextNoMargin}
                              primary={
                                <Tooltip
                                  title={
                                    <Typography variant="overline">
                                      {comp}
                                    </Typography>
                                  }
                                >
                                  <Typography
                                    noWrap
                                    variant="subtitle2"
                                    style={{fontWeight: 'bold'}}
                                  >
                                    {comp}
                                  </Typography>
                                </Tooltip>
                              }
                              secondary={
                                <Typography
                                  style={{
                                    marginTop: '0',
                                    fontWeight: '400',
                                    color: 'rgba(0, 0, 0, 0.54)',
                                    fontSize: '0.875rem',
                                  }}
                                >
                                  {ted}
                                </Typography>
                              }
                            />
                            <Box pt={1}>
                              <Divider />
                            </Box>
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Box>
              <Divider />
            </Fragment>
          )
        )}
      </Box>
    </>
  );
};

export default withRouter(TowerReviewProgramsPending);