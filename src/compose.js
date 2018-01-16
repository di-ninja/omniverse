// from https://gist.github.com/WaldoJeffers/905e14d03f4283599bac753f73b7716b#file-compose-js
export default function(...fns){
  return fns.reduce((f, g) => (...args) => f(g(...args)))
}

// Usage : compose functions right to left
// compose(minus8, add10, multiply10)(4) === 42
//
// The resulting function can accept as many arguments as the first function does
// compose(add2, multiply)(4, 10) === 42
