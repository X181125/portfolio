"use client";

import { AlertCircle, CheckCircle2, Clipboard, Github, Linkedin, Loader2, Mail, X } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { CopyEmailButton } from "./CopyEmailButton";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "195abc19-1067-4a62-8320-e5357c63275e";
const INPUT_CLASS = "block w-full rounded-lg border border-[#c9d1c7] bg-white px-4 py-3 font-normal text-[#151b16] placeholder:text-[#59645a]";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { hero } = PORTFOLIO_DATA;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const confirmationRef = useRef<HTMLHeadingElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  useEffect(() => {
    if (submissionState === "success" && dialogRef.current?.open) {
      confirmationRef.current?.focus();
    }
  }, [submissionState]);

  const handleClose = () => {
    if (submissionState === "success") setSubmissionState("idle");
    triggerRef.current?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionState === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = String(formData.get("subject") ?? "").trim();

    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("to_email", hero.email);
    formData.set("subject", subject || "New message from Nguyen Dinh Hung portfolio");
    setSubmissionState("sending");

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

  const sending = submissionState === "sending";
  const emailUrl = `mailto:${hero.email}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="anchor-target pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="site-container">
        <div className="rounded-3xl bg-[#151b16] px-6 py-9 text-[#f7f8f3] sm:px-10 sm:py-12 lg:px-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="eyebrow !text-[#dbf578]">Contact</p>
              <h2 id="contact-heading" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                Let&apos;s get in touch
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c4cec4]">
                Reach out to discuss opportunities and collaborations in software engineering, AI, or security.
              </p>
            </div>
            <button ref={triggerRef} type="button" onClick={() => dialogRef.current?.showModal()} className="button button-primary self-start md:shrink-0 md:self-end">
              <Mail size={18} aria-hidden="true" />
              Send a message
            </button>
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-[#354134] pt-5">
            <div className="flex min-w-0 items-center gap-2">
              <a href={emailUrl} className="min-w-0 break-all text-sm font-medium text-[#f7f8f3] underline-offset-4 hover:underline sm:text-base">
                {hero.email}
              </a>
              <CopyEmailButton email={hero.email} className="grid size-10 shrink-0 place-items-center rounded-lg text-[#c4cec4] transition hover:bg-[#29352a] hover:text-[#dbf578]">
                <Clipboard size={16} aria-hidden="true" />
              </CopyEmailButton>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href={hero.github} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-[#c4cec4] transition hover:text-[#dbf578]">
                <Github size={17} aria-hidden="true" />
                GitHub
              </a>
              <a href={hero.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-[#c4cec4] transition hover:text-[#dbf578]">
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[calc(100dvh_-_2rem)] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto rounded-2xl border border-[#c9d1c7] bg-[#f7f8f3] p-0 text-[#151b16] shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-5 sm:p-7">
          <button
            type="button"
            aria-label="Close contact form"
            onClick={() => dialogRef.current?.close()}
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-lg text-[#435147] transition hover:bg-[#e9ede5] hover:text-[#151b16]"
          >
            <X size={19} aria-hidden="true" />
          </button>
          <h2 id="contact-dialog-title" className="pr-12 text-2xl font-semibold tracking-tight">Send a message</h2>

          {submissionState === "success" ? (
            <div className="py-7">
              <CheckCircle2 size={28} className="text-[#367039]" aria-hidden="true" />
              <h3 ref={confirmationRef} tabIndex={-1} className="mt-4 text-lg font-semibold">Message sent</h3>
              <p className="mt-2 text-[#435147]">Thanks for reaching out.</p>
              <button type="button" onClick={() => dialogRef.current?.close()} className="button button-secondary mt-6">Done</button>
            </div>
          ) : (
            <>
              <p className="mt-2 text-sm text-[#435147]">
                You can also <a href={emailUrl} className="font-semibold underline underline-offset-2">email me directly</a>.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input type="hidden" name="botcheck" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-2 text-sm font-semibold">
                    <span>Name</span>
                    <input type="text" name="name" autoComplete="name" required className={INPUT_CLASS} />
                  </label>
                  <label className="block space-y-2 text-sm font-semibold">
                    <span>Email</span>
                    <input type="email" name="email" autoComplete="email" required className={INPUT_CLASS} />
                  </label>
                </div>
                <label className="block space-y-2 text-sm font-semibold">
                  <span>Subject</span>
                  <input type="text" name="subject" className={INPUT_CLASS} />
                </label>
                <label className="block space-y-2 text-sm font-semibold">
                  <span>Message</span>
                  <textarea name="message" required rows={4} className={`${INPUT_CLASS} resize-y`} />
                </label>
                {submissionState === "error" ? (
                  <p role="alert" className="flex items-start gap-2 text-sm font-semibold text-[#9a2421]">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    Your message could not be sent. Try again or email me directly.
                  </p>
                ) : null}
                <p role="status" className="sr-only">{sending ? "Sending message" : ""}</p>
                <button type="submit" disabled={sending} className="button button-primary w-full disabled:cursor-wait disabled:opacity-70">
                  {sending ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Mail size={18} aria-hidden="true" />}
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
            </>
          )}
        </div>
      </dialog>
    </section>
  );
}
