import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import EmailIcon from '@material-ui/icons/Email';
import HelpIcon from '@material-ui/icons/Help';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBarBackground: {
    backgroundColor: '#142357',
  },
  dividerColor: {
    backgroundColor: '#FFFFFF',
    marginRight: '1rem',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarTheme} position="sticky">
        <ToolBar className={classes.appBarBackground}>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <svg width="37" height="30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  x1="-40.3916769%"
                  y1="50%"
                  x2="23.1334149%"
                  y2="50%"
                  id="a"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#DADCDD" offset="30%" />
                  <stop stopColor="#F4F4F4" offset="81%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="119.462228%"
                  y1="-34.7003155%"
                  x2="71.9590269%"
                  y2="29.6529968%"
                  id="b"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#DADCDD" offset="30%" />
                  <stop stopColor="#F4F4F4" offset="81%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="134.002509%"
                  y1="1.74672489%"
                  x2="87.4529486%"
                  y2="41.2906356%"
                  id="c"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#DADCDD" offset="30%" />
                  <stop stopColor="#F4F4F4" offset="81%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="-17.7925001%"
                  y1="39.7099798%"
                  x2="42.6935575%"
                  y2="49.9600383%"
                  id="d"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#DADCDD" offset="30%" />
                  <stop stopColor="#F4F4F4" offset="81%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="113.426423%"
                  y1="-2.1071115%"
                  x2="31.3641246%"
                  y2="61.1062335%"
                  id="e"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#DADCDD" offset="30%" />
                  <stop stopColor="#F4F4F4" offset="81%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient x1="106%" y1="-66%" x2="-657%" y2="654%" id="f">
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#DADCDD" offset="30%" />
                  <stop stopColor="#F4F4F4" offset="81%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="194.328783%"
                  y1="-108.277961%"
                  x2="-17.3581221%"
                  y2="128.964217%"
                  id="g"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="39.6923748%"
                  y1="28.4781923%"
                  x2="54.5402909%"
                  y2="54.9031088%"
                  id="h"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="128.142458%"
                  y1="24.0693747%"
                  x2="30.6564246%"
                  y2="48.715365%"
                  id="i"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#DADCDD" offset="30%" />
                  <stop stopColor="#F4F4F4" offset="81%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="164.20494%"
                  y1="-173.982929%"
                  x2="16.9214241%"
                  y2="96.3637291%"
                  id="j"
                >
                  <stop stopColor="#D1D3D4" offset="0%" />
                  <stop stopColor="#FFF" offset="100%" />
                </linearGradient>
              </defs>
              <g fillRule="nonzero" fill="none">
                <path
                  d="M8.17 9.31l.36 19.85c1.58-1 7.81-5.32 7.81-11.92 0-7.9-8-16.95-8.17-17.16.06.14 1.39 3.61 0 9.23z"
                  fill="url(#a)"
                />
                <path
                  d="M16.34 17.24c0 6.6-6.23 10.93-7.81 11.92v.76c2.93-1.76 7.81-5.31 7.81-12.68z"
                  fill="url(#b)"
                />
                <path
                  d="M4.68 14.38L.2 19.7c.93 5.73 5 8.67 7.6 10.22l.37-20.61c-.53758289 2.0447794-1.77187465 3.8378623-3.49 5.07z"
                  fill="url(#c)"
                />
                <path
                  d="M8.17 9.31c1.39-5.62.06-9.09 0-9.23L0 16.65c1.68109032-.4600034 3.26150695-1.229863 4.66-2.27 1.7256069-1.2288048 2.96725235-3.0222927 3.51-5.07z"
                  fill="#FFF"
                />
                <path
                  d="M.02 16.64v.59a15.25999993 15.25999993 0 00.19 2.46l4.48-5.32c-1.40149994 1.0412493-2.98540392 1.8111555-4.67 2.27z"
                  fill="#CCC"
                />
                <path
                  d="M21.5 19.06l.17-.31c3.65-7 .7-18.75.7-18.75l-.25.49-5.76 11.53c.5832102 1.680102.8970861 3.4418567.93 5.22.0266545 2.3585843-.5189294 4.6884677-1.59 6.79 2.4207458-.9845085 4.4562057-2.728687 5.8-4.97z"
                  fill="url(#d)"
                />
                <path
                  d="M13.04 5.14c1.2463916 1.97420951 2.285252 4.07203729 3.1 6.26L22.35.01c-3.3006495 1.32451647-6.4271385 3.04727574-9.31 5.13z"
                  fill="url(#e)"
                />
                <path fill="url(#f)" d="M22.37 0l-.24.48z" />
                <path
                  d="M21.5 19.06c-1.3388055 2.2525073-3.3748175 4.0076901-5.8 5-.16.31-.33.61-.51.89 2.7101111-1.1914129 4.9350308-3.2682397 6.31-5.89z"
                  fill="url(#g)"
                />
                <path
                  d="M22.08 19.92c-.796253 1.3648755-1.8095217 2.5909306-3 3.63 2.33.75 6.42 1.54 9.83-.6l.24-.16c5.41-3.66 7.88-13.38 7.88-13.38L22.08 19.92z"
                  fill="url(#h)"
                />
                <path
                  d="M24.44 10.41c.0025766 2.8650958-.5828317 5.7002417-1.72 8.33l14.32-9.3s-7.14-.95-12.6.97z"
                  fill="url(#i)"
                />
                <path
                  d="M19.08 23.58l-.51.42c3.401934 1.3836557 7.2662657 1.0099292 10.34-1-3.4 2.12-7.49 1.33-9.83.58z"
                  fill="url(#j)"
                />
              </g>
            </svg>
          </IconButton>
          <Divider
            classes={{root: classes.dividerColor}}
            orientation="vertical"
            flexItem
          />
          <Typography className={classes.title} varient="h6" color="inherit">
            Market Funding
          </Typography>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="list">
            <ListIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="email">
            <EmailIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="help">
            <HelpIcon />
          </IconButton>
          <Avatar alt="Cindy Baker" src="Static/Images/Avatar/3.jpg" />
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
