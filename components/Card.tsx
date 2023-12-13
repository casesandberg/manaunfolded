'use client'

import { motion } from 'framer-motion'

const LaunchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z"
      fill="currentColor"
    />
  </svg>
)

export type CardProps = {
  children?: React.ReactNode
  className?: string
  delay?: number
  opacity?: number
}

export function Card({ children, className, delay = 0, opacity = 1 }: CardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.75 },
        show: {
          opacity,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 100,
            delay,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className={`relative flex flex-col items-center justify-center rounded-3xl bg-foreground p-4 transition-colors hover:bg-[#292929] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function CardWithExternalLink({
  href,
  children,
  className,
  linkClassName,
  ...props
}: {
  href: string
  linkClassName?: string
} & CardProps) {
  return (
    <Card {...props} className={`[&:hover>a]:opacity-100 ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute right-2 top-2 rounded-xl bg-inherit p-2 text-white text-opacity-50 opacity-0 transition-[color] transition-[opacity] hover:text-opacity-75 ${linkClassName}`}
      >
        <span className="sr-only">Link</span>
        <LaunchIcon />
      </a>
      {children}
    </Card>
  )
}
