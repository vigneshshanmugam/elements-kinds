# elements-kinds

JS helper function to debug elements kinds in v8

More details in this [blogpost](https://v8project.blogspot.de/2017/09/elements-kinds-in-v8.html) by Mathias Bynes

**DISCLAMIER: This module is not 100% correct, Its just a reference implementation in JavaScript. Please refer to the blog post above for more details.**

### Installation

```sh
yarn add elements-kinds

// npm
npm install elements-kinds
```

### Usage

```js
const getElementsKinds = require("elements-kinds");

console.log(getElementsKinds(new Array(12));
// HOLEY_SMI_ELEMENTS
console.log(getElementsKinds([1, 2, "1", "3", 1.21]));
// PACKED_ELEMENTS
```
