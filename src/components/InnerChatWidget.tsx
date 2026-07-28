"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { X, Send, RotateCcw, MessageCircle, Phone, PhoneOff, Mic, MicOff } from "lucide-react";
import { VocalBridgeProvider, useVocalBridge, useTranscript } from "@vocalbridgeai/react";
import styles from "./ChatWidget.module.css";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content: "Hi! I'm Hargurjeet's AI assistant. Select a question, type your own, or click the 📞 button to start a voice call.",
};

const SUGGESTED_QUESTIONS = [
  "What is Hargurjeet's current role and experience?",
  "What are his key GenAI and LLM skills?",
  "Tell me about his most impactful AI projects.",
  "Is he open to new opportunities?",
  "What cloud and MLOps tools does he use?",
  "What is his educational background?",
];

function InnerChatWidgetContent({
  isOpen,
  setIsOpen,
  hasStarted,
  setHasStarted,
  messages,
  setMessages,
  input,
  setInput,
  isLoading,
  setIsLoading,
  bottomRef,
  inputRef,
  selectQuestion,
  sendMessage,
  clearChat,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  hasStarted: boolean;
  setHasStarted: (val: boolean) => void;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  input: string;
  setInput: (val: string) => void;
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
  bottomRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  selectQuestion: (q: string) => void;
  sendMessage: () => void;
  clearChat: () => void;
}) {
  const { state, connect, disconnect, isMicrophoneEnabled, toggleMicrophone, error } = useVocalBridge();
  const { transcript: voiceTranscript } = useTranscript();

  const isVoiceActive = state !== "disconnected";
  const prevVoiceTranscriptRef = useRef(voiceTranscript);

  // Keep track of voice transcript changes
  useEffect(() => {
    prevVoiceTranscriptRef.current = voiceTranscript;
  }, [voiceTranscript]);

  // Push accumulated voice transcript to persistent messages when call ends
  useEffect(() => {
    if (state === "disconnected" && prevVoiceTranscriptRef.current && prevVoiceTranscriptRef.current.length > 0) {
      const mapped = prevVoiceTranscriptRef.current.map((t) => ({
        role: t.role === "user" ? ("user" as const) : ("assistant" as const),
        content: t.text,
      }));
      setMessages((prev) => [...prev, ...mapped]);
      setHasStarted(true);
    }
  }, [state, setMessages, setHasStarted]);

  // Combine text messages and active voice transcript in real-time
  const displayMessages = useMemo(() => {
    if (!isVoiceActive) return messages;
    const mappedVoice = (voiceTranscript || []).map((t) => ({
      role: t.role === "user" ? ("user" as const) : ("assistant" as const),
      content: t.text,
    }));
    return [...messages, ...mappedVoice];
  }, [messages, voiceTranscript, isVoiceActive]);

  async function handleVoiceToggle() {
    try {
      if (isVoiceActive) {
        await disconnect();
      } else {
        setHasStarted(true);
        await connect();
      }
    } catch (err) {
      console.error("Vocal Bridge connection error:", err);
    }
  }

  return (
    <div className={styles.container}>
      {/* ── CHAT PANEL ── */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <div className={styles.onlineIndicator}>
                <span className={styles.onlinePing} />
                <span className={styles.onlineDot} />
              </div>
              <span className={styles.titleText}>Ask Hargurjeet&apos;s AI</span>
            </div>
            <div className={styles.headerActions}>
              {/* Voice toggle button */}
              <button
                onClick={handleVoiceToggle}
                title={isVoiceActive ? "End Voice Call" : "Start Voice Call"}
                className={`${styles.headerButton} ${isVoiceActive ? styles.voiceActive : ""}`}
              >
                {isVoiceActive ? <PhoneOff size={13} /> : <Phone size={13} />}
              </button>

              {hasStarted && (
                <button onClick={clearChat} title="New conversation" className={styles.headerButton}>
                  <RotateCcw size={13} />
                </button>
              )}
              <button onClick={() => setIsOpen(false)} title="Close chat" className={styles.headerButton}>
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-800 text-[10px] p-2 text-center border-b border-red-200">
              Voice Error: {error.message}
            </div>
          )}

          {/* ── QUESTION LIST (shown before any message is sent) ── */}
          {!hasStarted && (
            <div className={styles.greetingContainer}>
              <p className={styles.greetingText}>👋 Hi! Select a question or type your own below.</p>
              <ul className={styles.suggestionsList}>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <li key={q} className={styles.suggestionListItem}>
                    <button onClick={() => selectQuestion(q)} className={styles.suggestionButton}>
                      → {q}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── CHAT MESSAGES ── */}
          {hasStarted && (
            <div className={styles.messagesContainer}>
              {displayMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`${styles.messageRow} ${
                    msg.role === "user" ? styles.rowUser : styles.rowAssistant
                  }`}
                >
                  <div
                    className={`${styles.messageBubble} ${
                      msg.role === "user" ? styles.bubbleUser : styles.bubbleAssistant
                    }`}
                  >
                    {msg.content ||
                      (isLoading && i === displayMessages.length - 1 ? (
                        <span className={styles.loadingDots}>
                          <span className={styles.loadingDot} />
                          <span className={styles.loadingDot} />
                          <span className={styles.loadingDot} />
                        </span>
                      ) : (
                        ""
                      ))}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          )}

          {/* ── INPUT / VOICE CONTROLS ── */}
          {isVoiceActive ? (
            <div className={styles.voiceControlPanel}>
              <div className={styles.voiceStatus}>
                <div className={styles.pulseIndicator}>
                  <span className={styles.pulsePing} />
                  <span className={styles.pulseDot} />
                </div>
                <span className={styles.voiceStatusText}>
                  {state === "connecting" && "CONNECTING..."}
                  {state === "waiting_for_agent" && "WAITING FOR AGENT..."}
                  {state === "connected" && (isMicrophoneEnabled ? "LISTENING..." : "MUTED")}
                </span>
              </div>
              <div className={styles.voiceActions}>
                {state === "connected" && (
                  <button
                    onClick={toggleMicrophone}
                    className={`${styles.voiceButton} ${!isMicrophoneEnabled ? styles.muted : ""}`}
                    title={isMicrophoneEnabled ? "Mute Microphone" : "Unmute Microphone"}
                  >
                    {isMicrophoneEnabled ? <Mic size={13} /> : <MicOff size={13} />}
                  </button>
                )}
                <button
                  onClick={disconnect}
                  className={`${styles.voiceButton} ${styles.endCall}`}
                  title="End Voice Call"
                >
                  <PhoneOff size={13} />
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.inputContainer}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className={styles.inputForm}
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about experience, skills..."
                  disabled={isLoading}
                  className={styles.inputField}
                />
                <button type="submit" disabled={isLoading || !input.trim()} className={styles.sendButton}>
                  <Send size={15} />
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* ── FLOATING TOGGLE BUTTON ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.toggleButton} ${
          isOpen ? styles.toggleButtonOpen : styles.toggleButtonClosed
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <MessageCircle size={20} />
            <span className={styles.toggleText}>Chat with me</span>
          </>
        )}
      </button>
    </div>
  );
}

export default function InnerChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hasStarted) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, hasStarted]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  function selectQuestion(q: string) {
    setInput(q);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  async function sendMessage() {
    if (!input.trim() || isLoading) return;
    const text = input.trim();
    if (!hasStarted) setHasStarted(true);

    const history = messages
      .slice(1)
      .map((m) => ({ role: m.role, content: m.content }));

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
      { role: "assistant", content: "" },
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, chatHistory: history }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: "Sorry, something went wrong. Please try again.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  }

  function clearChat() {
    setMessages([GREETING]);
    setInput("");
    setHasStarted(false);
  }

  return (
    <VocalBridgeProvider options={{ auth: { tokenUrl: "/api/voice-token" } }}>
      <InnerChatWidgetContent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hasStarted={hasStarted}
        setHasStarted={setHasStarted}
        messages={messages}
        setMessages={setMessages}
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        bottomRef={bottomRef}
        inputRef={inputRef}
        selectQuestion={selectQuestion}
        sendMessage={sendMessage}
        clearChat={clearChat}
      />
    </VocalBridgeProvider>
  );
}
