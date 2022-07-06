import './styles.scss'

type Props = {
  cardNumber: number
  cardClickHandler: (event: React.MouseEvent<HTMLElement>) => void
  openedNumbers: number[]
}

export const Card: React.FC<Props> = ({
  cardNumber,
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
      <span>{cardNumber}</span>
    </div>
  )
}
