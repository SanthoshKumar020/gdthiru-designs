import { cn } from "../../../lib/utils";

export function BentoGrid({ children, className }) {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}

export function BentoCard({ name, className, background, Icon, description, href, cta }) {
  return (
    <a
      href={href}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border p-6",
        className
      )}
    >
      <div>{background}</div>
      <div className="flex flex-col gap-1 transition-all duration-300 group-hover:-translate-y-10">
        {Icon ? (
          <Icon className="h-12 w-12 origin-left transition-all duration-300 ease-in-out group-hover:scale-75" />
        ) : null}
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="max-w-lg opacity-70">{description}</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="pointer-events-auto font-semibold">{cta} →</span>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03]" />
    </a>
  );
}
