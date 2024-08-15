const sumModule = require('../build/Release/sum.node');

export function sum(a: number, b: number): number {
  return sumModule.sum(a, b);
}