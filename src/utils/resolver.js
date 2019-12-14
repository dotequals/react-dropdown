const resolver = (option) => ({
  label: option.label || option.value || option,
  value: option.value || option.label || option,
});

export default resolver;
