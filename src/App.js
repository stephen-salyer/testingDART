import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Program from './Components/Program';
import ProgramListBody from './Components/ProgramListBody';
import NavBar from './Components/NavBar';
import Start from './Components/Start';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#142357',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/program-list">
            <ProgramListBody />
          </Route>
          <Route path="/program/:id">
            <Program />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
