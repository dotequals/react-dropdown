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
    options,
    placeholder,
    placeholderClassName,
    value,
  } = props;
  const valueObj = resolver(value);
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(valueObj.label);
  const [selectedValue, setSelectedValue] = useState(valueObj.value);

  // Handle clicks when <Dropdown> is open and the user clicks somewhere outside the component.
  const root = useRef();
  const focusRef = useRef();
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

  // Handle <Dropdown> being passed a different prop
  useEffect(() => {
    const possibleObj = resolver(value);
    if (selectedValue !== possibleObj.value) {
      setSelectedLabel(possibleObj.label);
      setSelectedValue(possibleObj.value);
    }
  }, [value]);

  const handleChange = (optionObject) => {
    onChange(optionObject);
    setSelectedValue(optionObject.value);
    setSelectedLabel(optionObject.label);
    setOpen(false);
  };

  const dropdownRoot = joinClasses(
    `${baseClassName}-root`,
    className,
    open ? 'is-open' : '',
  );

  const toggleDropdown = (e) => {
    const { type, keyCode } = e;
    if (type === 'click') {
      setOpen(!open);
      if (open) {
        if (focusRef.current) {
          focusRef.current.focus();
        }
      }
    }

    // Toggle on Enter and Space if !open
    if (type === 'keydown' && !open && (keyCode === 32 || keyCode === 13)) {
      e.preventDefault();
      setOpen(true);
      if (focusRef.current) {
        focusRef.current.focus();
      }
    }
  };

  return (
    <div ref={root} className={dropdownRoot}>
      <DropdownControl
        baseClassName={baseClassName}
        controlClassName={controlClassName}
        dropdownDisabled={disabled}
        onClick={toggleDropdown}
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
        />
      </DropdownControl>

      { open ? (
        <DropdownMenu
          baseClassName={baseClassName}
          focusRef={focusRef}
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
  onChange: (() => true),
  placeholder: 'Select...',
  placeholderClassName: '',
  value: '',
};

export default DropdownRoot;
