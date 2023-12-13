'use client'

import { motion } from 'framer-motion'

export function Card({
  children,
  className,
  delay = 0,
}: {
  children?: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.75 },
        show: {
          opacity: 1,
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
      className={`relative flex flex-col items-center justify-center rounded-3xl bg-foreground p-4 ${className}`}
    >
      {children}
    </motion.div>
  )
}
