export function Table({ children, className }) {
  return <table className={`min-w-full ${className}`}>{children}</table>;
}

export function TableHeader({ children, className }) {
  return <thead className={className}>{children}</thead>;
}

export function TableBody({ children, className }) {
  return <tbody className={className}>{children}</tbody>;
}

export function TableRow({ children, className }) {
  return <tr className={className}>{children}</tr>;
}

export function TableCell({ children, className }) {
  return <td className={`border px-4 py-2 ${className}`}>{children}</td>;
}

export function TableCellHeader({ children, className }) {
  return <th className={`border px-4 py-2 ${className}`}>{children}</th>;
}
