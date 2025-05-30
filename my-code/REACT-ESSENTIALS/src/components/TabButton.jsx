export default function TabButton({
  children,
  isSelected = false,
  ...props
}) {

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
