"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, RotateCcw, MessageCircle } from "lucide-react";
import styles from "./ChatWidget.module.css";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content: "Hi! I'm Hargurjeet's AI assistant. Select a question or type your own below.",
};

const SUGGESTED_QUESTIONS = [
  "What is Hargurjeet's current role and experience?",
  "What are his key GenAI and LLM skills?",
  "Tell me about his most impactful AI projects.",
  "Is he open to new opportunities?",
  "What cloud and MLOps tools does he use?",
  "What is his educational background?",
];

export default function ChatWidget() {
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
              <span className={styles.titleText}>
                Ask Hargurjeet&apos;s AI
              </span>
            </div>
            <div className={styles.headerActions}>
              {hasStarted && (
                <button
                  onClick={clearChat}
                  title="New conversation"
                  className={styles.headerButton}
                >
                  <RotateCcw size={13} />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className={styles.headerButton}
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* ── QUESTION LIST (shown before any message is sent) ── */}
          {!hasStarted && (
            <div className={styles.greetingContainer}>
              <p className={styles.greetingText}>
                👋 Hi! Select a question or type your own below.
              </p>
              <ul className={styles.suggestionsList}>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <li key={q} className={styles.suggestionListItem}>
                    <button
                      onClick={() => selectQuestion(q)}
                      className={styles.suggestionButton}
                    >
                      → {q}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── CHAT MESSAGES (shown after first message) ── */}
          {hasStarted && (
            <div className={styles.messagesContainer}>
              {messages.map((msg, i) => (
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
                      (isLoading && i === messages.length - 1 ? (
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

          {/* ── INPUT FORM ── */}
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
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={styles.sendButton}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
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
