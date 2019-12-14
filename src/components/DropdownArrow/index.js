import React from 'react';

import joinClasses from '../../utils/joinClasses';

const DropdownArrow = (props) => {
  const {
    arrowClassName,
    arrowClosed,
    arrowOpen,
    baseClassName,
    open,
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

  return (
    <div className={`${baseClassName}-arrow-wrapper`}>
      {renderArrow()}
    </div>
  );
};

export default DropdownArrow;
