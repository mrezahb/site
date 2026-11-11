"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const starterQuestions = [
  "How did I grow Hamfekr?",
  "What did I achieve at Neshan?",
  "What kind of roles am I looking for?",
];

export default function DigitalTwinChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    latestMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || text.length > 1_000 || isLoading) return;

    const nextMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const result: unknown = await response.json();
      const answer =
        result &&
        typeof result === "object" &&
        "answer" in result &&
        typeof result.answer === "string"
          ? result.answer
          : "";

      if (!response.ok || !answer) {
        const message =
          result &&
          typeof result === "object" &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "I couldn’t get a reply. Please try again.";
        throw new Error(message);
      }

      setMessages([...nextMessages, { role: "assistant", content: answer }]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <>
      <section className="digital-twin section-space" id="digital-twin">
        <div className="section-shell">
          <div className="section-marker">
            <span>05</span> / ASK MY DIGITAL TWIN
          </div>
          <div className="twin-heading">
            <div>
              <p className="section-overline">A CONVERSATION WITH MY CAREER</p>
              <h2>
                Curious about
                <br />
                <span>the work?</span>
              </h2>
            </div>
            <p>
              Ask my AI digital twin about the programs I&apos;ve built, the teams
              I&apos;ve led, or where I hope to go next.
            </p>
          </div>

          <div className="twin-card">
            <div className="twin-card-header">
              <div className="twin-avatar" aria-hidden="true">
                MH<span>.</span>
              </div>
              <div className="twin-identity">
                <strong>Mohammadreza&apos;s digital twin</strong>
                <span><i /> AI career assistant</span>
              </div>
              <span className="twin-powered">POWERED BY OPENROUTER</span>
            </div>

            <div className="twin-messages" role="log" aria-live="polite" aria-relevant="additions">
              {messages.length === 0 ? (
                <div className="twin-welcome">
                  <span className="twin-welcome-mark" aria-hidden="true">✳</span>
                  <h3>Hi, I&apos;m Mohammadreza&apos;s digital twin.</h3>
                  <p>
                    I can share details about his career, projects, and experience.
                    What would you like to know?
                  </p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    className={`twin-message twin-message-${message.role}`}
                    key={`${index}-${message.role}`}
                  >
                    {message.content}
                  </div>
                ))
              )}
              {isLoading && (
                <div className="twin-message twin-message-assistant" role="status">
                  <span className="twin-typing"><i /><i /><i /></span>
                  Thinking…
                </div>
              )}
              <div ref={latestMessageRef} />
            </div>

            {messages.length === 0 && (
              <div className="twin-starters" aria-label="Suggested questions">
                {starterQuestions.map((question) => (
                  <button
                    className="twin-starter"
                    disabled={isLoading}
                    key={question}
                    onClick={() => void ask(question)}
                    type="button"
                  >
                    {question} <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            )}

            {error && <p className="twin-error" role="alert">{error}</p>}

            <form className="twin-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="twin-question">Ask about my career</label>
              <input
                autoComplete="off"
                id="twin-question"
                maxLength={1_000}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question about my career…"
                value={input}
              />
              <button
                aria-label={isLoading ? "Waiting for a reply" : "Send message"}
                className="twin-send"
                disabled={isLoading || !input.trim()}
                type="submit"
              >
                {isLoading ? "…" : "Send"}
                <span aria-hidden="true">↗</span>
              </button>
            </form>
            <p className="twin-disclaimer">
              AI-generated answers based on my career profile. For anything else, let&apos;s connect directly.
            </p>
          </div>
        </div>
      </section>

      <a
        aria-label="Chat with my AI digital twin"
        className="twin-float"
        href="#digital-twin"
        title="Chat with my AI digital twin"
      >
        <span className="twin-float-orbit" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.8-3.1A7.5 7.5 0 1 1 20 11.5Z" />
            <path d="m15.4 6.4.7-1.6.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7Z" />
          </svg>
        </span>
        <span className="twin-float-label">Ask my AI twin</span>
        <span className="twin-float-arrow" aria-hidden="true">↗</span>
      </a>
    </>
  );
}
