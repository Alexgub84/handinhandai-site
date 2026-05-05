import { useState, useEffect } from "react";
import { WhatsAppChat, type Message } from "@alexgub84/whatsapp-chat-mock";

type Props = {
  messages: Message[];
  headerName: string;
  avatarUrl?: string;
  scale?: number;
  /** Override total loop duration in ms. Defaults to sum of message delays + 4s buffer. */
  loopDelayMs?: number;
};

function estimateDuration(messages: Message[]): number {
  return messages.reduce((sum, m) => sum + (m.delayBeforeMs ?? 800), 0) + 4000;
}

export default function WhatsAppMock({
  messages,
  headerName,
  avatarUrl,
  scale = 0.82,
  loopDelayMs,
}: Props) {
  const [instanceKey, setInstanceKey] = useState(0);
  const duration = loopDelayMs ?? estimateDuration(messages);

  useEffect(() => {
    const timer = setInterval(() => setInstanceKey((k) => k + 1), duration);
    return () => clearInterval(timer);
  }, [duration]);

  return (
    <WhatsAppChat
      key={instanceKey}
      header={{ name: headerName, avatarUrl, subtitle: "מחובר" }}
      messages={messages}
      direction="rtl"
      autoplay={true}
      showControls={false}
      syncStatusBarFromMessages={true}
      showStatusBar={true}
      showInputBar={true}
      scale={scale}
    />
  );
}
