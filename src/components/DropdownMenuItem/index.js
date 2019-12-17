import React from 'react';

import joinClasses from '../../utils/joinClasses';
import resolver from '../../utils/resolver';

const DropdownMenuItem = (props) => {
  const {
    baseClassName,
    onClick,
    option,
    selectedValue,
    type,
  } = props;

  const { className, disabled } = option;
  const optionObj = resolver(option);
  const { label, value } = optionObj;
  const isSelected = value === selectedValue;

  const navigateMenu = (e) => {
    const { keyCode, type: eType } = e;

    if (eType === 'keydown') {
      // Submit on Enter
      if (keyCode === 13) {
        onClick(optionObj);
      }
    }

    if (eType === 'click') {
      onClick(optionObj);
    }
  };

  const menuItemClass = joinClasses(
    `${baseClassName}-${type}`,
    className,
    isSelected ? 'is-selected' : '',
    disabled ? 'disabled' : '',
  );

  return (
    <div
      aria-disabled={false || disabled}
      aria-readonly={type === 'title'}
      aria-selected={isSelected}
      className={menuItemClass}
      key={value}
      onClick={onClick && !disabled ? navigateMenu : undefined}
      onKeyDown={onClick && !disabled ? navigateMenu : undefined}
      role={type !== 'group' ? 'option' : 'separator'}
      tabIndex={type === 'title' || disabled ? -1 : 0}
    >
      {label}
    </div>
  );
};

export default DropdownMenuItem;
