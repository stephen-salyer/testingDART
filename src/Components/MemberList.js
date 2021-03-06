import React, {Fragment} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
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
  Toolbar,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  FormGroup,
  Switch,
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import PublishIcon from '@material-ui/icons/Publish';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import DeleteScopeModal from './DeleteScopeModal';
import SearchBar from './SearchBar';

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
    padding: '112px 16px 32px 16px',
  },
  relatedContentPadding: {
    padding: '0 0 0 8px',
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
  toolBarEnd: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItemCorrection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

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

export const Members = [
  {title: 'Justice Madden', category: 'approvers'},
  {title: 'Alberto Shepard', category: 'approvers'},
  {title: 'Anahi Mayo', category: 'approvers'},
  {title: 'Mohamed Ferrell', category: 'approvers'},
  {title: 'Jaylin Mcneil', category: 'approvers'},
  {title: 'Caden Sosa', category: 'approvers'},
  {title: 'Monica Carroll', category: 'approvers'},
  {title: 'Leia Roach', category: 'Owners'},
  {title: 'Kayden Jordan', category: 'Owners'},
  {title: 'Billy Lester', category: 'Owners'},
  {title: 'Kinsley Christian', category: 'approvers'},
  {title: 'Kinsley Christian', category: 'Owners'},
];

const Department = [
  {title: 'Audit'},
  {title: 'Business'},
  {title: 'Credit'},
  {title: 'Finance'},
  {title: 'Global Accounting'},
  {title: 'IT'},
  {title: 'Legal'},
  {title: 'Licensee'},
  {title: 'Marketing'},
  {title: 'MF Analytics'},
  {title: 'Operations'},
  {title: 'Product Manager'},
  {title: 'Sales'},
];

const scopeData = [
  {
    id: 1,
    region: 'Europe / Middle East / Africa',
    country: 'All Countries',
    businessCategory: 'All Business Categories',
    product: 'All Products',
    brand: 'All Brands',
  },
  {
    id: 2,
    region: 'Europe / Middle East / Africa',
    country: 'Austria',
    businessCategory: 'All Business Categories',
    product: 'All Products',
    brand: 'All Brands',
  },
  {
    id: 3,
    region: 'Europe / Middle East / Africa',
    country: 'Belarus',
    businessCategory: 'All Business Categories',
    product: 'All Products',
    brand: 'All Brands',
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
      'Austria',
      'Europe / Middle East / Africa',
      'North America',
      'South America',
    ],
    size: 6,
  },
  {
    key: 'country',
    label: 'Country',
    options: [
      'All Countries',
      'Austria',
      'Belarus',
      'Canada',
      'Brazil',
      'US',
    ],
    size: 6,
  },
  {
    key: 'businessCategory',
    label: 'Business Category',
    options: ['All Business Categories', 'Crop Protection', 'Pasture'],
    size: 4,
  },
  {
    key: 'product',
    label: 'Product',
    options: ['All Products', 'Dicamba', 'Glyphosate', 'Other'],
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

  const [state, setState] = React.useState({
    opt: true,
  });

  const handleChangeToggle = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <Container maxWidth="lg" className={classes.containerPadding}>
      <Grid container spacing={1} direction="row">
        <Toolbar
          disableGutters={true}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h3" color="primary" edge="start">
            Member List
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <Box width="300px">
              <Autocomplete
                options={Members}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Members"
                    variant="outlined"
                  />
                )}
              />
            </Box>
            <Button
              color="primary"
              className={classes.button}
              endIcon={<GetAppIcon />}
              edge="end"
            >
              Export Scope
            </Button>
            <Button
              color="primary"
              className={classes.button}
              endIcon={<GetAppIcon />}
              edge="end"
            >
              Export To Excel
            </Button>
          </Box>
        </Toolbar>
      </Grid>
      <Grid container style={{margin: '24px 0 0 0'}}>
        <Grid item={true} xs={12} md={12}>
          <Box display="flex" alignItems="baseline">
            <Typography variant="h5">Raul Abrego</Typography>
            <Typography
              variant="subtitle1"
              className={classes.relatedContentPadding}
            >
              (RRABRE)
            </Typography>
          </Box>
          <Grid item={true} xs={12} md={12}>
            C&C Specialist
          </Grid>
          <Grid item={true} xs={12} md={12}>
            Security Groups: D-A-R-T Edit, Dart Edit NA
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{marginTop: '24px'}}>
        <Grid container item xs={12} md={4}>
          <Grid item={true} xs={12} md={12}>
            <Card>
              <CardHeader
                titleTypographyProps={{variant: 'h6'}}
                title="User Details"
              ></CardHeader>
              <Divider />
              <Box styles={{overflow: 'scroll', height: '30vh'}}>
                <Box pt={2} pr={2} pl={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.opt}
                          onChange={handleChangeToggle}
                          name="opt"
                        />
                      }
                      label="Receives Notifications"
                    />
                  </FormGroup>
                </Box>
                <Box pt={2} pr={2} pl={2}>
                  <TextField
                    label="DOA"
                    defaultValue="222,222,255"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Box>
                <Box pt={2} pr={2} pl={2}>
                  <TextField
                    label="DOA Length in Years"
                    defaultValue="1"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Box>
                <Box pt={2} pr={2} pl={2}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControlRadio}
                  >
                    <FormLabel component="legend">
                      Program Classification Access
                    </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz">
                      <FormControlLabel
                        value="best"
                        control={<Radio />}
                        label="All Agreements"
                      />
                      <FormControlLabel
                        value="worst"
                        control={<Radio />}
                        label="Non-Strategic Agreement"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box p={2}>
                  <Autocomplete
                    freeSolo
                    options={Department}
                    getOptionLabel={(option) => option.title}
                    style={{width: '100%'}}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Department"
                        variant="outlined"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item={true} xs={12} md={12} style={{paddingTop: '24px'}}>
            <Card>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                pr={1}
              >
                <CardHeader
                  titleTypographyProps={{variant: 'h6'}}
                  title="Attachments"
                ></CardHeader>
                <IconButton color="primary" style={{height: '48px'}}>
                  <PublishIcon />
                </IconButton>
              </Box>
              <Divider />
              <Box
                style={{
                  maxHeight: '300px',
                  overflow: 'scroll',
                }}
              >
                <List disablePadding={true}>
                  {[1, 2, 3].map((n) => (
                    <Fragment key={n}>
                      <ListItem className={classes.listItemCorrection}>
                        <ListItemText
                          className={classes.listItemTextNoMargin}
                          primary={
                            <Typography variant="overline">
                              Bill Attacher • 01/01/22
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body1">
                              This-File-Name-Could-Be-Very-Long-Possibly-Even-60-Characters.doc
                            </Typography>
                          }
                        />
                        <ListItemText
                          classes={{primary: classes.listItemTertiary}}
                          primary={
                            <Typography variant="caption">
                              I uploaded this file so that it can be seen by
                              others
                            </Typography>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="morevert">
                            <RemoveIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  ))}
                </List>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid container item={true} xs={12} md={8}>
          <Grid item={true} md={12}>
            <Card style={{height: '802px'}}>
              <Toolbar className={classes.toolBarEnd} disableGutters={true}>
                <CardHeader
                  titleTypographyProps={{variant: 'h6'}}
                  title="Scopes"
                />
                <div className={classes.toolBarEnd}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    pr={1}
                  >
                    <SearchBar />
                    <IconButton color="primary" style={{height: '48px'}}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </div>
              </Toolbar>
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
                          <Grid key={i} item xs={12} md={size}>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <InputLabel>{label}</InputLabel>
                              <Select
                                MenuProps={MenuProps}
                                defaultValue={scope[key]}
                                label={label}
                              >
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
              <Box pt={1} pb={1} display="flex" justifyContent="center"></Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MemberList;
