export default function Cursor() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: '0.6em',
        height: '1.1em',
        background: 'var(--accent)',
        verticalAlign: 'text-bottom',
        marginLeft: '2px',
        animation: 'blink 1.1s step-end infinite',
      }}
    />
  );
}
