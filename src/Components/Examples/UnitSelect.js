import {Container} from '@material-ui/core';
import React from 'react';
import SelectThings from './SelectThings';

export default function UnitSelect() {
  return (
    <>
      <Container maxWidth="lg" style={{paddingTop: 80}}>
        <SelectThings />
      </Container>
    </>
  );
}
