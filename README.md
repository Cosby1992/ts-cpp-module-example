# Native Basic Math

This project is an example of a Native Node.js module implemented in C++ with TypeScript/JavaScript bindings. It provides basic arithmetic operations such as addition and subtraction, serving as a foundation for learning or building more complex native modules.


## Installation
### Using NPM
```bash
npm install @cosby/native-basic-math
```

### Using Yarn
```bash
yarn add @cosby/native-basic-math
```

### Using PNPM
```
pnpm i @cosby/native-basic-math
```

## Usage

```js
const math = require('@cosby/native-basic-math');

// Addition
console.log(math.sum(2, 3)); // Output: 5

// Subtraction
console.log(math.sub(5, 2)); // Output: 3

// Multiplication
console.log(math.mul(3, 4)); // Output: 12

// Division
console.log(math.div(10, 2)); // Output: 5

```

or

```ts
import math from '@cosby/native-basic-math';

// Addition
console.log(math.sum(2, 3)); // Output: 5

// Subtraction
console.log(math.sub(5, 2)); // Output: 3

// Multiplication
console.log(math.mul(3, 4)); // Output: 12

// Division
console.log(math.div(10, 2)); // Output: 5

```

## API
| Function                              | Description                                                           |
|----------------------------------------|----------------------------------------------------------------------|
| `sum(a: number, b: number): number`   | Returns the sum of `a` and `b`.                                       |
| `sub(a: number, b: number): number`   | Returns the difference when `b` is subtracted from `a`.               |
| `mul(a: number, b: number): number`   | *Not yet implemented.* Intended to return the product of `a` and `b`. |
| `div(a: number, b: number): number`   | *Not yet implemented.* Intended to return the quotient when `a` is divided by `b`. Throws an error if `b` is 0. |



## Building the module
If you want to build the module from source, run:
```bash
yarn build
```
This will clean the environment, build the C++ native module, and compile TypeScript files.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENCE) file for details.
