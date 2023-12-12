'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export default function TypedName({ name }: { name: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => name.slice(0, latest))

  useEffect(() => {
    const controls = animate(count, name.length, {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
    })
    return controls.stop
  }, [])

  return <motion.span>{displayText}</motion.span>
}
