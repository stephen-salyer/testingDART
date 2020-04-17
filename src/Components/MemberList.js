import React from 'react';
import {
  withStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  TextField,
  Card,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteScopeModal from './DeleteScopeModal';
import SearchBar from './SearchBar';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  chipMargin: {
    marginRight: '8px',
  },
  linkNoDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
  containerPadding: {
    paddingTop: '32px',
  },
  relatedContentPadding: {
    padding: '0 0 0 8px',
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
}));

const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 64,
    '&$expanded': {
      minHeight: 72,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiExpansionPanelDetails);

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const Members = [
  {title: 'Justice Madden'},
  {title: 'Alberto Shepard'},
  {title: 'Anahi Mayo'},
  {title: 'Mohamed Ferrell'},
  {title: 'Jaylin Mcneil'},
  {title: 'Caden Sosa'},
  {title: 'Monica Carroll'},
  {title: 'Leia Roach'},
  {title: 'Kayden Jordan'},
  {title: 'Billy Lester'},
  {title: 'Kinsley Christian'},
];

const scopeData = [
  {
    id: 1,
    region: 'North America',
    country: 'United States of America',
    businessCategory: 'Crop Protection',
    product: 'Glyphosate',
    brand: 'All',
  },
  {
    id: 2,
    region: 'North America',
    country: 'United States of America',
    businessCategory: 'Crop Protection',
    product: 'Glyphosate',
    brand: 'Roundup',
  },
  {
    id: 3,
    region: 'North America',
    country: 'United States of America',
    businessCategory: 'Crop Protection',
    product: 'Glyphosate',
    brand: 'Degree Xtra',
  },
  {
    id: 4,
    region: 'North America',
    country: 'United States of America',
    businessCategory: 'Crop Protection',
    product: 'Dicamba',
    brand: 'Roundup Xtra',
  },
];

const makeMenuItems = (items) =>
  items.map((item) => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

const inputs = [
  {
    key: 'region',
    label: 'Region',
    options: [
      'Asia / Pacific',
      'Europe / Middle East',
      'North America',
      'South America',
    ],
    size: 6,
  },
  {
    key: 'country',
    label: 'Country',
    options: ['Canada', 'Brazil', 'United States of America'],
    size: 6,
  },
  {
    key: 'businessCategory',
    label: 'Business Category',
    options: ['All', 'Crop Protection', 'Pasture'],
    size: 4,
  },
  {
    key: 'product',
    label: 'Product',
    options: ['All', 'Dicamba', 'Glyphosate', 'Other'],
    size: 4,
  },
  {
    key: 'brand',
    label: 'Brand',
    options: scopeData.map((r) => r.brand),
    size: 4,
  },
];

const scopeLabel = (scope) => inputs.map(({key}) => scope[key]).join(' • ');

const MemberList = () => {
  const [scopes, setScopes] = React.useState(scopeData);
  const [expanded, setExpanded] = React.useState('');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.containerPadding}>
        <Grid container spacing={3} direction="row">
          <Grid item={true} sm={12} md={6}>
            <Typography variant="h3" color="primary">
              Member List
            </Typography>
          </Grid>
          <Grid item={true} sm={12} md={2}>
            <Box display="flex" justifyContent="flex-end" flexWrap="wrap">
              <Autocomplete
                id="combo-box-demo"
                options={Members}
                getOptionLabel={(option) => option.title}
                style={{width: '100%'}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Members"
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item={true} sm={12} md={4}>
            <Box display="flex">
              <Button
                color="primary"
                className={classes.button}
                endIcon={<GetAppIcon />}
              >
                Export Scope
              </Button>
              <Button
                color="primary"
                className={classes.button}
                endIcon={<GetAppIcon />}
              >
                Export To Excel
              </Button>
            </Box>
          </Grid>
          <Grid container spacing={3} style={{margin: '24px 0 0 0'}}>
            <Grid item={true} sm={12} md={12}>
              <Box display="flex" alignItems="baseline">
                <Typography variant="h5">Raul Abrego</Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.relatedContentPadding}
                >
                  (RRABRE)
                </Typography>
              </Box>
              <Grid item={true} sm={12} md={12}>
                C&C Specialist
              </Grid>
              <Grid item={true} sm={12} md={12}>
                Security Groups: D-A-R-T Edit, Dart Edit NA
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{margin: '24px 0 0 0'}}>
            <Grid item={true} sm={12} md={4}>
              <Card>
                <CardHeader
                  titleTypographyProps={{variant: 'h6'}}
                  title="User Details"
                ></CardHeader>
                <Divider />
                <Box p={2}>
                  <TextField
                    id="outlined-basic"
                    label="DOA"
                    defaultValue="222,222,255"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Box>
              </Card>
            </Grid>
            <Grid item={true} sm={12} md={8}>
              <Card>
                <Box display="flex" justifyContent="space-between">
                  <CardHeader title="Programs"></CardHeader>
                  <SearchBar />
                </Box>
                <Divider />
                {scopes.map((scope) => (
                  <ExpansionPanel
                    key={scope.id}
                    square
                    expanded={expanded === 'panel' + scope.id}
                    onChange={handleChange('panel' + scope.id)}
                  >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{scopeLabel(scope)}</Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                      <div className={classes.root}>
                        <Grid container spacing={3}>
                          {inputs.map(({label, options, size, key}, i) => (
                            <Grid key={i} item sm={12} md={size}>
                              <FormControl
                                variant="outlined"
                                className={classes.formControl}
                              >
                                <InputLabel>{label}</InputLabel>
                                <Select defaultValue={scope[key]} label={label}>
                                  {makeMenuItems(options)}
                                </Select>
                              </FormControl>
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                    </ExpansionPanelDetails>

                    <Box
                      p={'0 24px 8px 24px'}
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <DeleteScopeModal
                        onDelete={() =>
                          setScopes(scopes.filter((el) => el !== scope))
                        }
                      />
                    </Box>
                    <Divider />
                  </ExpansionPanel>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default MemberList;
