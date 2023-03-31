
import styles from './User.module.css'
const User = (props) => {

  let year = "years"

  if(props.age === 1) year = "year"

  return(
    <li className={styles.user}>
      <span>{props.name} </span>
      <span>({props.age} {year} old)</span>
    </li>
  );
}

export default User