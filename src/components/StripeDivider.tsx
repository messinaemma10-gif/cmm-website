export default function StripeDivider({ className = "" }: { className?: string }) {
  return <div className={`diagonal-stripes h-3 w-full ${className}`} />;
}
