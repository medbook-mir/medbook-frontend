import { useState, useEffect } from 'react'

const SAVED_BLOGS_KEY = 'medbook_saved_blogs'

export function useSavedBlogs() {
  const [savedBlogIds, setSavedBlogIds] = useState<number[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load saved blogs from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SAVED_BLOGS_KEY)
      if (saved) {
        setSavedBlogIds(JSON.parse(saved))
      }
    } catch (error) {
      console.error('Error loading saved blogs:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save to localStorage whenever savedBlogIds changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(SAVED_BLOGS_KEY, JSON.stringify(savedBlogIds))
      } catch (error) {
        console.error('Error saving blogs:', error)
      }
    }
  }, [savedBlogIds, isLoaded])

  const toggleSavedBlog = (blogId: number) => {
    setSavedBlogIds((prev) => {
      if (prev.includes(blogId)) {
        return prev.filter((id) => id !== blogId)
      } else {
        return [...prev, blogId]
      }
    })
  }

  const isBlogSaved = (blogId: number) => savedBlogIds.includes(blogId)

  return {
    savedBlogIds,
    toggleSavedBlog,
    isBlogSaved,
    isLoaded
  }
}
