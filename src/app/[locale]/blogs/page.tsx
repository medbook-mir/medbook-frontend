'use client'

import { Container } from '@/theme/container'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchIcon } from '@/utils/icons/SearchIcon'
import { blogsData } from './data'
import { ThumbsUpIcon } from '@/utils/icons/ThumbsUpIcon'
import { CommentsIcon } from '@/utils/icons/CommentsIcon'
import { SavedIcon } from '@/utils/icons/SavedIcon'
import { GreenArrowRightIcon } from '@/utils/icons/GreenArrowRightIcon'
import { WhiteArrowRight } from '@/utils/icons/WhiteArrowRight'
import { useSavedBlogs } from '@/hooks/useSavedBlogs'


export default function BlogsPage() {
  const { toggleSavedBlog, isBlogSaved } = useSavedBlogs()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('last-added')
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 6

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get additional blogs (excluding the first one which is featured)
  const additionalBlogs = filteredBlogs.slice(1)
  
  // Calculate pagination
  const totalPages = Math.ceil(additionalBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const endIndex = startIndex + blogsPerPage
  const currentBlogs = additionalBlogs.slice(startIndex, endIndex)

  // Reset to page 1 when search changes
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Search and Sort Section */}
      <div className="bg-white py-6">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="flex h-[56px] w-full max-w-[790px] items-center justify-between rounded-[16px] bg-white px-2 shadow-md overflow-hidden">
  <div className="flex flex-grow items-center gap-3 px-4 text-gray-500">
    <SearchIcon />
    <input
      type="text"
      placeholder="Search by topic"
      aria-label="Search by topic"
      className="flex-grow py-3 text-black placeholder-gray-500 outline-none bg-transparent"
      onChange={(e) => handleSearch(e.target.value)}
                    value={searchQuery}
    />
  </div>
  <button className="h-[48px] shrink-0 rounded-[16px] bg-[#046D5F] px-[28px] text-[18px] font-semibold text-white transition-all hover:bg-teal-600">
    Search
  </button>
</div>

            {/* Sort Dropdown */}
           <div className="flex items-center gap-1">
  <span className="text-[#90A4AE] text-m">Sort by:</span>
  <div className="relative flex items-center">
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="font-semibold text-center text-[#263238] text-m appearance-none bg-transparent pl-1 pr-5 cursor-pointer focus:outline-none">
      <option value="last-added">Last added</option>
      <option value="oldest">Oldest</option>
      <option value="popular">Most Popular</option>
    </select>

    {/* dropdown arrow */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 absolute right-0 pointer-events-none text-[#263238]"
      fill="none"
      viewBox="0 0 12 8"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
</div>

          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-8">
          {/* Featured Blog Card */}
          {filteredBlogs.length > 0 && (
            <Link href={`/blogs/${filteredBlogs[0].id}`}>
              <div className="relative rounded-2xl overflow-hidden h-[450px] md:h-[580px] group cursor-pointer">
                <Image
                  src={filteredBlogs[0].image}
                  alt={filteredBlogs[0].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-white/40 backdrop-blur-sm">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="w-2/3 text-2xl md:text-[32px] lg:text-[40px] font-bold text-white mb-2 md:mb-3 leading-tight">
                        {filteredBlogs[0].title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 leading-relaxed">
                        {filteredBlogs[0].description}
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <WhiteArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Blog Grid - Additional blogs */}
        {filteredBlogs.length > 1 && (
          <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="p-3 pb-0 rounded-[24px] overflow-hidden
                bg-white border-3 border-[#E5E7EB] 
                hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Section */}
                <Link href={`/blogs/${blog.id}`}>
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                </Link>

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
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blogs/${blog.id}`}>
                  <h3 className="text-[20px] font-bold mb-3 text-[#1F2937] leading-[1.4] line-clamp-2 min-h-[56px]">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7280] text-[14px] leading-[1.6] mb-6 line-clamp-3 min-h-[67px]">
                    {blog.description}
                  </p>
                  </Link>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between">
                    {/* Learn More Button */}
                    <Link href={`/blogs/${blog.id}`} className="flex items-center gap-2 font-semibold text-[16px] hover:opacity-80 transition-opacity group/btn">
                      <span className='underline'>Learn more</span>
                      <div className="w-8 h-8 rounded-full bg-[#046D5F] flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <GreenArrowRightIcon/>
                      </div>
                    </Link>

                    {/* Action Icons */}
                    <div className="flex items-center gap-3">
                      <button className="text-[#6B7280] hover:text-[#046D5F] transition-colors">
                        <ThumbsUpIcon />
                      </button>
                      <button className="text-[#6B7280] hover:text-[#046D5F] transition-colors">
                        <CommentsIcon/>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSavedBlog(blog.id)
                        }}
                        className={`transition-colors ${
                          isBlogSaved(blog.id)
                            ? 'text-[#046D5F]'
                            : 'text-[#6B7280] hover:text-[#046D5F]'
                        }`}
                        aria-label={isBlogSaved(blog.id) ? 'Remove from saved' : 'Save blog'}
                      >
                        <SavedIcon/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 py-12">
              {/* Previous Button - Hidden on first page */}
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white border border-[#E5E7EB] text-[#046D5F] hover:bg-[#046D5F] hover:text-white"
                  aria-label="Previous page"
                >
                  <svg
                    className="w-5 h-5 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage =
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    Math.abs(pageNum - currentPage) <= 1

                  // Show ellipsis
                  const showEllipsisBefore = pageNum === currentPage - 2 && currentPage > 3
                  const showEllipsisAfter = pageNum === currentPage + 2 && currentPage < totalPages - 2

                  if (showEllipsisBefore || showEllipsisAfter) {
                    return (
                      <span key={pageNum} className="px-2 text-gray-400">
                        ...
                      </span>
                    )
                  }

                  if (!showPage) return null

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        currentPage === pageNum
                          ? 'bg-[#046D5F] text-white'
                          : 'bg-white border border-[#E5E7EB] text-[#263238] hover:bg-gray-50'
                      }`}
                      aria-label={`Page ${pageNum}`}
                      aria-current={currentPage === pageNum ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              {/* Next Button - Hidden on last page */}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white border border-[#E5E7EB] text-[#046D5F] hover:bg-[#046D5F] hover:text-white"
                  aria-label="Next page"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
          </>
        )}

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blogs found matching your search.</p>
          </div>
        )}
      </Container>
    </div>
  )
}
