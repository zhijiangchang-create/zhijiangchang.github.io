import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Card from '../components/Card'

interface UpdateMeta {
  title: string
  date: string
  description: string
}

const updateMeta: Record<string, UpdateMeta> = {
  'welcome': {
    title: 'Welcome',
    date: 'February 13, 2026',
    description: 'Welcome to my personal website!',
  },
}

function UpdatePost() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  const meta = slug ? updateMeta[slug] : null

  useEffect(() => {
    if (!slug) return

    import(`../content/updates/${slug}.md?raw`)
      .then((module) => {
        setContent(module.default)
        setLoading(false)
      })
      .catch(() => {
        setContent('# Not Found\n\nThis update could not be found.')
        setLoading(false)
      })
  }, [slug])

  if (!meta) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Card>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Not Found</h1>
          <p className="text-slate-600">This update does not exist.</p>
          <Link
            to="/#updates"
            className="inline-block mt-4 text-sky-700 hover:text-sky-600"
          >
            &larr; Back to Updates
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{meta.title}</h1>
        <time className="text-slate-500">{meta.date}</time>
      </header>

      <Card>
        {loading ? (
          <p className="text-slate-500">Loading...</p>
        ) : (
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
      </Card>

      <footer className="mt-8">
        <Link
          to="/#updates"
          className="text-sky-700 hover:text-sky-600 transition-colors"
        >
          &larr; Back to Updates
        </Link>
      </footer>
    </article>
  )
}

export default UpdatePost
