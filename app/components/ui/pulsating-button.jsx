import { cn } from "../../../lib/utils";

export function PulsatingButton({
  pulseColor = "#ff0000",
  duration = "1.5s",
  className,
  children,
  href,
  ...props
}) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      style={{ "--pulse-color": pulseColor, "--duration": duration }}
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-lg bg-black px-6 py-2 text-center text-white",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[inherit] bg-[var(--pulse-color)] animate-pulsating"
        style={{ animationDuration: "var(--duration)" }}
      />
      <span className="relative">{children}</span>
    </Tag>
  );
}
