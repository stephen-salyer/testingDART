import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Switch,
  Divider,
  Typography,
  Box,
  IconButton,
  Button,
} from '@material-ui/core';
import {green} from '@material-ui/core/colors';
import {Add} from '@material-ui/icons';

const people = [
  {
    name: 'Amy M.',
  },
  {
    name: 'Andrew M.',
  },
  {
    name: 'Corey B.',
  },
  {
    name: 'Deepthi P.',
  },
  {
    name: 'Evan K.',
  },
  {
    name: 'Jason T.',
  },
  {
    name: 'Richard J.',
  },
  {
    name: 'Srikanth B.',
  },
  {
    name: 'Stephen S.',
  },
];

const BugHunter = () => (
  <Container maxWidth="lg" style={{paddingBottom: '24px'}}>
    <Grid container style={{paddingTop: 124, paddingBottom: 24}}>
      <Grid item={true} xs={12} md={10}>
        <Typography variant="h3" color="primary">
          Bug Hunter Chicken Stats
        </Typography>
      </Grid>
      <Grid item={true} xs={12} md={2}>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            Edit People
          </Button>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      {people.map(({name}) => (
        <>
          <Grid key={name} item xs={12} md={3}>
            <Card>
              <CardHeader
                action={
                  <FormControlLabel
                    control={<Switch checked style={{color: green[400]}} />}
                  />
                }
                title={<Typography variant="h6">{name}s Bucket</Typography>}
              />
              <Divider />
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={-1}
                >
                  <Typography>Balance:</Typography>
                  <Box display="flex" alignItems="center">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Typography>3</Typography>
                      <Typography>Chicken</Typography>
                    </Box>

                    <IconButton>
                      <Add />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </>
      ))}
    </Grid>
  </Container>
);

export default BugHunter;
