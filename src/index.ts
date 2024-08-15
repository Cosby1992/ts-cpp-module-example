const nativeModulePath = process.env.NODE_ENV === 'test' ?
  '../build/Release/basic-math.node'
  : '../../build/Release/basic-math.node';

const basicMathModule = require(nativeModulePath);

export function sum(a: number, b: number): number {
  return basicMathModule.sum(a, b);
}

export function sub(a: number, b: number): number {
  return basicMathModule.sub(a, b);
}