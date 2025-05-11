import {COMMUNICATION_TYPE, communicationTypeList, communicationTypeTitle} from "../../utils/constants";
import {TextForm} from "./text-form";
import {CallForm} from "./call-form";
import {VoiceForm} from "./voice-form";
import {CommunicationProps} from "./types";
import styles from './index.module.css'
import {cls} from "../../utils/classnames.ts";

export const CommunicationControls = (props: CommunicationProps) => {
  const { type, changeType } = props
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
      {type === COMMUNICATION_TYPE.TEXT && (<TextForm sendMessage={props.sendTextMessage} />)}
      {type === COMMUNICATION_TYPE.VOICE && (<VoiceForm />)}
      {type === COMMUNICATION_TYPE.CALL && (<CallForm start={props.startCall} end={props.endCall} status={props.statusCall} />)}
    </div>
  )
}
