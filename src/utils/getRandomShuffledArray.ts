export function getRandomShuffledArray(): number[] {
  const range = 1.5
  const arr: number[] = []

  for (let i = 0; i < 15; i++) {
    if (arr.length === 0) {
      arr.push(Math.floor(getRandomFirstNumber()))
    } else {
      const lastNumInArr = arr[arr.length - 1]
      arr.push(Math.floor(lastNumInArr * range))
    }
  }

  return shuffleArray([...arr, ...arr])
}

function getRandomFirstNumber(min: number = 2, max: number = 10) {
  return Math.random() * (max - min) + min
}

function shuffleArray(array: number[]) {
  return array.sort(() => Math.random() - 0.5)
}
