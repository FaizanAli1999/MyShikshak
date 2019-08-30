import React from 'react';
import ReactDOM from 'react-dom';
import Searchjobs from './Searchjobs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Searchjobs />, div);
  ReactDOM.unmountComponentAtNode(div);
});