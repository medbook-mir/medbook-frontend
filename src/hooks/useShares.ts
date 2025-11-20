import { useState, useEffect } from 'react'

interface ShareState {
  [blogId: number]: number
}

export const useShares = () => {
  const [sharedBlogs, setSharedBlogs] = useState<ShareState>({})
  const [isLoaded, setIsLoaded] = useState(false)

  // Load shared blogs from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('sharedBlogs')
    if (stored) {
      try {
        setSharedBlogs(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse shared blogs:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever sharedBlogs changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('sharedBlogs', JSON.stringify(sharedBlogs))
    }
  }, [sharedBlogs, isLoaded])

  const incrementShare = (blogId: number) => {
    setSharedBlogs((prev) => ({
      ...prev,
      [blogId]: (prev[blogId] || 0) + 1,
    }))
  }

  const getShareCount = (blogId: number) => {
    return sharedBlogs[blogId] || 0
  }

  return {
    incrementShare,
    getShareCount,
    sharedBlogs,
  }
}
