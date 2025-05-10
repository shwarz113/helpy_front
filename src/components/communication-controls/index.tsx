import {COMMUNICATION_TYPE, communicationTypeList, communicationTypeTitle} from "../../utils/constants";
import {TextForm} from "./text-form";
import {CallForm} from "./call-form";
import {VoiceForm} from "./voice-form";
import {CommunicationProps} from "./types";
import styles from './index.module.css'
import {cls} from "../../utils/classnames.ts";

export const CommunicationControls = ({type, changeType, sendVoiceMessage, sendTextMessage,  startCall, endCall, statusCall}: CommunicationProps) => {
  return (
    <div>
      <div className={styles.tabs}>
        {communicationTypeList.map((value) => (
          <div
            key={value}
            onClick={() => changeType(value)}
            className={cls(styles.tab, value === type && styles.active)}
          >
            {communicationTypeTitle[value]}
          </div>
        ))}
      </div>
      {type === COMMUNICATION_TYPE.TEXT && (<TextForm sendMessage={sendTextMessage} />)}
      {type === COMMUNICATION_TYPE.VOICE && (<VoiceForm sendMessage={sendVoiceMessage} />)}
      {type === COMMUNICATION_TYPE.CALL && (<CallForm start={startCall} end={endCall} status={statusCall} />)}
    </div>
  )
}
