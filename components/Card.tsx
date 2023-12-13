'use client'

import { motion } from 'framer-motion'

export function Card({
  children,
  className,
  delay = 0,
  opacity = 1,
}: {
  children?: React.ReactNode
  className?: string
  delay?: number
  opacity?: number
}) {
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
      className={`relative flex flex-col items-center justify-center rounded-3xl bg-foreground p-4 ${className}`}
    >
      {children}
    </motion.div>
  )
}
