# TypeScript Components by Nnnaoyy

This repository was created for https://github.com/OpenClassrooms-Student-Center/P12_Front-end, project OpenClassrooms.

## Features

- Supports string and object options for dropdown values.
- Customizable size (`small`, `medium`, `large`).
- Text color customization using the `color` prop.
- Background color customization using the `background` prop.
- Optional placeholder and default value.
- Callback function to handle value changes.

## Installation

Install this package:

```shell
npm add react-select-by-nnaoyy
```

## Usage Example

```tsx
import React from 'react';
import { Select } from 'react-select-by-nnaoyy';

import './select.css';

function App() {
  const options = [
    'Option 1',
    { name: 'Option 2', abbreviation: 'OPT2' },
    { name: 'Option 3', abbreviation: 'OPT3' },
  ];

  const handleChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <div>
      <h1>Custom Select Component</h1>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Select an option"
        size="large"
        color="blue"
        background="red"
      />
    </div>
  );
}

export default App;
```
File 'select.css'
```css
.select-small {
    width: 50px;
    padding: 1px;
}

.select-medium {
    width: 177px;
    padding: 1px;
}

.select-large {
    width: 400px;
    padding: 1px;
}
```

## Props

The `Select` component supports the following props:

| Prop          | Type                                                      | Required | Default   | Description                                                                 |
|---------------|-----------------------------------------------------------|----------|-----------|-----------------------------------------------------------------------------|
| `options`     | `(string | { name: string; abbreviation: string })[]`      | Yes      | N/A       | An array of options for the dropdown. Each option can be a string or an object. |
| `onChange`    | `(value: string) => void`                                  | Yes      | N/A       | Callback function that receives the selected value.                         |
| `placeholder` | `string`                                                  | No       | N/A       | Placeholder text displayed when no option is selected.                      |
| `defaultValue`| `string`                                                  | No       | N/A       | Default value to be pre-selected in the dropdown.                           |
| `size`        | `'small' / 'medium' / 'large'`                            | No       | `medium`  | Adjusts the size of the dropdown.                                           |
| `color`       | `string`                                                  | No       | N/A       | Sets the text color of the dropdown.
| `background`  | `string`                                                  | No       | N/A       | Sets the background color of the dropdown.                                         |

## Example Props in Detail

### `options`
Defines the list of options in the dropdown. 

- Strings: `['Option 1', 'Option 2']`
- Objects: `[{ name: 'Option 1', abbreviation: 'OPT1' }, { name: 'Option 2', abbreviation: 'OPT2' }]`

Example:
```tsx
options={['Option 1', { name: 'Option 2', abbreviation: 'OPT2' }]}
```

### `onChange`
Callback function triggered when a new value is selected.

Example:
```tsx
const handleChange = (value: string) => {
  console.log('Selected:', value);
};
```

### `placeholder`
Displays placeholder text when no option is selected.

Example:
```tsx
placeholder="Choose an option"
```

### `defaultValue`
Pre-selects a default value in the dropdown.

Example:
```tsx
defaultValue="OPT1"
```

### `size`
Adjusts the size of the dropdown. Options include:

- `small`: Small dropdown (e.g., 50px wide).
- `medium`: Medium dropdown (e.g., 177px wide).
- `large`: Large dropdown (e.g., 350px wide).

Example:
```tsx
size="large"
```

### `color`
Sets the text color and the background color of the dropdown.

Example:
```tsx
color="blue"
background="red"
```
