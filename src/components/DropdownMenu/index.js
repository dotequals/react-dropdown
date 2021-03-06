import React from 'react';

import DropdownMenuItem from '../DropdownMenuItem';

import joinClasses from '../../utils/joinClasses';
import resolver from '../../utils/resolver';

const DropdownMenu = (props) => {
  const {
    baseClassName,
    menuClassName,
    onClick,
    options,
    selectedValue,
  } = props;

  const renderGroup = (option) => {
    const { key, items, name } = option;
    const groupOptions = items.map((item) => {
      const optionObj = resolver(item);
      return (
        <DropdownMenuItem key={optionObj.value} baseClassName={baseClassName} onClick={onClick} option={item} selectedValue={selectedValue} type="option" />
      );
    });

    return (
      <div className={`${baseClassName}-group`} key={key || name} role="listbox" tabIndex={-1}>
        <DropdownMenuItem baseClassName={baseClassName} option={name} type="title" />
        {groupOptions}
      </div>
    );
  };

  const renderMenu = () => {
    if (!options || !options.length) {
      return <DropdownMenuItem baseClassName={baseClassName} option="No options found" type="noresults" />;
    }

    const menu = options.map((option) => {
      const { type } = option;
      if (type === 'group') {
        return renderGroup(option);
      }

      const optionObj = resolver(option);
      return <DropdownMenuItem key={optionObj.value} baseClassName={baseClassName} onClick={onClick} option={option} selectedValue={selectedValue} type="option" />;
    });

    return menu;
  };

  const menuClass = joinClasses(
    `${baseClassName}-menu`,
    menuClassName,
  );

  return (
    <div className={menuClass}>
      {renderMenu()}
    </div>
  );
};

export default DropdownMenu;
