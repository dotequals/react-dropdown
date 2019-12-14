const joinClasses = (...classNames) => {
  let classString = '';

  classNames.forEach((className) => {
    if (className && classString) {
      classString += ` ${className}`;
    } else if (className) {
      classString += `${className}`;
    }
  });

  return classString;
};

export default joinClasses;
