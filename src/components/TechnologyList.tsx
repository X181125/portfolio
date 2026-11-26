export function TechnologyList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tech-list" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
