import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Card from '../components/Card'
import { parseFrontmatter, formatDate, Frontmatter } from '../utils/frontmatter'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string>('')
  const [meta, setMeta] = useState<Frontmatter | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    import(`../content/blog/${slug}.md?raw`)
      .then((module) => {
        const { meta, content } = parseFrontmatter(module.default)
        setMeta(meta)
        setContent(content)
        setLoading(false)
      })
      .catch(() => {
        setContent('This blog post could not be found.')
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Card>
          <p className="text-slate-500">Loading...</p>
        </Card>
      </div>
    )
  }

  if (!meta || !meta.title) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Card>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Not Found</h1>
          <p className="text-slate-600">This blog post does not exist.</p>
          <Link
            to="/#blog"
            className="inline-block mt-4 text-sky-700 hover:text-sky-600"
          >
            &larr; Back to Blog
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{meta.title}</h1>
        <time className="text-slate-500">{formatDate(meta.date)}</time>
      </header>

      <Card>
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </Card>

      <footer className="mt-8">
        <Link
          to="/#blog"
          className="text-sky-700 hover:text-sky-600 transition-colors"
        >
          &larr; Back to Blog
        </Link>
      </footer>
    </article>
  )
}

export default BlogPost
