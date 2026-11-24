"use client";

import { AlertCircle, Check } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type CopyEmailButtonProps = {
  email: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

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

export function CopyEmailButton({
  email,
  children,
  className,
  label = "Copy email address",
}: CopyEmailButtonProps) {
  const [status, setStatus] = useState<CopyStatus | null>(null);

  useEffect(() => {
    if (!status) return;

    const timeoutId = window.setTimeout(() => setStatus(null), 2500);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const message = status === "copied" ? "Email address copied" : "Could not copy the email address";

  return (
    <>
      <button
        type="button"
        onClick={async () => setStatus(await writeToClipboard(email) ? "copied" : "failed")}
        aria-label={label}
        className={className}
      >
        {children}
      </button>
      <span role="status" className="sr-only">{status ? message : ""}</span>
      {status ? createPortal(
        <div aria-hidden="true" className="pointer-events-none fixed bottom-6 left-1/2 z-[120] inline-flex w-max max-w-[90vw] -translate-x-1/2 items-center gap-2 rounded-full border border-[#354134] bg-[#151b16] px-4 py-3 text-sm font-semibold text-[#f7f8f3] shadow-lg">
          {status === "copied"
            ? <Check size={16} className="shrink-0 text-[#dbf578]" />
            : <AlertCircle size={16} className="shrink-0 text-[#ffc5b8]" />}
          {message}
        </div>,
        document.body,
      ) : null}
    </>
  );
}
