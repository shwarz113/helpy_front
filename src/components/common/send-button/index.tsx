import Icon from '../../../assets/button-icon.svg'
import styles from './index.module.css'
import {cls} from "../../../utils/classnames.ts";

type Props = {
  onClick: () => void
  loading?: boolean
  disabled?: boolean
}
export const SendButton = ({loading, disabled, onClick}: Props) => {
  return (
    <div onClick={onClick} className={cls(styles.button, (disabled || loading) && styles.disabled)}>
      <img src={Icon} alt={''} />
    </div>
  )
}
