import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link, withRouter} from 'react-router-dom';
import 'typeface-roboto';
import {
  Typography,
  Box,
  ListItemIcon,
  CircularProgress,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import {CheckCircle} from '@material-ui/icons';
import {green, red} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0164C4',
    },
    secondary: {
      main: '#142357',
    },
    canceled: {
      main: red[500],
    },
  },
});

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
    approvalStatus: 'Pending',
    icon: (
      <>
        <Box p={0.1}>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" value={66} size={50} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                66%
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
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
    icon: (
      <>
        <CheckCircle style={{fontSize: 50}} htmlColor={green[500]} />
      </>
    ),
  },
  {
    title: '2020 Asgrow 2 You - 2019 - 2021',
    id: 'SD2U91',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 5,323,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 4',
    approvalStatus: 'Draft',
    icon: (
      <>
        <Box p={0.1}>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" value={33} size={50} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                33%
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
  },
  {
    title: '2020 Asgrow-DEKALB-DeltaPine Subs and Cuts Program USA',
    id: 'SDADSC',
    version: 'Version 1.1',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 4,286,000 USD',
    type: 'Type: Volume Incentive',
    components: 'Components: 1',
    approvalStatus: 'Pending',
    icon: (
      <>
        <Box p={0.1}>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" value={66} size={50} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                66%
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
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
    icon: <CheckCircle style={{fontSize: 50}} htmlColor={green[500]} />,
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
    icon: <CheckCircle style={{fontSize: 50}} htmlColor={green[500]} />,
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
    icon: <CheckCircle style={{fontSize: 50}} htmlColor={green[500]} />,
  },
  {
    title: '2020 Branded Seed LCR',
    id: 'SDBRSD',
    version: 'Version 1.2',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 292,659,000 AUD',
    type: 'Type: Volume Incentive',
    components: 'Components: 5',
    approvalStatus: 'Pending',
    icon: (
      <>
        <Box p={0.1}>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" value={66} size={50} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                66%
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
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
    icon: <CheckCircle style={{fontSize: 50}} htmlColor={green[500]} />,
  },
  {
    title: '2020 DEKALB and Asgrow Production Grower Program',
    id: 'SDPROD',
    version: 'Version 1.0',
    year: '09/01/2019 - 08/31/2020',
    budget: 'Budget: 1,058,000 USD',
    type: 'Type: Purchase Behavior Incentive',
    components: 'Components: 1',
    approvalStatus: 'Pending',
    icon: (
      <>
        <Box p={0.1}>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" value={66} size={50} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                66%
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
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
                icon,
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
                  <Box
                    style={{width: 80}}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ListItemIcon>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <ThemeProvider theme={theme}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            {icon}
                            <Typography variant="caption">
                              {approvalStatus}
                            </Typography>
                          </Box>
                        </ThemeProvider>
                      </Box>
                    </ListItemIcon>
                  </Box>
                  <Box display="flex" flexDirection="column" pl={1}>
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
                          {[budget, components, type].join(' • ')}
                        </Typography>
                      }
                    />
                  </Box>
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
