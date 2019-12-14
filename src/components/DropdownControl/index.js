import React from 'react';

import joinClasses from '../../utils/joinClasses';

const DropdownControl = (props) => {
  const {
    baseClassName,
    children,
    controlClassName,
    dropdownDisabled,
    onClick,
  } = props;

  const dropdownControl = joinClasses(
    `${baseClassName}-control`,
    controlClassName,
    dropdownDisabled ? `${baseClassName}-disabled` : '',
  );

  return (
    <div className={dropdownControl} role="combobox" onClick={onClick} onKeyDown={onClick} aria-controls={`${baseClassName}-control`} aria-expanded="true" tabIndex="0">
      {children}
    </div>
  );
};

export default DropdownControl;
