'use client'

import { Container } from '@/theme/container'
import Image from 'next/image'
import { blogsData } from '../data'
import { ThumbsUpIcon } from '@/utils/icons/ThumbsUpIcon'
import { CommentsIcon } from '@/utils/icons/CommentsIcon'
import { SavedIcon } from '@/utils/icons/SavedIcon'
import { useSavedBlogs } from '@/hooks/useSavedBlogs'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { toggleSavedBlog, isBlogSaved } = useSavedBlogs()
  
  // Unwrap params Promise
  const { id } = use(params)
  
  // Find the current blog
  const blog = blogsData.find((b) => b.id === parseInt(id))
  
  // If blog not found, show 404
  if (!blog) {
    notFound()
  }
  
  // Get other related posts (excluding current blog)
  const relatedPosts = blogsData
    .filter((b) => b.id !== blog.id)
    .slice(0, 4)

  // Parse content into sections
  const contentSections = blog.content?.split('\n\n') || []
  const mainText = contentSections.slice(0, 1).join('\n\n')
  const checklistItems = contentSections.find((section) => section.includes('✅'))?.split('\n').filter((line) => line.trim().startsWith('✅')) || []
  const remainingSections = contentSections.slice(1).filter((section) => !section.includes('✅'))

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
            <span className="text-[#263238] font-semibold line-clamp-1">
              {blog.title}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-6">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Author and Date */}
            <div className="flex items-center mb-4">
              <span className="text-[#6B7280] text-[16px] font-normal">
                {blog.author} 
              </span>
              <span className="text-[#6B7280] text-[16px] font-normal ml-3 mr-3"> | </span>
              <span className="text-[#6B7280] text-[16px] font-normal">
                {new Date(blog.date).toLocaleDateString('de-DE', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#263238] leading-[1.2] mb-6">
              {blog.title}
            </h1>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Main paragraph */}
              <p className="text-[#374151] text-[16px] leading-[1.8] mb-6">
                {mainText}
              </p>

              {/* Checklist items */}
              {checklistItems.length > 0 && (
                <div className="mb-6">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 mb-2">
                      <span className="text-[#046D5F] text-[18px]">✅</span>
                      <span className="text-[#374151] text-[16px] leading-[1.8]">
                        {item.replace('✅', '').trim()}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Remaining content sections */}
              {remainingSections.map((section, index) => {
                // Check if section is a heading (all caps or starts with certain patterns)
                const isHeading = section.length < 100 && !section.includes('.')
                
                if (isHeading) {
                  return (
                    <h2 key={index} className="text-[24px] md:text-[28px] font-bold text-[#263238] mt-8 mb-4">
                      {section}
                    </h2>
                  )
                }
                
                // Check if section contains bullet points
                if (section.includes('•')) {
                  const lines = section.split('\n')
                  return (
                    <div key={index} className="mb-6">
                      {lines.map((line, lineIndex) => {
                        if (line.trim().startsWith('•')) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-3 mb-3">
                              <span className="text-[#046D5F] text-[20px] leading-none mt-1">•</span>
                              <span className="text-[#374151] text-[16px] leading-[1.8] flex-1">
                                {line.replace('•', '').trim()}
                              </span>
                            </div>
                          )
                        }
                        return (
                          <p key={lineIndex} className="text-[#374151] text-[16px] leading-[1.8] mb-4">
                            {line}
                          </p>
                        )
                      })}
                    </div>
                  )
                }
                
                return (
                  <p key={index} className="text-[#374151] text-[16px] leading-[1.8] mb-6">
                    {section}
                  </p>
                )
              })}
            </div>

            {/* Engagement Stats */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <ThumbsUpIcon />
                <span className="text-[#6B7280] text-[16px]">Likes</span>
              </div>
              <div className="flex items-center gap-2">
                <CommentsIcon />
                <span className="text-[#6B7280] text-[16px]">Comments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280] text-[16px]">Shared</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#E5E7EB]">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-[#E5E7EB] hover:bg-gray-50 transition-colors">
                <ThumbsUpIcon />
                <span className="text-[#374151] font-semibold">Like</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-[#E5E7EB] hover:bg-gray-50 transition-colors">
                <CommentsIcon />
                <span className="text-[#374151] font-semibold">Comment</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-[#E5E7EB] hover:bg-gray-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 8.333v-5h-5m4.166 1.667l-6.666 6.667m-1.667 5h-5v-5l10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#374151] font-semibold">Share</span>
              </button>
              <button 
                onClick={() => toggleSavedBlog(blog.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-[#E5E7EB] hover:bg-gray-50 transition-colors ${
                  isBlogSaved(blog.id) ? 'bg-[#046D5F]/10' : ''
                }`}
              >
                <SavedIcon />
                <span className={`font-semibold ${isBlogSaved(blog.id) ? 'text-[#046D5F]' : 'text-[#374151]'}`}>
                  {isBlogSaved(blog.id) ? 'Saved' : 'Save'}
                </span>
              </button>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-[24px] font-bold text-[#263238] mb-6">
                Other related posts
              </h2>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.id}`}
                    className="block group"
                  >
                    <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-lg transition-shadow duration-300">
                      {/* Image */}
                      <div className="relative w-full h-[160px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-[16px] font-bold text-[#1F2937] leading-[1.4] line-clamp-2 mb-2 group-hover:text-[#046D5F] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#6B7280] text-[14px] leading-[1.6] line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
