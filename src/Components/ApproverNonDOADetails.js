/* eslint-disable no-use-before-define */

import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {people} from './ApproverNonDOA';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ApproverNonDOADetails() {
  const [selectedFilm, setSelectedFilm] = useState([]);
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={people}
      disableCloseOnSelect
      renderTags={() => null}
      disableClearable
      onChange={(e, film) => {
        setSelectedFilm(film);
      }}
      getOptionLabel={(option) => option.name}
      renderOption={(option, state) => {
        const selectFilmIndex = selectedFilm.findIndex(
          (film) => film.name.toLowerCase() === 'all'
        );
        if (selectFilmIndex > -1) {
          state.selected = true;
        }
        return (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{marginRight: 8}}
              checked={state.selected}
            />
            {option.name}
          </React.Fragment>
        );
      }}
      style={{width: 500}}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Checkboxes"
          placeholder="Favorites"
        />
      )}
    />
  );
}
