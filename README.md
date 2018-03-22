# elements-kinds

JS helper function to debug elements kinds in v8

More details in this [blogpost](https://v8project.blogspot.de/2017/09/elements-kinds-in-v8.html) by Mathias Bynes

### Installation

```sh
yarn add elements-kinds

// npm
npm install elements-kinds
```

### Usage

```js
const getElementKinds = require("elements-kinds");

console.log(getElementKinds(new Array(12));
// HOLEY_SMI_ELEMENTS
console.log(getElementKinds([1, 2, "1", "3", 1.21]));
// PACKED_ELEMENTS
```
