import './TabButton.css';

export default function TabButton(Props) {
  return (
    <li>
      <button
        onClick={Props.onSelect}
        className={Props.isSelected ? 'active' : ''}
      >
        {Props.children}
      </button>
    </li>
  );
}
