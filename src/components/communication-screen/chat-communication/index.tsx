import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {openaiService} from "../../../service";
import {MessageItem} from "./message";
import {CommunicationControls} from "../../communication-controls";
import {COMMUNICATION_TYPE} from "../../../utils/constants.ts";
import styles from './index.module.css'
import Bg from "../../../assets/text-bg.png";

const LOCAL_STORAGE_KEY = "chat_messages";

type Props = {
  changeType: (v: COMMUNICATION_TYPE) => void
}

export function ChatCommunication({changeType}: Props) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [{ role: "system", content: "Ты опытный психолог с 30 летним стажем" }];
  });
  const messagesEndRef = useRef(null);

  const sendMessage = useCallback(async (input: string) => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }, { role: "assistant", content: "" }];
    setMessages(newMessages);

    const stream = await openaiService.chat.completions.create({
      model: "gpt-4o-mini",
      messages: newMessages.slice(0, -1),
      stream: true,
    });

    let str = '';

    for await (const part of stream) {
      str += part.choices[0]?.delta?.content || '';
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1].content = str;
        return updated;
      })
    }
  }, [messages]);

  const filtered = useMemo(() => {
    return messages.filter((m) => m.role !== "system")
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  return (
    <>
      {filtered.length ? (
        <div className={styles.list}>
          {filtered.map((msg, i) => (
            <MessageItem key={i} message={msg}/>
          ))}
          <div ref={messagesEndRef}/>
        </div>
      ): (
        <div className={styles.imgWrapper}>
          <img src={Bg} alt="bg"/>
        </div>
      )}

      <CommunicationControls
        type={COMMUNICATION_TYPE.TEXT}
        changeType={changeType}
        sendTextMessage={sendMessage}
      />
    </>
  );
}
