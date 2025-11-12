'use client'

import { Container } from '@/theme/container'
import Image from 'next/image'
import { blogsData } from '../blogs/data'
import { ThumbsUpIcon } from '@/utils/icons/ThumbsUpIcon'
import { CommentsIcon } from '@/utils/icons/CommentsIcon'
import { SavedIcon } from '@/utils/icons/SavedIcon'
import { GreenArrowRightIcon } from '@/utils/icons/GreenArrowRightIcon'
import { useSavedBlogs } from '@/hooks/useSavedBlogs'
import Link from 'next/link'

export default function SavedBlogsPage() {
  const { savedBlogIds, toggleSavedBlog, isBlogSaved, isLoaded } = useSavedBlogs()

  // Filter blogs to get only saved ones
  const savedBlogs = blogsData.filter((blog) => savedBlogIds.includes(blog.id))

  // Get recommended blogs (blogs not saved)
  const recommendedBlogs = blogsData
    .filter((blog) => !savedBlogIds.includes(blog.id))
    .slice(0, 3)

  // Show loading state while checking localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white">
        <Container>
          <div className="py-16 text-center">
            <p className="text-gray-500">Loading...</p>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Container>
        {/* Breadcrumb */}
        <div className="py-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#6B7280] hover:text-[#046D5F]">
              Home
            </Link>
            <span className="text-[#6B7280]">/</span>
            <Link href="/blogs" className="text-[#6B7280] hover:text-[#046D5F]">
              Blogs
            </Link>
            <span className="text-[#6B7280]">/</span>
            <span className="text-[#263238] font-semibold">Saved</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="pb-8">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#263238]">
            Saved blogs
          </h1>
        </div>

        {/* Saved Blogs Section */}
        {savedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {savedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="p-3 pb-0 rounded-[24px] overflow-hidden bg-white border-3 border-[#E5E7EB] hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Author and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#6B7280] text-[16px] font-normal">
                      {blog.author}
                    </span>
                    <span className="text-[#6B7280] text-[16px] font-normal">
                      {new Date(blog.date).toLocaleDateString('de-DE', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold mb-3 text-[#1F2937] leading-[1.4] line-clamp-2 min-h-[56px]">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7280] text-[14px] leading-[1.6] mb-6 line-clamp-3 min-h-[67px]">
                    {blog.description}
                  </p>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between">
                    {/* Learn More Button */}
                    <button className="flex items-center gap-2 font-semibold text-[16px] hover:opacity-80 transition-opacity group/btn">
                      <span className="underline">Learn more</span>
                      <div className="w-8 h-8 rounded-full bg-[#046D5F] flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <GreenArrowRightIcon />
                      </div>
                    </button>

                    {/* Action Icons */}
                    <div className="flex items-center gap-3">
                      <button className="text-[#6B7280] hover:text-[#046D5F] transition-colors">
                        <ThumbsUpIcon />
                      </button>
                      <button className="text-[#6B7280] hover:text-[#046D5F] transition-colors">
                        <CommentsIcon />
                      </button>
                      <button
                        onClick={() => toggleSavedBlog(blog.id)}
                        className={`transition-colors ${
                          isBlogSaved(blog.id)
                            ? 'text-[#046D5F]'
                            : 'text-[#6B7280] hover:text-[#046D5F]'
                        }`}
                        aria-label={
                          isBlogSaved(blog.id) ? 'Remove from saved' : 'Save blog'
                        }
                      >
                        <SavedIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              You haven't saved any blogs yet.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#046D5F] text-white rounded-full font-semibold hover:bg-teal-600 transition-colors"
            >
              Browse Blogs
              <GreenArrowRightIcon />
            </Link>
          </div>
        )}

        {/* You might also like Section */}
        {savedBlogs.length > 0 && recommendedBlogs.length > 0 && (
          <div className="py-12 border-t border-[#E5E7EB]">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#263238] mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="p-3 pb-0 rounded-[24px] overflow-hidden bg-white border-3 border-[#E5E7EB] hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Author and Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#6B7280] text-[16px] font-normal">
                        {blog.author}
                      </span>
                      <span className="text-[#6B7280] text-[16px] font-normal">
                        {new Date(blog.date).toLocaleDateString('de-DE', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-bold mb-3 text-[#1F2937] leading-[1.4] line-clamp-2 min-h-[56px]">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6B7280] text-[14px] leading-[1.6] mb-6 line-clamp-3 min-h-[67px]">
                      {blog.description}
                    </p>

                    {/* Actions Row */}
                    <div className="flex items-center justify-between">
                      {/* Learn More Button */}
                      <button className="flex items-center gap-2 font-semibold text-[16px] hover:opacity-80 transition-opacity group/btn">
                        <span className="underline">Learn more</span>
                        <div className="w-8 h-8 rounded-full bg-[#046D5F] flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                          <GreenArrowRightIcon />
                        </div>
                      </button>

                      {/* Action Icons */}
                      <div className="flex items-center gap-3">
                        <button className="text-[#6B7280] hover:text-[#046D5F] transition-colors">
                          <ThumbsUpIcon />
                        </button>
                        <button className="text-[#6B7280] hover:text-[#046D5F] transition-colors">
                          <CommentsIcon />
                        </button>
                        <button
                          onClick={() => toggleSavedBlog(blog.id)}
                          className={`transition-colors ${
                            isBlogSaved(blog.id)
                              ? 'text-[#046D5F]'
                              : 'text-[#6B7280] hover:text-[#046D5F]'
                          }`}
                          aria-label={
                            isBlogSaved(blog.id) ? 'Remove from saved' : 'Save blog'
                          }
                        >
                          <SavedIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
