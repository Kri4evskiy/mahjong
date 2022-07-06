import { MouseEvent, useEffect, useState } from 'react'
import {
  CLASSES,
  getNumberFromInnerHTML,
  getRandomShuffledArray,
} from '../../utils'
import { timeoutHandle } from '../../utils/timeoutHandle'
import { Card } from '../Card'
import './styles.scss'

export const Playground: React.FC = () => {
  const [randomizedArray, setRandomizedArray] = useState<number[]>([])
  const [openedNumbers, setOpenedNumbers] = useState<number[]>([])

  useEffect(() => {
    setRandomizedArray(getRandomShuffledArray())

    const timeout = timeoutHandle(3000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let clearNumbersTimeout: ReturnType<typeof setTimeout>

    if (openedNumbers.length === 2) {
      if (openedNumbers[0] !== openedNumbers[1]) {
        timeout = timeoutHandle(1000)
      } else {
        const nodes = document.querySelectorAll('div.card.active')

        nodes.forEach((node) => {
          node.classList.add(CLASSES.FOUNDED)
        })
      }

      clearNumbersTimeout = setTimeout(() => setOpenedNumbers([]), 1000)
    }
    return () => {
      clearTimeout(timeout)
      clearTimeout(clearNumbersTimeout)
    }
  }, [openedNumbers])

  const cardClickHandler = (event: MouseEvent<HTMLElement>) => {
    const {
      currentTarget: { classList, className, innerHTML },
    } = event

    let num = getNumberFromInnerHTML(innerHTML)
    setOpenedNumbers((prev) => [...prev, num])

    if (!className.includes(CLASSES.FOUNDED)) {
      classList.toggle(CLASSES.ACTIVE)
    }
  }

  return (
    <div className='container'>
      <h2>Mahjong-like game</h2>

      <div className='playground'>
        {randomizedArray.map((cardNumber, index) => (
          <Card
            key={index}
            cardNumber={cardNumber}
            cardClickHandler={cardClickHandler}
            openedNumbers={openedNumbers}
          />
        ))}
      </div>
    </div>
  )
}
