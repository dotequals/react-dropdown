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
    const { keyCode } = e;
    // Submit on Enter
    if (keyCode === 13) {
      onClick(option);
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
      onClick={onClick && !disabled ? () => onClick(option) : undefined}
      onKeyDown={onClick && !disabled ? (e) => navigateMenu(e, option) : undefined}
      role={type !== 'group' ? 'option' : 'separator'}
      tabIndex={type === 'title' || disabled ? -1 : 0}
    >
      {label}
    </div>
  );
};

export default DropdownMenuItem;
