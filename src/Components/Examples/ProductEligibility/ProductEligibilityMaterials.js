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
  {id: 1, product: 'Product Name 1', brand: 'Brand Name 1', selected: '4/5'},
  {id: 2, product: 'Product Name 2', brand: 'Brand Name 2', selected: '42/534'},
  {id: 3, product: 'Product Name 3', brand: 'Brand Name 3', selected: '41/576'},
  {
    id: 4,
    product: 'Product Name 4',
    brand: 'Brand Name 4',
    selected: '456/556',
  },
];

const Materials = [
  {material: 'Material 1 Name Here'},
  {material: 'Material 2 Name Here'},
  {material: 'Material 3 Name Here'},
  {material: 'Material 4 Name Here'},
];

export default class ProductEligibilityMaterials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  render() {
    return (
      <>
        <Box style={{maxHeight: '240px', overflow: 'scroll'}}>
          {Information.map(({product, brand, selected, id}) => (
            <div key={id}>
              <ListItem divider button onClick={this.handleClick}>
                <ListItemText
                  primary={
                    <>
                      <Typography>{product}</Typography>
                      <Typography>{brand}</Typography>
                      <Typography variant="caption">{selected}</Typography>
                    </>
                  }
                />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Materials.map(({material}) => (
                    <ListItem divider button key={material}>
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
}
