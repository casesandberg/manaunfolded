'use client'

import { User } from '@/lib/manifold'
import { Stats } from '@/lib/stats'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function StartProcessingForUser({
  user,
  stats,
  startProcessing,
  setUser,
}: {
  user: User
  stats: Stats
  startProcessing: (userId: string) => Promise<void>
  setUser: (userId: string, stats: Stats) => Promise<void>
}) {
  const router = useRouter()
  const isEmpty = Object.keys(stats.items).length === 0
  const isGenerating = stats.processing && isEmpty

  useEffect(() => {
    if (isEmpty && !isGenerating) {
      startProcessing(user.id).then(() => {
        router.refresh()

        fetch(`/api/stats?username=${user.username}`)
          .then((res) => res.json())
          .then((stats) => {
            setUser(user.id, stats)
          })
      })
    }
  }, [isEmpty, isGenerating])

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
