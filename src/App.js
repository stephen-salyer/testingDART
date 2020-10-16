import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import Program from './Components/Program';
import ProgramListBody from './Components/ProgramListBody';
import NavBar from './Components/NavBar';
import MemberList from './Components/MemberList';
import ApprovalStatus from './Components/ApprovalStatus';
import TowerReview from './Components/TowerReview';
import ProgramPrintable from './Components/ProgramPrintable';
import ProgramChanges from './Components/ProgramChanges';
import TowerReviewPricePlan from './Components/TowerReviewPricePlan';
import UnitSelect from './Components/Examples/UnitSelect';
import BugHunter from './Components/BugHunter';
import GeographyEligibilityV2 from './Components/Examples/GeographyEligibilityV2';

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
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/program-list">
          <ProgramListBody />
        </Route>
        {/* Below is temporary */}
        <Route path="/geography-eligibility-v2">
          <GeographyEligibilityV2 />
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
        <Route path="/approval-status">
          <ApprovalStatus />
        </Route>
        <Route path="/tower-review">
          <TowerReview />
        </Route>
        <Route path="/program-printable">
          <ProgramPrintable />
        </Route>
        <Route path="/program-Changes">
          <ProgramChanges />
        </Route>
        <Route path="/price-plan">
          <TowerReviewPricePlan />
        </Route>
        <Route path="/unit-select-example">
          <UnitSelect />
        </Route>
        <Route path="/bug-hunter">
          <BugHunter />
        </Route>
      </Switch>
    </HashRouter>
  </ThemeProvider>
);

export default App;
