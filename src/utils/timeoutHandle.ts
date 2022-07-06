import { CLASSES } from './enums'

export function timeoutHandle(
  delay: number = 0
): ReturnType<typeof setTimeout> {
  const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
    const nodes = document.querySelectorAll('div.card.active')
    nodes.forEach((node) => {
      if (!node.classList.value.includes(CLASSES.FOUNDED)) {
        node.classList.remove(CLASSES.ACTIVE)
      }
    })
  }, delay)
  return timeout
}
