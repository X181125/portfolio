"use client";

import { AlertCircle, Check, Clipboard } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type CopyStatus = "copied" | "failed";

async function writeToClipboard(email: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
      return true;
    }
  } catch {
    // The fallback also works in browsers that deny the Clipboard API.
  }

  const previousFocus = document.activeElement;
  const input = document.createElement("textarea");
  input.value = email;
  input.readOnly = true;
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);

  try {
    input.select();
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    input.remove();
    if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
  }
}

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus | null>(null);

  useEffect(() => {
    if (!status) return;

    const timeoutId = window.setTimeout(() => setStatus(null), 2500);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const message = status === "copied" ? "Email address copied" : "Could not copy the email address";

  async function handleCopy() {
    const copied = await writeToClipboard(email);
    setStatus(copied ? "copied" : "failed");
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="icon-button"
      >
        <Clipboard size={16} aria-hidden="true" />
      </button>
      <span role="status" className="sr-only">{status ? message : ""}</span>
      {status ? createPortal(
        <div aria-hidden="true" className="copy-feedback">
          {status === "copied"
            ? <Check size={16} />
            : <AlertCircle size={16} />}
          {message}
        </div>,
        document.body,
      ) : null}
    </>
  );
}
