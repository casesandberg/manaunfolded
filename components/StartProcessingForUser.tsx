'use client'

import { User } from '@/lib/manifold'
import { Stats } from '@/lib/stats'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function StartProcessingForUser({ user, stats }: { user: User; stats: Stats }) {
  const router = useRouter()
  const isEmpty = Object.keys(stats.items).length === 0
  const isGenerating = stats.processing && isEmpty

  useEffect(() => {
    if (isEmpty && !isGenerating) {
      fetch(`/api/stats?username=${user.username}`)
    }
  }, [isEmpty, isGenerating, user.username])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isEmpty) {
        clearInterval(interval)
      } else {
        router.refresh()
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [isEmpty, router])

  return null
}
