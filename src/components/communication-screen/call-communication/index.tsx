import {useSpeech} from "../../../hooks/speech-to-speech.ts";
import {useEffect, useState} from "react";
import {CommunicationControls} from "../../communication-controls";
import {COMMUNICATION_TYPE} from "../../../utils/constants.ts";
import Bg from '../../../assets/call-bg.png'
import styles from './index.module.css'

type Props = {
  changeType: (v: COMMUNICATION_TYPE) => void
}

export const CallCommunication = ({changeType}: Props) => {
  const {status, startSession, endSession} = useSpeech();
  const [id, setId] = useState('');

  const handleCall = () => {
    return startSession().then(setId);
  }

  useEffect(() => {
    if (status === "disconnected" && id) {
      setTimeout(() => {
        fetch(`https://api.elevenlabs.io/v1/convai/conversations/${id}`, {
          headers: {
            'xi-api-key': import.meta.env.VITE_ELEVEN_LABS_API_KEY
          }
        }).then(async (value) => {
          console.log('value', await value.json())
        })
      }, 500)
    }
  }, [status, id]);

  useEffect(() => {
    const startAudio = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true })
      } catch (err) {
        console.error('Ошибка доступа к микрофону', err)
      }
    }

    startAudio()
  }, [])

  return (
    <>
      <div className={styles.imgWrapper}>
        <img src={Bg} alt="bg"/>
      </div>
      <CommunicationControls
        type={COMMUNICATION_TYPE.CALL}
        changeType={changeType}
        statusCall={status}
        startCall={handleCall}
        endCall={endSession}
      />
    </>
  )
}
