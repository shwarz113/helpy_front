import {useCallback, useState} from "react";
import {COMMUNICATION_TYPE} from "../utils/constants.ts";

const lsKey = 'ct';

export const useCommunicationControls = () => {
  const [type, setType] = useState<COMMUNICATION_TYPE>(() => {
    const savedType = localStorage.getItem(lsKey);
    return savedType && COMMUNICATION_TYPE[savedType] ? (savedType as COMMUNICATION_TYPE): COMMUNICATION_TYPE.TEXT
  });

  const changeType = useCallback((newType: COMMUNICATION_TYPE) => {
    setType(newType);
    localStorage.setItem(lsKey, newType)
  }, [])

  return {
    type,
    changeType
  }
}
