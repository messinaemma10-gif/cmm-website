export default function StarRating({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) {
  return (
    <span className={`font-mono text-oak ${className}`} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.round(rating))}
      <span className="text-dust">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}
