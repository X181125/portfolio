import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 flex items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-acid">
        <span className={centered ? "h-px w-8 bg-acid/60" : "h-px w-8 bg-acid/60"} />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-sm leading-7 text-ink-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
