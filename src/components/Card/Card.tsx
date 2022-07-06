import './styles.scss'

type Props = {
  num: number
  cardClickHandler: (event: React.MouseEvent<HTMLElement>) => void
  openedNumbers: number[]
}

export const Card: React.FC<Props> = ({
  num,
  cardClickHandler,
  openedNumbers,
}) => {
  return (
    <div
      className='card active'
      onClick={(event) => {
        openedNumbers.length < 2 && cardClickHandler(event)
      }}
    >
      <span>{num}</span>
    </div>
  )
}
