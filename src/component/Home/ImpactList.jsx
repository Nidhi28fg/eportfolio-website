

export default function ImpactList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((text, idx) => (
        <li key={idx} className="flex items-start space-x-2">
          <span className="text-green-500 mt-1">✔︎</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
