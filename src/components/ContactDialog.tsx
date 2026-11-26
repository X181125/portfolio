"use client";

import { AlertCircle, CheckCircle2, Loader2, Mail, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "195abc19-1067-4a62-8320-e5357c63275e";

type SubmissionState = "idle" | "sending" | "success" | "error";

type ContactDialogProps = {
  email: string;
  name: string;
};

export function ContactDialog({ email, name }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const confirmationRef = useRef<HTMLHeadingElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  useEffect(() => {
    if (submissionState === "success" && dialogRef.current?.open) {
      confirmationRef.current?.focus();
    }
  }, [submissionState]);

  const closeDialog = () => dialogRef.current?.close();

  const handleClose = () => {
    if (submissionState === "success") {
      setSubmissionState("idle");
    }
    triggerRef.current?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionState === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = String(formData.get("subject") ?? "").trim();

    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("to_email", email);
    formData.set("subject", subject || `New message from ${name} portfolio`);
    setSubmissionState("sending");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result: { success?: boolean } | null = await response.json();
      const succeeded = response.ok && result?.success === true;

      if (succeeded) {
        form.reset();
      }
      setSubmissionState(succeeded ? "success" : "error");
    } catch {
      setSubmissionState("error");
    }
  };

  const sending = submissionState === "sending";
  const SubmitIcon = sending ? Loader2 : Mail;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="button button-primary"
      >
        <Mail size={18} aria-hidden="true" />
        Send a message
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        className="contact-dialog"
      >
        <div className="relative p-5 sm:p-7">
          <button
            type="button"
            aria-label="Close contact form"
            onClick={closeDialog}
            className="icon-button absolute right-3 top-3"
          >
            <X size={19} aria-hidden="true" />
          </button>
          <h2 id="contact-dialog-title" className="pr-12 text-2xl font-semibold tracking-tight">
            Send a message
          </h2>

          {submissionState === "success" ? (
            <div className="py-7">
              <CheckCircle2 size={28} aria-hidden="true" />
              <h3 ref={confirmationRef} tabIndex={-1} className="mt-4 text-lg font-semibold">
                Message sent
              </h3>
              <p className="mt-2">Thanks for reaching out.</p>
              <button type="button" onClick={closeDialog} className="button button-secondary mt-6">
                Done
              </button>
            </div>
          ) : (
            <>
              <p className="mt-2 text-sm">
                You can also <a href={`mailto:${email}`} className="font-semibold underline underline-offset-2">email me directly</a>.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input type="hidden" name="botcheck" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-2 text-sm font-semibold">
                    <span>Name</span>
                    <input type="text" name="name" autoComplete="name" required />
                  </label>
                  <label className="block space-y-2 text-sm font-semibold">
                    <span>Email</span>
                    <input type="email" name="email" autoComplete="email" required />
                  </label>
                </div>
                <label className="block space-y-2 text-sm font-semibold">
                  <span>Subject</span>
                  <input type="text" name="subject" />
                </label>
                <label className="block space-y-2 text-sm font-semibold">
                  <span>Message</span>
                  <textarea name="message" required rows={4} className="resize-y" />
                </label>
                {submissionState === "error" ? (
                  <p role="alert" className="flex items-start gap-2 text-sm font-semibold text-[#9a2421]">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    Your message could not be sent. Try again or email me directly.
                  </p>
                ) : null}
                <p role="status" className="sr-only">{sending ? "Sending message" : ""}</p>
                <button type="submit" disabled={sending} className="button button-primary w-full disabled:cursor-wait disabled:opacity-70">
                  <SubmitIcon size={18} className={sending ? "animate-spin" : undefined} aria-hidden="true" />
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
