import React from 'react';
import ReactDOM from 'react-dom';
import DemoLectures from './DemoLectures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoLectures />, div);
  ReactDOM.unmountComponentAtNode(div);
});
