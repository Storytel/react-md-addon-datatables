import './styles.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TruncatedTableColumnDemo from './TruncatedTableColumnDemo';
import ProportionalTableDemo from './ProportionalTableDemo';
import { TabsContainer, Tabs, Tab } from 'react-md';
import hljs from 'highlight.js';

class App extends Component {
  componentDidMount () {
    document.querySelectorAll('div.code').forEach(hljs.highlightBlock);
  }

  render () {
    return (
      <div id="wrapper">
        <h1>react-md-addon-datatables</h1>
        <ProportionalTableDemo />
        <TruncatedTableColumnDemo />
      </div>
    )
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<App />, root);
});
