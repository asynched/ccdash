export const truncate = (chars: number) => (text: string) => {
  if (text.length > chars) {
    let truncated = text.substring(0, chars).split(' ')
    truncated.pop()
    return `${truncated.join(' ')}...`
  }
  return text
}
