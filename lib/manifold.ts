'use server'

const MANIFOLD_API = 'https://api.manifold.markets'

export type User = {
  id: string
  name: string
  username: string
  avatarUrl: string
  balance: number
}

async function fetchApi<T extends object>(method: string, path: string, body?: Record<string, string | number>) {
  const res = await fetch(`${MANIFOLD_API}${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  })

  try {
    const json = (await res.json()) as T | { error: string } | { message: string }
    // guard against both manifold error types
    if ('error' in json) {
      throw new Error(json.error ?? 'API Error')
    } else if ('message' in json) {
      throw new Error(json.message ?? 'API Error')
    }
    return json
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getUserByUsername(username: string) {
  return fetchApi<User>('GET', `/v0/user?username=${username}`)
}

export async function searchUsers(term: string, limit: number = 5) {
  return fetchApi<Array<User>>('GET', `/search-users?term=${term}&limit=${limit}`)
}
