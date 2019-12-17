import React from 'react';
import ReactDOM from 'react-dom';
// import { it } from 'jest';

import Dropdown from './index';

it('Dropdown renders without any props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown />, div);
});
