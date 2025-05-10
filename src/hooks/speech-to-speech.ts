import {useConversation} from "@11labs/react";

await navigator.mediaDevices.getUserMedia({ audio: true });

export const useSpeech = () => {
  const {startSession, status, endSession, isSpeaking} = useConversation({
    agentId: '0EAVI2pWVh1NyMXLODy7',
    dynamicVariables: {
      user_summary: 'New user. Ask they about their problem.'
    }
  });

  return {startSession, status, endSession, isSpeaking}
}


// You should store call history transcription by using "n8n" tool. Your role is to listen to the user's question and use "n8n" tool to query the project database. After receiving the response from "n8n", provide the user with an answer based on the retrieved data
