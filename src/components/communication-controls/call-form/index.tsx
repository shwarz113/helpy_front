import {useEffect} from "react";
import {Status} from "@11labs/react";
import PlayImg from '../../../assets/button-icon.svg'
import StopImg from '../../../assets/button-stop-icon.svg'
import styles from './index.module.css'
import {cls} from "../../../utils/classnames.ts";

type Props = {
  status: Status
  start: () => void
  end: () => void
}

const Button = ({inProgress, onClick}: { inProgress: boolean, onClick: ()=> void }) => {
  return (
    <div className={cls(styles.button, inProgress && styles.inProgress)} onClick={onClick}>
      <div className={styles.buttonBg}></div>
      <img src={inProgress ? StopImg : PlayImg} alt="button"/>
    </div>
  )
}

export const CallForm = ({status, end, start}: Props) => {
  useEffect(() => {
    return () => {
      end();
    }
  }, []);

  if (status === "disconnected") {
    return (
      <Button onClick={start} inProgress={false} />
    )
  }

  if (status === 'connected') {
    return (
      <Button onClick={end} inProgress={true} />
    )
  }

  return (
    <div className={styles.text}>Идет звонок...</div>
  )
}
