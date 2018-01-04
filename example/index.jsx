import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import TruncatedTableColumnDemo from './TruncatedTableColumnDemo';
import ProportionalTableDemo from './ProportionalTableDemo';
import { TabsContainer, Tabs, Tab } from 'react-md';

const App = () => (
  <div id="wrapper">
    <h1>react-md-addon-datatables</h1>
    <ProportionalTableDemo />
    <TruncatedTableColumnDemo />
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<App />, root);
});
