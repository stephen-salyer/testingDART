import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Program from './Components/Program';
import ProgramListBody from './Components/ProgramListBody';
import NavBar from './Components/NavBar';
import MemberList from './Components/MemberList';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#142357',
    },
    secondary: {
      main: '#0164C4',
    },
    danger: {
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
          <Route path="/member-list">
            <MemberList />
          </Route>
          <Route exact path="/">
            <Redirect to="/program-list" />
          </Route>
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
