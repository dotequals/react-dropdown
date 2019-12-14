import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Prism from 'prismjs';

import CodeBlock from './components/CodeBlock';
import Dropdown from '../../src/index';

import { install, usage } from './utils/snippets';

import '../../src/style.css'; // import '@dotequals/react-dropdown/style.css';
import './css/index.css';

const App = () => {
  const [highlighted, setHighlight] = useState(false);
  useEffect(() => {
    if (!highlighted) {
      setTimeout(() => Prism.highlightAll(), 0);
      setHighlight(true);
    }
  }, [highlighted]);

  const options = [
    { value: 'one', label: 'One', disabled: false },
    { value: 'two', label: 'Two' },
    {
      type: 'group',
      name: 'group1',
      items: [
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' },
      ],
    },
    {
      type: 'group',
      name: 'group2',
      items: [
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' },
      ],
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>@dotequals/react-dropdown</h1>
        A drop in replacement for&nbsp;
        <a href="https://github.com/fraserxu/react-dropdown">react-dropdown</a>
        &nbsp;using&nbsp;
        <a href="https://reactjs.org/docs/hooks-intro.html">hooks</a>
        .
      </header>
      <section>
        <Dropdown options={options} />
      </section>
      <section>
        <h2>Install</h2>
        <CodeBlock language="bash">
          {install}
        </CodeBlock>
      </section>
      <section>
        <h2>Usage</h2>
        <CodeBlock showLineNumbers language="jsx">
          {usage}
        </CodeBlock>
      </section>
    </div>
  );
};

render(<App />, document.getElementById('root'));
