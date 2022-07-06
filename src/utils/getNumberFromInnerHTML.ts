export function getNumberFromInnerHTML(inner: string): number {
  const value = inner.replace('<span>', '').replace('</span>', '')
  return Number(value) ? Number(value) : 0
}
