import React from 'react';

import joinClasses from '../../utils/joinClasses';

const DropdownArrow = (props) => {
  const {
    arrowClassName,
    arrowClosed,
    arrowOpen,
    baseClassName,
    open,
    wrapperClassName,
  } = props;

  const renderArrow = () => {
    if (arrowOpen && arrowClosed) {
      const arrow = open ? arrowOpen : arrowClosed;
      return arrow;
    }
    const arrowClass = joinClasses(
      `${baseClassName}-arrow`,
      arrowClassName,
    );
    return <span className={arrowClass} />;
  };

  const dropdownArrow = joinClasses(
    `${baseClassName}-arrow-wrapper`,
    wrapperClassName,
  );

  return (
    <div className={dropdownArrow}>
      {renderArrow()}
    </div>
  );
};

export default DropdownArrow;
