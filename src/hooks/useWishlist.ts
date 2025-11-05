'use client'

import { useState, useEffect } from 'react'

export interface WishlistDoctor {
  id: number
  name: string
  specialty: string
  location: string
  rating: number
  avatar: string
}

const WISHLIST_STORAGE_KEY = 'medbook_wishlist'

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistDoctor[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY)
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist))
      }
    } catch (error) {
      console.error('Error loading wishlist:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist))
      } catch (error) {
        console.error('Error saving wishlist:', error)
      }
    }
  }, [wishlist, isLoading])

  const addToWishlist = (doctor: WishlistDoctor) => {
    setWishlist((prev) => {
      // Check if doctor already exists
      if (prev.some((d) => d.id === doctor.id)) {
        return prev
      }
      return [...prev, doctor]
    })
  }

  const removeFromWishlist = (doctorId: number) => {
    setWishlist((prev) => prev.filter((doctor) => doctor.id !== doctorId))
  }

  const isInWishlist = (doctorId: number) => {
    return wishlist.some((doctor) => doctor.id === doctorId)
  }

  const toggleWishlist = (doctor: WishlistDoctor) => {
    if (isInWishlist(doctor.id)) {
      removeFromWishlist(doctor.id)
    } else {
      addToWishlist(doctor)
    }
  }

  const clearWishlist = () => {
    setWishlist([])
  }

  return {
    wishlist,
    isLoading,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
  }
}
