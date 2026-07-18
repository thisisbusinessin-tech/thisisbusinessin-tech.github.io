"use client";

import { useId, useState } from "react";

interface FaqAccordionItemProps {
  question: string;
  answer: string;
  note?: string;
}

export function FaqAccordionItem({ question, answer, note }: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  const toggle = () => setOpen((current) => !current);

  return (
    <article
      className={`faq-card ${open ? "is-open" : ""}`}
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("button, a")) return;
        toggle();
      }}
    >
      <button
        type="button"
        className="faq-summary"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={(event) => {
          event.stopPropagation();
          toggle();
        }}
      >
        <span className="faq-question">{question}</span>
        <span className="faq-arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 8l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div id={contentId} className="faq-answer-wrap" aria-hidden={!open}>
        <div className="faq-answer-inner">
          <p className="faq-answer">{answer}</p>
          {note ? <p className="faq-note">{note}</p> : null}
        </div>
      </div>
    </article>
  );
}
