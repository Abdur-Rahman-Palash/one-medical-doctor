'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Calendar, Clock, User, Share2, Bookmark, Heart, MessageCircle,
  ArrowLeft, ChevronRight, Facebook, Twitter, Linkedin, Mail
} from 'lucide-react'

const blogPosts = {
  '1': {
    id: '1',
    title: '10 Simple Ways to Boost Your Immune System This Winter',
    excerpt: 'Discover evidence-based strategies to strengthen your immune system and stay healthy during cold and flu season.',
    author: 'Dr. Sarah Johnson',
    authorRole: 'Primary Care Physician',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'health-tips',
    categoryName: 'Health Tips',
    image: '/api/placeholder/800/400',
    tags: ['Immunity', 'Prevention', 'Winter Health'],
    content: `
      <h2>Understanding Your Immune System</h2>
      <p>Your immune system is your body's natural defense against infections and diseases. During winter months, when cold and flu viruses are more prevalent, having a robust immune system becomes especially important. Here are ten evidence-based strategies to help strengthen your immune defenses.</p>
      
      <h2>1. Prioritize Sleep</h2>
      <p>Quality sleep is crucial for immune function. During sleep, your body produces and distributes cytokines, a type of protein that targets infection and inflammation. Aim for 7-9 hours of quality sleep per night.</p>
      
      <h2>2. Stay Hydrated</h2>
      <p>Proper hydration helps your body produce lymph, which carries white blood cells and other immune system cells. Try to drink at least 8 glasses of water daily.</p>
      
      <h2>3. Eat a Balanced Diet</h2>
      <p>Focus on foods rich in vitamins and minerals. Include plenty of fruits, vegetables, lean proteins, and whole grains in your diet. Foods high in vitamin C, vitamin D, and zinc are particularly beneficial for immune health.</p>
      
      <h2>4. Exercise Regularly</h2>
      <p>Moderate exercise can boost your immune system by promoting good circulation, which allows immune cells to move through the body more efficiently. Aim for at least 30 minutes of moderate exercise most days of the week.</p>
      
      <h2>5. Manage Stress</h2>
      <p>Chronic stress can suppress your immune system. Practice stress-reduction techniques like meditation, deep breathing, or yoga to keep stress levels in check.</p>
      
      <h2>6. Get Vaccinated</h2>
      <p>Stay up to date with recommended vaccinations, including flu shots and other immunizations that can help prevent serious illnesses.</p>
      
      <h2>7. Practice Good Hygiene</h2>
      <p>Wash your hands frequently with soap and water for at least 20 seconds. Avoid touching your face, especially your eyes, nose, and mouth.</p>
      
      <h2>8. Limit Alcohol</h2>
      <p>Excessive alcohol consumption can weaken your immune system. If you drink, do so in moderation.</p>
      
      <h2>9. Don't Smoke</h2>
      <p>Smoking damages your immune system and makes you more susceptible to respiratory infections. If you smoke, consider quitting.</p>
      
      <h2>10. Consider Supplements</h2>
      <p>While it's best to get nutrients from food, some supplements like vitamin D, vitamin C, and zinc may help support immune function. Consult with your healthcare provider before starting any supplements.</p>
      
      <h2>When to See a Doctor</h2>
      <p>While these strategies can help support your immune system, it's important to seek medical attention if you experience persistent symptoms or have concerns about your immune health. Your healthcare provider can offer personalized advice based on your individual health needs.</p>
      
      <p>Remember, building a strong immune system is a long-term commitment to healthy habits. Start with small changes and gradually incorporate these strategies into your daily routine for the best results.</p>
    `
  }
}

const relatedPosts = [
  {
    id: '2',
    title: 'The Future of Healthcare: How Virtual Visits Are Changing Patient Care',
    excerpt: 'Explore how telemedicine is revolutionizing healthcare delivery.',
    author: 'Dr. Michael Chen',
    date: '2024-01-12',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Understanding Anxiety: Signs, Symptoms, and When to Seek Help',
    excerpt: 'Learn to recognize the signs of anxiety disorders.',
    author: 'Dr. Emily Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'Heart Health 101: Essential Tips for a Healthy Cardiovascular System',
    excerpt: 'Practical advice for maintaining heart health.',
    author: 'Dr. James Wilson',
    date: '2024-01-08',
    readTime: '8 min read'
  }
]

export default function BlogDetailPage() {
  const params = useParams()
  const postId = params.id as string
  const post = blogPosts[postId as keyof typeof blogPosts] || blogPosts['1']

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Navigation */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a 
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </a>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
              {post.categoryName}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 text-center leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-center flex-wrap gap-6 text-gray-600">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-sm">{post.authorRole}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <Heart className="w-24 h-24 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share and Save */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>Save Article</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">{post.authorRole}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Sarah Johnson is a board-certified primary care physician with over 15 years of experience in preventive medicine and patient education. She is passionate about helping patients achieve optimal health through evidence-based lifestyle modifications and comprehensive care.
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    View Profile
                  </button>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    More Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-gray-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {relatedPost.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{relatedPost.author}</span>
                  <span>{relatedPost.readTime}</span>
                </div>
                
                <a
                  href={`/blog/${relatedPost.id}`}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Enjoyed This Article?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get more health tips and insights delivered to your inbox weekly.
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
