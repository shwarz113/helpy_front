import {Message} from "../types.ts";
import styles from './index.module.css'
import {cls} from "../../../../utils/classnames.ts";

type Props = {
  message: Message
}
export const MessageItem = ({message: { role, content}}: Props) => {
  return (
    <div className={cls(styles.message, role === "user" && styles.right)}>{content}</div>
  )
}
