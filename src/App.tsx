import {ChatCommunication} from "./components/communication-screen/chat-communication";
import {CallCommunication} from "./components/communication-screen/call-communication";
import {useCommunicationControls} from "./hooks/communication-controls.ts";
import {COMMUNICATION_TYPE} from "./utils/constants.ts";
import './App.css'
import {VoiceCommunication} from "./components/communication-screen/voice-communication";

function App() {
  const {type, changeType} = useCommunicationControls()

  return (
    <div className={'app'}>
      <div className={'wrapper'}>
        {type === COMMUNICATION_TYPE.TEXT && (<ChatCommunication changeType={changeType} />)}
        {type === COMMUNICATION_TYPE.CALL && (<CallCommunication changeType={changeType} />)}
        {type === COMMUNICATION_TYPE.VOICE && (<VoiceCommunication changeType={changeType} />)}
      </div>
    </div>
  )
}

export default App
