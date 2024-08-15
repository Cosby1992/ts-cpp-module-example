const basicMathModule = require('../build/Release/basic-math.node');

export function sum(a: number, b: number): number {
  return basicMathModule.sum(a, b);
}

export function sub(a: number, b: number): number {
  return basicMathModule.sub(a, b);
}