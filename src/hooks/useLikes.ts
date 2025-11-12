import { useState, useEffect } from 'react'

interface LikeState {
  [blogId: number]: boolean
}

export const useLikes = () => {
  const [likedBlogs, setLikedBlogs] = useState<LikeState>({})
  const [isLoaded, setIsLoaded] = useState(false)

  // Load liked blogs from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('likedBlogs')
    if (stored) {
      try {
        setLikedBlogs(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse liked blogs:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever likedBlogs changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs))
    }
  }, [likedBlogs, isLoaded])

  const toggleLike = (blogId: number) => {
    setLikedBlogs((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }))
  }

  const isBlogLiked = (blogId: number) => {
    return !!likedBlogs[blogId]
  }

  return {
    toggleLike,
    isBlogLiked,
    likedBlogs,
  }
}
