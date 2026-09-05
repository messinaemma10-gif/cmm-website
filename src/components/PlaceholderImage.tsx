export default function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-stone bg-dust/40 text-center ${className}`}
    >
      <span className="px-4 font-mono text-xs font-semibold uppercase tracking-widest text-stone">
        {label}
      </span>
    </div>
  );
}
