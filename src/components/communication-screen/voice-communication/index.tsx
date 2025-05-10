import {CommunicationControls} from "../../communication-controls";
import {COMMUNICATION_TYPE} from "../../../utils/constants.ts";
import Bg from '../../../assets/voice-bg.png'
import styles from './index.module.css'

type Props = {
  changeType: (v: COMMUNICATION_TYPE) => void
}

export const VoiceCommunication = ({changeType}: Props) => {
  return (
    <>
      <div className={styles.imgWrapper}>
        <img src={Bg} alt="bg"/>
      </div>
      <CommunicationControls
        type={COMMUNICATION_TYPE.VOICE}
        changeType={changeType}
      />
    </>
  )
}
