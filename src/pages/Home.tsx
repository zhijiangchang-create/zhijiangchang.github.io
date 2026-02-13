import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Card from '../components/Card'
import { parseFrontmatter, Frontmatter } from '../utils/frontmatter'

interface GitHubFile {
  name: string
  size: number
  download_url: string
  type: string
}

interface PostEntry {
  slug: string
  meta: Frontmatter
}

function formatSize(bytes: number): string {
  if (bytes >= 1048576) return (bytes / 1048576).toFixed(1) + ' MB'
  if (bytes >= 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return bytes + ' B'
}

function getExtension(filename: string): string {
  return filename.split('.').pop()?.toUpperCase() || ''
}

// Import all markdown files
const blogModules = import.meta.glob('../content/blog/*.md', { query: '?raw', eager: true }) as Record<string, { default: string }>
const updateModules = import.meta.glob('../content/updates/*.md', { query: '?raw', eager: true }) as Record<string, { default: string }>

function loadPosts(modules: Record<string, { default: string }>): PostEntry[] {
  return Object.entries(modules)
    .map(([path, module]) => {
      const slug = path.split('/').pop()?.replace('.md', '') || ''
      const { meta } = parseFrontmatter(module.default)
      return { slug, meta }
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}

function Home() {
  const [downloads, setDownloads] = useState<GitHubFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const updates = loadPosts(updateModules)
  const blogPosts = loadPosts(blogModules)

  useEffect(() => {
    const repo = 'zhijiangchang-create/zhijiangchang.github.io'
    const folder = 'public/downloads'

    fetch(`https://api.github.com/repos/${repo}/contents/${folder}`)
      .then((res) => {
        if (!res.ok) throw new Error('API error')
        return res.json()
      })
      .then((files: GitHubFile[]) => {
        const downloadFiles = files.filter(
          (f) => f.type === 'file' && !f.name.startsWith('.')
        )
        setDownloads(downloadFiles)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const links = [
    {
      href: 'https://github.com/zhijiangchang-create',
      label: 'GitHub',
      description: 'My code repositories',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Welcome</h1>
        <p className="text-lg text-slate-600">
          Personal space for updates, thoughts, and resources
        </p>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <Card>
          <p className="text-slate-600 leading-relaxed">
            Hello! I'm Zhijiang Chang. Welcome to my personal website where I
            share life updates, technical writings, and useful resources.
          </p>
        </Card>
      </Section>

      {/* Updates */}
      <Section id="updates" title="Life Updates">
        <Card>
          <div className="space-y-4">
            {updates.map((update) => (
              <article key={update.slug}>
                <time className="text-sm text-slate-500">{update.meta.date}</time>
                <h3 className="text-lg font-medium mt-1">
                  <Link
                    to={`/updates/${update.slug}`}
                    className="text-sky-700 hover:text-sky-600 transition-colors"
                  >
                    {update.meta.title}
                  </Link>
                </h3>
                <p className="text-slate-600 mt-1">{update.meta.description}</p>
              </article>
            ))}
          </div>
        </Card>
      </Section>

      {/* Blog */}
      <Section id="blog" title="Technical Blog">
        <Card>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <article key={post.slug}>
                <time className="text-sm text-slate-500">{post.meta.date}</time>
                <h3 className="text-lg font-medium mt-1">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sky-700 hover:text-sky-600 transition-colors"
                  >
                    {post.meta.title}
                  </Link>
                </h3>
                <p className="text-slate-600 mt-1">{post.meta.description}</p>
              </article>
            ))}
          </div>
        </Card>
      </Section>

      {/* Links */}
      <Section id="links" title="Useful Links">
        <Card>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href} className="flex items-center gap-3">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:text-sky-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
                <span className="text-slate-500 text-sm">{link.description}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Downloads */}
      <Section id="downloads" title="Downloads">
        <Card>
          {loading ? (
            <p className="text-slate-500">Loading...</p>
          ) : error ? (
            <div className="space-y-2">
              <p className="text-slate-500 text-sm">
                Push to GitHub to enable automatic file listing, or access files
                directly:
              </p>
              <a
                href="downloads/"
                className="text-sky-700 hover:text-sky-600 font-medium"
              >
                Browse downloads folder
              </a>
            </div>
          ) : downloads.length === 0 ? (
            <p className="text-slate-500">No files available</p>
          ) : (
            <ul className="space-y-3">
              {downloads.map((file) => (
                <li key={file.name} className="flex items-center gap-3">
                  <a
                    href={file.download_url}
                    download={file.name}
                    className="text-sky-700 hover:text-sky-600 font-medium transition-colors"
                  >
                    {file.name}
                  </a>
                  <span className="text-slate-500 text-sm">
                    {getExtension(file.name)} &middot; {formatSize(file.size)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </Section>
    </div>
  )
}

export default Home
