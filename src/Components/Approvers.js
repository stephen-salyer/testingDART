import React from 'react';
import Grid from '@material-ui/core/Grid';
import {FormControlLabel, Switch, Box, Container} from '@material-ui/core';
import ApproverAutoComplete from './ApproverAutoComplete';
import ApproverAutoCompleteWave from './ApproverAutoCompleteWave';

export default function Approvers() {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChangeSwitch = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" p={1}>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checked}
                    onChange={handleChangeSwitch}
                    name="checked"
                    color="primary"
                  />
                }
                label="Route Emails By Wave"
              />
            </Box>
          </Grid>
          {state.checked === false ? (
            <Grid item xs={12}>
              <ApproverAutoComplete />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <ApproverAutoCompleteWave />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
