import {COMMUNICATION_TYPE} from "../../utils/constants.ts";
import {Status} from "@11labs/react";

type CommonProps = {
  changeType: (type: COMMUNICATION_TYPE) => void
}

type VoiceProps = {
  type: COMMUNICATION_TYPE.VOICE
  sendVoiceMessage: () => Promise<void>
}

type TextProps = {
  type: COMMUNICATION_TYPE.TEXT
  sendTextMessage: (text: string) => Promise<void>
}

type CallProps = {
  type: COMMUNICATION_TYPE.CALL
  statusCall: Status
  startCall: () => Promise<void>
  endCall: () => Promise<void>
}

export type CommunicationProps = CommonProps & (VoiceProps | TextProps | CallProps)
