"use client";

import { FormEvent, useEffect, useState } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Github, Linkedin, Loader2, Mail, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { CopyEmailButton } from "./CopyEmailButton";
import { Reveal } from "./Reveal";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "195abc19-1067-4a62-8320-e5357c63275e";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { hero } = PORTFOLIO_DATA;
  const [isOpen, setIsOpen] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const openContactForm = () => {
    setSubmissionState("idle");
    setIsOpen(true);
  };

  const closeContactForm = () => {
    if (submissionState !== "sending") setIsOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionState("sending");

    const formData = new FormData(form);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("to_email", hero.email);
    formData.set("subject", "New message from Nguyen Dinh Hung portfolio");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) throw new Error("Unable to send message");

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <>
      <section id="contact" className="anchor-target px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-acid/40 bg-[linear-gradient(135deg,rgba(138,203,47,0.18),rgba(255,255,255,0.98)_42%,rgba(225,242,234,0.94))] p-7 sm:p-10 lg:p-14">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="mb-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-acid">06 / Open channel</p>
                <h2 className="text-3xl font-semibold tracking-[-0.05em] text-ink-50 sm:text-5xl">Have a hard problem?</h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-ink-300 sm:text-base">
                  Tell me what you&apos;re building, what could go wrong, and where you want to take it. I&apos;d love to help make the system stronger.
                </p>
              </div>
              <button type="button" onClick={openContactForm} className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#8bd438] px-5 py-3.5 text-sm font-semibold text-ink-50 transition hover:bg-[#a8e34a] md:self-auto">
                Start a conversation
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
            <div className="mt-10 flex flex-col justify-between gap-5 border-t border-ink-700 pt-5 sm:flex-row sm:items-center">
              <CopyEmailButton email={hero.email} className="font-mono text-left text-xs text-ink-200 transition hover:text-acid" label="Copy email address">
                {hero.email}
              </CopyEmailButton>
              <div className="flex items-center gap-4">
                <a href={`https://${hero.github}`} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-ink-400 transition hover:text-acid"><Github size={17} /></a>
                <a href={hero.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-ink-400 transition hover:text-acid"><Linkedin size={17} /></a>
                <CopyEmailButton email={hero.email} className="text-ink-400 transition hover:text-acid" label="Copy email address"><Mail size={17} /></CopyEmailButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-ink-50/25 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && closeContactForm()}>
          <div role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" className="w-full max-w-lg overflow-hidden rounded-3xl border border-ink-700 bg-white shadow-[0_24px_90px_rgba(40,72,56,0.24)]">
            <div className="flex items-start justify-between border-b border-ink-700 px-6 py-5 sm:px-7">
              <div>
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-acid">Send a message</p>
                <h2 id="contact-dialog-title" className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink-50">Let&apos;s build something useful.</h2>
                <p className="mt-2 text-sm text-ink-300">Your message will be sent directly to {hero.email}.</p>
              </div>
              <button type="button" onClick={closeContactForm} aria-label="Close contact form" className="rounded-full border border-ink-700 p-2 text-ink-400 transition hover:border-acid hover:text-ink-50">
                <X size={17} />
              </button>
            </div>

            {submissionState === "success" ? (
              <div className="px-6 py-10 text-center sm:px-7">
                <CheckCircle2 size={38} className="mx-auto text-acid" />
                <h3 className="mt-5 text-xl font-semibold text-ink-50">Message sent.</h3>
                <p className="mt-2 text-sm leading-6 text-ink-300">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                <button type="button" onClick={closeContactForm} className="mt-7 rounded-full bg-[#8bd438] px-5 py-3 text-sm font-semibold text-ink-50 transition hover:bg-[#a8e34a]">Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-7">
                <input type="hidden" name="botcheck" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-semibold text-ink-100">
                    Name
                    <input name="name" type="text" required placeholder="Your name" className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 font-normal text-ink-50 outline-none transition placeholder:text-ink-400 focus:border-acid focus:ring-4 focus:ring-acid/10" />
                  </label>
                  <label className="space-y-2 text-sm font-semibold text-ink-100">
                    Email
                    <input name="email" type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 font-normal text-ink-50 outline-none transition placeholder:text-ink-400 focus:border-acid focus:ring-4 focus:ring-acid/10" />
                  </label>
                </div>
                <label className="block space-y-2 text-sm font-semibold text-ink-100">
                  Subject
                  <input name="subject_input" type="text" placeholder="What would you like to discuss?" className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 font-normal text-ink-50 outline-none transition placeholder:text-ink-400 focus:border-acid focus:ring-4 focus:ring-acid/10" />
                </label>
                <label className="block space-y-2 text-sm font-semibold text-ink-100">
                  Message
                  <textarea name="message" required rows={5} placeholder="Tell me a little about the project..." className="w-full resize-y rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 font-normal leading-6 text-ink-50 outline-none transition placeholder:text-ink-400 focus:border-acid focus:ring-4 focus:ring-acid/10" />
                </label>
                {submissionState === "error" ? (
                  <p role="alert" className="flex items-center gap-2 text-sm font-semibold text-red-700"><AlertCircle size={16} />Something went wrong. Please try again or email me directly.</p>
                ) : null}
                <button type="submit" disabled={submissionState === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8bd438] px-5 py-3.5 text-sm font-semibold text-ink-50 transition hover:bg-[#a8e34a] disabled:cursor-wait disabled:opacity-70">
                  {submissionState === "sending" ? <Loader2 size={17} className="animate-spin" /> : <Mail size={17} />}
                  {submissionState === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
