export function compose<A>(...fns: ((arg: A) => void)[]) {
  return (argument: A) => {
    fns.forEach((fn) => fn(argument))
  }
}
