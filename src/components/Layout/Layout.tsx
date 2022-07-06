import './styles.scss'

type Props = {
  children: JSX.Element
}

export const Layout: React.FC<Props> = ({ children }) => {
  return <div className='container'>{children}</div>
}
