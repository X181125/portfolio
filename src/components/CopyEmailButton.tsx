"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

export function CopyEmailButton({
  email,
  children,
  className,
  label = "Copy email address",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeoutId = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <button type="button" onClick={copyEmail} aria-label={label} className={className}>
        {children}
      </button>
      {copied ? (
        <div role="status" aria-live="polite" className="fixed left-1/2 top-6 z-[120] inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-acid/40 bg-ink-50 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(32,72,49,0.24)]">
          <Check size={16} className="text-[#a8e34a]" />
          Email đã được copy vào clipboard
        </div>
      ) : null}
    </>
  );
}
