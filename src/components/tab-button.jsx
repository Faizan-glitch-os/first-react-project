export default function TabButton({ children, isSelected, ...attributes }) {
  return (
    <button className={isSelected ? "active" : undefined} {...attributes}>
      {children}
    </button>
  );
}
