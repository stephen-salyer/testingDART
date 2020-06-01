import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Members} from './MemberList';
// import {Programs} from './ProgramListItemsAll'; THIS WILL MERGE WITH MEMBERS DATA
import {Checkbox} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ProgramListFilterSearch() {
  const options = Members.map((option) => {
    const firstLetter = option.category.toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      clearOnBlur
      freeSolo
      multiple
      limitTags={1}
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      renderOption={(option, {selected}) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{marginRight: 8}}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{width: '100%'}}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
    />
  );
}

// export default function ProgramListFilterSearch() {
//   var mergeObjectData = [...Members, ...Programs];
//   const options = mergeObjectData.map((option) => {
//     const categoryName = option.category;
//     return {
//       catName: categoryName,
//     };
//   });

//   const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
//   const checkedIcon = <CheckBoxIcon fontSize="small" />;

//   return (
//     <Autocomplete
//       clearOnBlur
//       freeSolo
//       multiple
//       limitTags={1}
//       id="grouped-demo"
//       options={options.sort((a, b) => -b.catName.localeCompare(a.catName))}
//       groupBy={(option) => option.catName}
//       getOptionLabel={(option) => option.title}
//       renderOption={(option, {selected}) => (
//         <React.Fragment>
//           <Checkbox
//             icon={icon}
//             checkedIcon={checkedIcon}
//             style={{marginRight: 8}}
//             checked={selected}
//           />
//           {option.title}
//         </React.Fragment>
//       )}
//       style={{width: '100%'}}
//       renderInput={(params) => (
//         <TextField {...params} label="Search" variant="outlined" />
//       )}
//     />
//   );
// }
