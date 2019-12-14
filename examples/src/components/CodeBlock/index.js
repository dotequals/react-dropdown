import React from 'react';

import joinClasses from '../../../../src/utils/joinClasses';

const CodeBlock = (props) => {
  const {
    children,
    language,
    showLanguage,
    showLineNumbers,
  } = props;

  const preClasses = joinClasses(
    showLineNumbers ? 'line-numbers' : '',
    showLanguage ? 'show-language' : '',
  );

  return (
    <pre className={preClasses}>
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

CodeBlock.defaultProps = {
  language: 'javascript',
  showLanguage: false,
  showLineNumbers: false,
};

export default CodeBlock;
