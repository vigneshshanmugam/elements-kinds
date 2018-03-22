# elements-kinds

JS helper function to debug elements kinds in v8

More details in this [blogpost](https://v8project.blogspot.de/2017/09/elements-kinds-in-v8.html) by Mathias Bynes

**DISCLAMIER: This module is not 100% correct, Its just a reference implementation in JavaScript.**

Any JS only implementation can only guess what the elements kind is. The proper way of finding out is to get the debug build of d8 and in the REPL use the special `%DebugPrint(object)` function.

```sh
$ out.gn/x64.debug/d8 --allow-natives-syntax

d8> const array = [1, 2, 3]; %DebugPrint(array);
DebugPrint: 0x1fbbad30fd71: [JSArray]
 - map = 0x10a6f8a038b1 [FastProperties]
 - prototype = 0x1212bb687ec1
 - elements = 0x1fbbad30fd19 <FixedArray[3]> [PACKED_SMI_ELEMENTS (COW)]
 - length = 3
 - properties = 0x219eb0702241 <FixedArray[0]> {
    #length: 0x219eb0764ac9 <AccessorInfo> (const accessor descriptor)
 }
 - elements= 0x1fbbad30fd19 <FixedArray[3]> {
           0: 1
           1: 2
           2: 3
 }
```

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
