export const getRandom = <T>(source: T[]): T => {
  const length = source.length
  const index = Math.floor(Math.random() * length)

  return source[index]
}
