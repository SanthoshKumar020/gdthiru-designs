import { cn } from "../../../lib/utils";

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  shineColor = "#ffffff",
  className,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      style={{
        "--border-radius": `${borderRadius}px`,
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        "--color": color,
        "--shine-color": shineColor,
      }}
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[var(--border-radius)] bg-white px-4 py-2 text-black",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[var(--border-radius)]"
        style={{
          padding: "var(--border-width)",
          background: "var(--color)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[var(--border-radius)]"
        style={{
          padding: "var(--border-width)",
          background: "conic-gradient(from var(--angle), transparent 0%, var(--shine-color) 12%, transparent 24%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: "shine var(--duration) linear infinite",
        }}
      />
      {children}
    </div>
  );
}
