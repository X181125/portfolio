type ContributionListProps = {
  items: readonly string[];
  className?: string;
};

export function ContributionList({ items, className = "contribution-list" }: ContributionListProps) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
