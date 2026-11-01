import { cn } from "../../../lib/utils";

export function Marquee({
  className,
  reverse = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
