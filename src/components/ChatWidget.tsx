"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, RotateCcw, MessageCircle } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm Hargurjeet's AI assistant. Ask me anything about his experience, skills, or projects — I'm here to help.",
};

const SUGGESTIONS = [
  "What AWS services have you worked with?",
  "Tell me about your RAG projects",
  "Are you open to new roles?",
  "What LLM frameworks do you know?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

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
          content: "Sorry, I encountered an error. Please try again.",
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
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-3 w-[calc(100vw-2.5rem)] sm:w-[420px]">
      {/* Chat panel */}
      {isOpen && (
        <div
          className="w-full flex flex-col overflow-hidden"
          style={{
            background: "#fff8f6",
            border: "2.5px solid #251913",
            boxShadow: "5px 5px 0 #251913",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "#251913" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </div>
              <span
                className="font-black text-sm uppercase tracking-widest"
                style={{ color: "#fff8f6" }}
              >
                Ask about Hargurjeet
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={clearChat}
                title="Clear chat"
                className="transition-opacity hover:opacity-70 cursor-pointer"
                style={{ color: "#fff8f6" }}
              >
                <RotateCcw size={13} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="transition-opacity hover:opacity-70 cursor-pointer"
                style={{ color: "#fff8f6" }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[220px] max-h-[320px] sm:min-h-[280px] sm:max-h-[380px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed"
                  style={
                    msg.role === "user"
                      ? {
                          background: "#f97316",
                          color: "#fff8f6",
                          border: "2px solid #251913",
                          boxShadow: "2px 2px 0 #251913",
                          fontWeight: 600,
                        }
                      : {
                          background: "#fff8f6",
                          color: "#251913",
                          border: "2px solid #251913",
                          boxShadow: "2px 2px 0 #251913",
                        }
                  }
                >
                  {msg.content ||
                    (isLoading && i === messages.length - 1 ? (
                      <span className="flex gap-1 py-0.5">
                        <span
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </span>
                    ) : (
                      ""
                    ))}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion chips */}
          <div
            className="px-4 py-2.5 flex flex-wrap gap-1.5"
            style={{ borderTop: "2px solid #251913", background: "#f5ede8" }}
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                disabled={isLoading}
                className="text-xs px-2.5 py-1 font-semibold uppercase tracking-wide transition-all disabled:opacity-40 cursor-pointer hover:opacity-80"
                style={{
                  border: "1.5px solid #251913",
                  background: "#fff8f6",
                  color: "#251913",
                  boxShadow: "1.5px 1.5px 0 #251913",
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="p-3"
            style={{ borderTop: "2px solid #251913", background: "#fff8f6" }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, experience..."
                disabled={isLoading}
                className="flex-1 text-sm px-3 py-2 focus:outline-none disabled:opacity-50"
                style={{
                  background: "#fff8f6",
                  border: "2px solid #251913",
                  color: "#251913",
                }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-3 py-2 font-black transition-all disabled:opacity-40 cursor-pointer hover:opacity-80"
                style={{
                  background: "#f97316",
                  border: "2px solid #251913",
                  boxShadow: "2px 2px 0 #251913",
                  color: "#fff8f6",
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating button */}
      {isOpen ? (
        <button
          onClick={() => setIsOpen(false)}
          className="w-14 h-14 flex items-center justify-center font-black transition-all hover:opacity-80 cursor-pointer self-end shrink-0"
          style={{
            background: "#251913",
            border: "2.5px solid #251913",
            boxShadow: "3px 3px 0 #f97316",
            color: "#fff8f6",
          }}
          aria-label="Close chat"
        >
          <X size={22} />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-5 h-14 font-black uppercase tracking-wide text-sm transition-all hover:opacity-90 cursor-pointer self-end shrink-0"
          style={{
            background: "#251913",
            border: "2.5px solid #251913",
            boxShadow: "4px 4px 0 #f97316",
            color: "#fff8f6",
          }}
          aria-label="Open AI chat assistant"
        >
          <MessageCircle size={18} className="shrink-0 animate-pulse" />
          <span>Chat with me!</span>
        </button>
      )}
    </div>
  );
}
