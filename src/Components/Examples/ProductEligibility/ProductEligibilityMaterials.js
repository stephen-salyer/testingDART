import React from 'react';
import {
  Box,
  ListItemText,
  List,
  ListItem,
  Collapse,
  Typography,
} from '@material-ui/core';
import {ExpandLess, ExpandMore} from '@material-ui/icons';

const Information = [
  {
    id: 1,
    product: 'Product Name 1',
    brand: 'Brand Name 1',
    selected: 5,
    max: 5,
    // make this all instead of numbers
  },
  {
    id: 2,
    product: 'Product Name 2',
    brand: 'Brand Name 2',
    selected: 42,
    max: 534,
  },
  {
    id: 3,
    product: 'Product Name 3',
    brand: 'Brand Name 3',
    selected: 41,
    max: 576,
  },
  {
    id: 4,
    product: 'Product Name 4',
    brand: 'Brand Name 4',
    selected: 456,
    max: 556,
  },
];

const Materials = [
  {material: 'Material 1 Name Here'},
  {material: 'Material 2 Name Here'},
  {material: 'Material 3 Name Here'},
  {material: 'Material 4 Name Here'},
];

export default function ProductEligibilityMaterials() {
  const [open, setOpen] = React.useState(null);
  const handleClick = (id) => {
    const prev = open;
    setOpen(prev == id ? null : id);
  };

  return (
    <>
      <Box style={{maxHeight: '240px', overflow: 'scroll'}}>
        {Information.map(({product, brand, selected, max, id}) => (
          <div key={id}>
            <ListItem
              button={selected !== max}
              onClick={selected !== max ? () => handleClick(id) : null}
            >
              <ListItemText
                primary={
                  <>
                    <Typography>{product}</Typography>
                    <Typography>{brand}</Typography>
                    <Typography variant="caption">{`${selected} / ${max}`}</Typography>
                  </>
                }
              />
              {selected !== max &&
                (open == id ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={open == id} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Materials.map(({material}) => (
                  <ListItem divider key={material}>
                    <ListItemText primary={material} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </Box>
    </>
  );
}
