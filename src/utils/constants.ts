export const CHAT_LOCAL_STORAGE = 'chat_messages'
export enum COMMUNICATION_TYPE {
  CALL = 'CALL',
  VOICE = 'VOICE',
  TEXT = 'TEXT'
}

export const communicationTypeList: COMMUNICATION_TYPE[] = [COMMUNICATION_TYPE.CALL, COMMUNICATION_TYPE.VOICE, COMMUNICATION_TYPE.TEXT]

export const communicationTypeTitle: Record<COMMUNICATION_TYPE, string> = {
  [COMMUNICATION_TYPE.CALL]: 'Без рук',
  [COMMUNICATION_TYPE.VOICE]: 'Голосовые',
  [COMMUNICATION_TYPE.TEXT]: 'Текст',
}
