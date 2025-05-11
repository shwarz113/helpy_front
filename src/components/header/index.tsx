import styles from './index.module.css'
import {CHAT_LOCAL_STORAGE} from "../../utils/constants.ts";
export const Header = () => {
  const cleanHistory = () => {
    localStorage.removeItem(CHAT_LOCAL_STORAGE);
    window.location.reload();
  }
  return (
    <div className={styles.header}>
      <div className={styles.button} onClick={cleanHistory}>Очистить историю</div>
    </div>
  )
}
