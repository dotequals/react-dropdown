# @dotequals/react-dropdown
 Drop-in replacement for [fraserxu/react-dropdown](https://github.com/fraserxu/react-dropdown) using [hooks](https://reactjs.org/docs/hooks-intro.html) **(requires react >=16.8.0)**.

## FAQ
**Why not just use `<select>` and `<option>`?** Mainly, [\<select\> styling with CSS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#Styling_with_CSS), but a custom implementation does allow for a few more improvements.

**I want searching, clearing, and the ability to select multiple items. Is that possible?** For even more features than what is offered by the scope of this project, check out [react-select](https://github.com/JedWatson/react-select).

**Why this over the original?** While using the original in a project, I noticed it seems to have stagnated and will be incompatible as of react@17.0.0 without the `UNSAFE_` prefix for `componentWillReceiveProps `. I am also working through the issues/PRs of the original to bring them over provided they wouldn't cause breaking changes.

**Why hooks?** I wanted to give them a try and it was one way to get around using `UNSAFE_componentWillReceiveProps `.

## Install
```bash
# with npm (--save not needed for npm 5.0.0+)
npm install --save @dotequals/react-dropdown
```
```bash
# with yarn
yarn add @dotequals/react-dropdown
```

## Usage
```js
import Dropdown from '@dotequals/react-dropdown';
import '@dotequals/react-dropdown/style.css'; // default styling

const handleChange = ({ label, value }) => (console.log(`label: ${label}, value: ${value}`));
const options = [ 'one', 'two', 'three' ];
const defaultOption = options[0];

<Dropdown
  options={options}
  onChange={handleChange}
  value={defaultOption}
/>
```

## Props

### Options
The `options` prop can be used as minimally as an array of options, or more complexly as an array of objects that can include grouping, styling, or disabling.

**Flat Array**
```js
const options = [
  'one', 'two', 'three',
];
```

**Object Array**
```js
const options = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
];
```

**Object Array with Group**
```js
const options = [
  {
    type: 'group', name: 'Group 1', items: [
      { label: 'one', value: 1 },
      { label: 'two', value: 2 },
    ],
  },
  {
    type: 'group', name: 'Group 2', items: [
      { label: 'three', value: 3 },
      { label: 'four', value: 4 },
    ],
  },
];
```

**Object Array with Individual Option CSS Styling**
```js
const options = [
  { label: 'one', value: 1, className: 'oneCustomClassName' },
  { label: 'two', value: 2, className: 'twoCustomClassName' },
];
```

**Object Array with Disabled Option**
```js
const options = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2, disabled: true },
];
```

### placeholder
The `placeholder` prop is used when `value` is missing. It defaults to `Select...`.

### value
The `value` prop is used to determine what should be shown in the `<Dropdown>` component. If there isn't one, `placeholder` will be used.

```js
const options = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
];
const value = options[0] // { label: 'one', value: 1 }

<Dropdown options={options} value={value} />
```

### onChange
The `onChange` prop should be passed a function. When the event is emitted, it will receive an object in the form of `{ label, value }`. The function should be used update `value` for a [controlled component](https://reactjs.org/docs/forms.html#controlled-components).


### disabled
The `disabled` prop can be passed with a `true` or `false` value to handle disabling at the `<Dropdown>` component level.

```html
<Dropdown disabled options={options} placeholder="I can't be opened" />
```

### Override Default CSS Classes Prefix
The `baseClassName` prop can be used to change the prefix on all of the default classes from `Dropdown` to `baseClassName`'s value. You will need to provide your own CSS or make a copy of [style.css](./src/style.css) to import.
```html
<Dropdown baseClassName="ComboBox" />
```
**Output**
```html
<div class="ComboBox-root">
  <div class="ComboBox-control">
    <div class="ComboBox-placeholder">Select...</div>
    <div class="ComboBox-arrow-wrapper"><span class="ComboBox-arrow"></span></div>
  </div>
</div>
```

### Custom CSS Class Names
The following props can be used to add additional class names to parts of the `<Dropdown>` (such as for use with [CSS modules](https://github.com/css-modules/css-modules)):
- `className` appended to the element with the `Dropdown-root` class.
- `controlClassName` appended to the element with the `Dropdown-control` class.
- `placeholderClassName` appended to the element with the `Dropdown-placeholder` class.
- `menuClassName` appended to the element with the `Dropdown-menu` class.
- `arrowClassName` appended to the element with the `Dropdown-arrow` class.

```html
<Dropdown
  className="rootCustomClassName"
  controlClassName="controlCustomClassName"
  placeholderClassName="placeholderCustomClassName"
  menuClassName="menuCustomClassName"
  arrowClassName="menuCustomClassName"
/>
```

### arrowClosed, arrowOpen
As an alternative to styling `Dropdown-arrow`, it can be replaced entirely if `arrowClosed` and `arrowOpen` are passed as props to `<Dropdown>`.

```html
<Dropdown 
  arrowClosed={<span className="arrow-closed" />}
  arrowClosed={<span className="arrow-open" />}
/>
```

## Develop Dropdown/Start Example
1. `git clone`
2. `npm install`
3. `npm start`
4. Navigate to [http://localhost:3000](http://localhost:3000)

## Distribute
### To NPM
**Dry Run (optional)**
1. `npm pack`
2. inspect the built `.tgz`

**Package**
1. Make sure you're logged into npm (`npm whoami`)
1. Increment `version` in `package.json`
2. `npm run publish` (Note: `scripts.prepublishOnly` is run automatically **before** `scripts.publish`)

### To GitHub Pages
1. Make sure origin exists (`git remote show origin`) and that you can push to it.
2. `npm run publish-example`
