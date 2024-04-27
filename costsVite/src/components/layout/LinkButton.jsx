import { Link } from "react-router-dom"
import styles from '../styles/LinkButton.module.css'

function LinkButton({where, text}) {
  return (
    <Link className={styles.btn} to={where}>
      {text}
    </Link>
  )
}

export default LinkButton