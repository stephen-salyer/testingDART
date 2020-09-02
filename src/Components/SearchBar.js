import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Box} from '@material-ui/core';

export default function SearchBar() {
  return (
    <Box display="flex" alignItems="center" pr={1}>
      <SearchIcon />
      <InputBase placeholder="Search…" inputProps={{'aria-label': 'search'}} />
    </Box>
  );
}
