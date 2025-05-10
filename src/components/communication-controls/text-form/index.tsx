import {useState} from "react";
import {SendButton} from "../../common/send-button";
import styles from './index.module.css'

type Props = {
  sendMessage: (v: string) => Promise<void>
  disabled?: boolean
}
export const TextForm = ({sendMessage}: Props) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    if (input) {
      setLoading(true)
      return sendMessage(input)
        .then(() => setInput(''))
        .finally(() => setLoading(false))
    }
    return Promise.resolve()
  }

  return (
    <div className={styles.wrapper}>
      <textarea
        rows={3}
        placeholder={'Напиши сообщение...'}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        className={styles.input}
        disabled={loading}
      />
      <SendButton onClick={onClick} loading={loading} disabled={input === ''} />
    </div>
  )
}
