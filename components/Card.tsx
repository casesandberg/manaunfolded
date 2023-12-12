export function Card({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center rounded-3xl bg-foreground p-4 ${className}`}>
      {children}
    </div>
  )
}
