import { ReactComponent as IconMenu } from './icons/menu.svg'

export default const ButtonMenu = ({ onClick }) => {
  return (
    <button onClick={onClick}>
	    <span>Open Menu</span>
	    <IconMenu width="1rem" />
    </button>
  )
}
