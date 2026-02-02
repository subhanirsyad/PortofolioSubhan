export default function BlurBlob({ className = "", variant = "blue" }) {
  const bg =
    variant === "cyan"
      ? "from-cyan-500/30 to-sky-500/20"
      : "from-blue-500/30 to-violet-500/20"

  return (
    <div
      className={[
        "pointer-events-none absolute -z-10 h-[520px] w-[520px] rounded-full blur-[90px]",
        "bg-gradient-to-b",
        bg,
        "animate-[float_10s_ease-in-out_infinite]",
        className,
      ].join(" ")}
    />
  )
}
