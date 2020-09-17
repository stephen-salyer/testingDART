import {
  Box,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import {Done} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Geographies = [
  {
    id: '1',
    country: 'US',
    numStates: '52',
    children: [
      {
        id: '1',
        state: 'Alabama',
        numCounties: '52',
        children: [
          {id: '1', county: 'Brank'},
          {id: '2', county: 'Giranda'},
          {id: '3', county: 'Hindama'},
        ],
      },
      {
        id: '2',
        state: 'Arkansas',
        numCounties: '52',
        children: [
          {id: '1', county: 'Riyo'},
          {id: '2', county: 'Bama'},
          {id: '3', county: 'Left'},
        ],
      },
      {
        id: '3',
        state: 'California',
        numCounties: '52',
        children: [
          {id: '1', county: 'Riyo'},
          {id: '2', county: 'Bama'},
          {id: '3', county: 'Left'},
        ],
      },
    ],
  },
  {
    id: '1',
    country: 'Canada',
    numStates: '10',
    children: [
      {
        id: '1',
        state: 'Alberta',
        numCounties: '52',
        children: [
          {id: '1', county: 'Beaver County'},
          {id: '2', county: 'Big Lakes County'},
          {id: '3', county: 'Birch Hills County'},
        ],
      },
      {
        id: '2',
        state: 'British Columbia',
        numCounties: '52',
        children: [
          {id: '1', county: 'Cariboo'},
          {id: '2', county: 'Kootenay'},
          {id: '3', county: 'Nanaimo'},
        ],
      },
      {
        id: '3',
        state: 'Manitoba',
        numCounties: '52',
        children: [
          {id: '1', county: 'Central Plains'},
          {id: '2', county: 'Eastman'},
          {id: '3', county: 'Interlake'},
        ],
      },
    ],
  },
  {
    id: '3',
    country: 'United Kingdom',
    numStates: '52',
    children: [
      {id: '1', state: 'Alabama', numCounties: '52'},
      {id: '2', state: 'Arkansas', numCounties: '52'},
      {id: '3', state: 'California', numCounties: '52'},
    ],
  },
];

export default function GeographyEligibilityV2() {
  const classes = useStyles();

  // country

  const [chipSelectSomeCountry, setChipSelectSomeCountry] = React.useState(
    false
  );

  const handleClickAllCountry = () => {
    console.log('handleClickAllCountry');
    setChipSelectSomeCountry(false);
  };

  const handleClickSomeCountry = () => {
    console.log('handleClickSomeCountry');
    setChipSelectSomeCountry(true);
  };

  // state

  const [chipSelectAllState, setChipSelectAllState] = React.useState(false);
  const [chipSelectSomeState, setChipSelectSomeState] = React.useState(false);
  const selectedChipState = chipSelectSomeState === true;

  const handleClickAllState = () => {
    setChipSelectAllState(true);
  };

  const handleClickSomeState = () => {
    setChipSelectSomeState(true);
  };

  return (
    <Container maxWidth="lg" style={{paddingTop: 120}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Geography Eligibility</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Countries"
            placeholder="Search"
            variant="outlined"
          />
          <List>
            {Geographies.map(({country, numStates, id}) => (
              <ListItem button key={country} id={id}>
                <ListItemText
                  primary={country}
                  secondary={<>4 of {numStates} Selected</>}
                />
                <ListItemSecondaryAction>
                  <Box display="flex" className={classes.root}>
                    <Chip
                      onClick={handleClickAllCountry}
                      onDelete={handleClickAllCountry}
                      label="All"
                      deleteIcon={
                        chipSelectSomeCountry === true ? <Done /> : <></>
                      }
                      style={{minWidth: 57.4}}
                    />
                    <Chip
                      onClick={handleClickSomeCountry}
                      onDelete={handleClickSomeCountry}
                      deleteIcon={
                        chipSelectSomeCountry === true ? <Done /> : <></>
                      }
                      label="Some"
                    />
                  </Box>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
        {chipSelectSomeCountry && (
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="States / Provinces"
              placeholder="Search"
              variant="outlined"
            />
            <List style={{maxHeight: 400, overflow: 'scroll'}}>
              {Geographies.map(({children}) => (
                <>
                  {children.map(({state, numCounties, id}) => (
                    <ListItem button key={state} id={id}>
                      <ListItemText
                        primary={state}
                        secondary={<>4 of {numCounties} Selected</>}
                      />
                      <ListItemSecondaryAction>
                        <Box display="flex" className={classes.root}>
                          <Chip
                            value={chipSelectAllState}
                            onClick={handleClickAllState}
                            label="All"
                            deleteIcon={
                              chipSelectAllState === true ? <Done /> : <></>
                            }
                            style={{minWidth: 57.4}}
                          />
                          <Chip
                            value={chipSelectSomeState}
                            deleteIcon={
                              chipSelectSomeState === true ? <Done /> : <></>
                            }
                            onClick={handleClickSomeState}
                            label="Some"
                          />
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </>
              ))}
            </List>
          </Grid>
        )}
        {selectedChipState && (
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="States / Provinces"
              placeholder="Search"
              variant="outlined"
            />
            <List>
              {Geographies.map(({state, counties, id}) => (
                <ListItem button key={state} id={id}>
                  <ListItemText
                    primary={state}
                    secondary={<>4 of {counties} Selected</>}
                  />
                  <ListItemSecondaryAction>
                    <Box display="flex" className={classes.root}>
                      <Chip
                        value={chipSelectAllState}
                        onClick={handleClickAllState}
                        label="All"
                        deleteIcon={
                          chipSelectAllState === true ? <Done /> : <></>
                        }
                        style={{minWidth: 57.4}}
                      />
                      <Chip
                        value={chipSelectSomeState}
                        deleteIcon={
                          chipSelectSomeState === true ? <Done /> : <></>
                        }
                        onClick={handleClickSomeState}
                        label="Some"
                      />
                    </Box>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
