'use client'

import { User } from '@/lib/manifold'
import { Stats } from '@/lib/stats'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function StartProcessingForUser({ user, stats }: { user: User; stats: Stats }) {
  const router = useRouter()
  const isEmpty = Object.keys(stats.items).length === 0
  const isGenerating = stats.processing && isEmpty
  const intervalId = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isEmpty && !isGenerating) {
      fetch(`/api/stats?username=${user.username}`)
    }
  }, [isEmpty, isGenerating, user.username])

  useEffect(() => {
    let intervalDuration = 1000
    const maxInterval = 1000 * 60 * 6
    const backoffRate = 2

    const setNewInterval = () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current)
      }

      intervalId.current = setInterval(() => {
        if (!isEmpty) {
          if (intervalId.current !== null) {
            clearInterval(intervalId.current)
          }
        } else {
          router.refresh()
          intervalDuration = Math.min(intervalDuration * backoffRate, maxInterval)
          setNewInterval()
        }
      }, intervalDuration)
    }

    setNewInterval()

    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current)
      }
    }
  }, [isEmpty]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
