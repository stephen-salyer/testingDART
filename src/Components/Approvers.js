import React from 'react';
import Grid from '@material-ui/core/Grid';
import {FormControlLabel, Switch, Box, Container} from '@material-ui/core';
import ApproverAutoComplete from './ApproverAutoComplete';

export default function Approvers() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeSwitch = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="flex-end"
              pl={3}
              pr={3}
              pt={1}
              pb={1}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChangeSwitch}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Route Emails By Wave"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ApproverAutoComplete />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
