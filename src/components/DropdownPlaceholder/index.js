import React from 'react';

import joinClasses from '../../utils/joinClasses';

const DropdownPlaceholder = (props) => {
  const {
    baseClassName,
    placeholder,
    placeholderClassName,
    selectedLabel,
  } = props;

  const dropdownPlaceholder = joinClasses(
    `${baseClassName}-placeholder`,
    placeholderClassName,
    selectedLabel ? 'is-selected' : '',
  );

  return (
    <div className={dropdownPlaceholder}>
      {selectedLabel !== '' ? selectedLabel : placeholder}
    </div>
  );
};

export default DropdownPlaceholder;
