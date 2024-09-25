
export function Tabs({ value, onValueChange, children }) {
  return <div>{children}</div>;
}

export function TabsList({ children, className }) {
  return <div className={`flex space-x-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className, onClick }) {
  return (
    <button
      onClick={() => onClick(value)}
      className={`px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }) {
  return <div className={`${className}`}>{children}</div>;
}
