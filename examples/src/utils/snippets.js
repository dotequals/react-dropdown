const install = `
# with npm (--save not needed for npm 5.0.0+)
npm install --save @dotequals/react-dropdown

# with yarn
yarn add @dotequals/react-dropdown
`.trim();

const usage = `
import Dropdown from '@dotequals/react-dropdown';
import '@dotequals/react-dropdown/style.css'; // default styling

const handleChange = ({ label, value }) => (console.log(\`label: \${label}, value: \${value}\`));
const options = [ 'one', 'two', 'three' ];
const defaultOption = options[0];

<Dropdown
  options={options}
  onChange={handleChange}
  value={defaultOption}
/>
`.trim();

export {
  install,
  usage,
};
