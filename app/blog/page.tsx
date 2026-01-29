'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Calendar, Clock, User, Search, Filter, ChevronRight,
  Heart, Brain, Activity, Users, Stethoscope, ArrowRight, Shield
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'health-tips', name: 'Health Tips' },
  { id: 'mental-health', name: 'Mental Health' },
  { id: 'prevention', name: 'Prevention' },
  { id: 'technology', name: 'Technology' },
  { id: 'nutrition', name: 'Nutrition' }
]

const blogPosts = [
  {
    id: '1',
    title: '10 Simple Ways to Boost Your Immune System This Winter',
    excerpt: 'Discover evidence-based strategies to strengthen your immune system and stay healthy during cold and flu season.',
    author: 'Dr. Sarah Johnson',
    authorRole: 'Primary Care Physician',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'health-tips',
    image: '/api/placeholder/400/250',
    tags: ['Immunity', 'Prevention', 'Winter Health'],
    featured: true
  },
  {
    id: '2',
    title: 'The Future of Healthcare: How Virtual Visits Are Changing Patient Care',
    excerpt: 'Explore how telemedicine is revolutionizing healthcare delivery and making quality care more accessible than ever.',
    author: 'Dr. Michael Chen',
    authorRole: 'Chief Medical Officer',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'technology',
    image: '/api/placeholder/400/250',
    tags: ['Telemedicine', 'Virtual Care', 'Innovation'],
    featured: false
  },
  {
    id: '3',
    title: 'Understanding Anxiety: Signs, Symptoms, and When to Seek Help',
    excerpt: 'Learn to recognize the signs of anxiety disorders and understand when professional help may be needed.',
    author: 'Dr. Emily Rodriguez',
    authorRole: 'Psychiatrist',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'mental-health',
    image: '/api/placeholder/400/250',
    tags: ['Anxiety', 'Mental Health', 'Wellness'],
    featured: false
  },
  {
    id: '4',
    title: 'Heart Health 101: Essential Tips for a Healthy Cardiovascular System',
    excerpt: 'Practical advice for maintaining heart health and reducing your risk of cardiovascular disease.',
    author: 'Dr. James Wilson',
    authorRole: 'Cardiologist',
    date: '2024-01-08',
    readTime: '8 min read',
    category: 'prevention',
    image: '/api/placeholder/400/250',
    tags: ['Heart Health', 'Prevention', 'Wellness'],
    featured: false
  },
  {
    id: '5',
    title: 'The Mediterranean Diet: A Guide to Heart-Healthy Eating',
    excerpt: 'Discover the benefits of the Mediterranean diet and how to incorporate its principles into your daily meals.',
    author: 'Lisa Thompson, RD',
    authorRole: 'Registered Dietitian',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'nutrition',
    image: '/api/placeholder/400/250',
    tags: ['Nutrition', 'Diet', 'Heart Health'],
    featured: false
  },
  {
    id: '6',
    title: 'Sleep Hygiene: Why Quality Sleep Matters for Your Health',
    excerpt: 'Understanding the importance of sleep and practical tips for improving your sleep quality.',
    author: 'Dr. Sarah Johnson',
    authorRole: 'Primary Care Physician',
    date: '2024-01-03',
    readTime: '6 min read',
    category: 'health-tips',
    image: '/api/placeholder/400/250',
    tags: ['Sleep', 'Wellness', 'Health Tips'],
    featured: false
  }
]

const categoryIcons = {
  'health-tips': Heart,
  'mental-health': Brain,
  'prevention': Shield,
  'technology': Activity,
  'nutrition': Stethoscope
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const postsPerPage = 6
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, health tips, and the latest in healthcare innovation from our medical team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {paginatedPosts.some(post => post.featured) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            {paginatedPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gray-200 h-96 flex items-center justify-center">
                    <Heart className="w-24 h-24 text-gray-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <p className="font-medium text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      Read Full Article
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.filter(post => !post.featured).map((post) => {
              const CategoryIcon = categoryIcons[post.category as keyof typeof categoryIcons]
              
              return (
                <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    {CategoryIcon && <CategoryIcon className="w-16 h-16 text-gray-400" />}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      
                      <a
                        href={`/blog/${post.id}`}
                        className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          
          {paginatedPosts.filter(post => !post.featured).length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              <button 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-primary-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get the latest health insights and wellness tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
