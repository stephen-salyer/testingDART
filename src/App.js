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
import ApprovalStatus from './Components/ApprovalStatus';
import ProductEligibilityExample from './Components/Examples/ProductEligibility/ProductEligibilityExample';
import TowerReview from './Components/TowerReview';
import ProgramPrintable from './Components/ProgramPrintable';
import ProgramChanges from './Components/ProgramChanges';
import TowerReviewPricePlan from './Components/TowerReviewPricePlan';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0164C4',
    },
    secondary: {
      main: '#142357',
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
          {/* Below is temporary */}
          <Route path="/product-eligibility-example">
            <ProductEligibilityExample />
          </Route>
          {/* Above is temporary */}
          <Route path="/program/:id">
            <Program />
          </Route>
          <Route path="/member-list">
            <MemberList />
          </Route>
          <Route exact path="/">
            <Redirect to="/program-list" />
          </Route>
          <Route exact path="/approval-status">
            <ApprovalStatus />
          </Route>
          <Route exact path="/tower-review">
            <TowerReview />
          </Route>
          <Route exact path="/program-printable">
            <ProgramPrintable />
          </Route>
          <Route exact path="/program-Changes">
            <ProgramChanges />
          </Route>
          <Route exact path="/price-plan">
            <TowerReviewPricePlan />
          </Route>
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
