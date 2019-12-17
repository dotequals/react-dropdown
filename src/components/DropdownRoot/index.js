import React, { useEffect, useState, useRef } from 'react';

import DropdownArrow from '../DropdownArrow';
import DropdownControl from '../DropdownControl';
import DropdownMenu from '../DropdownMenu';
import DropdownPlaceholder from '../DropdownPlaceholder';

import joinClasses from '../../utils/joinClasses';
import resolver from '../../utils/resolver';

const DropdownRoot = (props) => {
  const {
    arrowClassName,
    arrowClosed,
    arrowOpen,
    baseClassName,
    className,
    controlClassName,
    disabled,
    menuClassName,
    onChange,
    onFocus,
    options,
    placeholder,
    placeholderClassName,
    value,
    wrapperClassName,
  } = props;
  const valueObj = resolver(value);
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(valueObj.label);
  const [selectedValue, setSelectedValue] = useState(valueObj.value);

  // Handle clicks when <Dropdown> is open and the user clicks somewhere outside the component.
  const root = useRef();
  const handleDropdownClose = (e) => {
    if (!root.current.contains(e.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleDropdownClose);
    } else {
      document.removeEventListener('mousedown', handleDropdownClose);
    }

    return () => {
      document.removeEventListener('mousedown', handleDropdownClose);
    };
  }, [open]);

  // Handle <Dropdown> being passed a different value
  useEffect(() => {
    const possibleObj = resolver(value);
    if (selectedValue !== possibleObj.value) {
      setSelectedLabel(possibleObj.label);
      setSelectedValue(possibleObj.value);
    }
  }, [value]);

  const handleChange = (optionObject) => {
    if (onChange && typeof onChange === 'function') {
      onChange(optionObject);
    }
    setSelectedValue(optionObject.value);
    setSelectedLabel(optionObject.label);
    setOpen(false);
  };

  const dropdownRoot = joinClasses(
    `${baseClassName}-root`,
    className,
    open ? 'is-open' : '',
  );

  const toggleDropdown = () => {
    if (onFocus && typeof onFocus === 'function') {
      onFocus(!open);
    }
    setOpen(!open);
  };

  const dropdownControlClick = (e) => {
    const { type, keyCode } = e;
    // Toggle on click
    if (type === 'click') {
      toggleDropdown();
    }

    // Open only on Enter and Space
    if (type === 'keydown' && (keyCode === 32 || keyCode === 13)) {
      e.preventDefault();
      if (!open) {
        toggleDropdown();
      }
    }
  };

  return (
    <div ref={root} className={dropdownRoot}>
      <DropdownControl
        baseClassName={baseClassName}
        controlClassName={controlClassName}
        dropdownDisabled={disabled}
        onClick={dropdownControlClick}
      >
        <DropdownPlaceholder
          baseClassName={baseClassName}
          placeholder={placeholder}
          placeholderClassName={placeholderClassName}
          selectedLabel={selectedLabel}
        />
        <DropdownArrow
          arrowClassName={arrowClassName}
          arrowClosed={arrowClosed}
          arrowOpen={arrowOpen}
          baseClassName={baseClassName}
          open={open}
          wrapperClassName={wrapperClassName}
        />
      </DropdownControl>

      { open ? (
        <DropdownMenu
          baseClassName={baseClassName}
          menuClassName={menuClassName}
          onClick={handleChange}
          options={options}
          selectedValue={selectedValue}
        />
      ) : '' }
    </div>
  );
};

DropdownRoot.defaultProps = {
  arrowClassName: '',
  baseClassName: 'Dropdown',
  className: '',
  controlClassName: '',
  disabled: false,
  menuClassName: '',
  placeholder: 'Select...',
  placeholderClassName: '',
  value: '',
};

export default DropdownRoot;
