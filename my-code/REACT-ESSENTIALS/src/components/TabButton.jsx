export default function TabButton({
  children,
  onSelect,
  isSelected = false,
}) {

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
