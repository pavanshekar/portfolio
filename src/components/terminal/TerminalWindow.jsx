import './TerminalWindow.css';

export default function TerminalWindow({ title, children, className = '' }) {
  return (
    <div className={`window terminal-window ${className}`}>
      <div className="window-bar">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="window-title">{title}</div>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
