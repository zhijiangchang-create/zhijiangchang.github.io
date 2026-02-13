export interface Frontmatter {
  title: string
  date: string
  description: string
}

export function parseFrontmatter(content: string): { meta: Frontmatter; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return {
      meta: { title: '', date: '', description: '' },
      content: content,
    }
  }

  const frontmatterStr = match[1]
  const bodyContent = match[2]

  const meta: Frontmatter = { title: '', date: '', description: '' }

  frontmatterStr.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return

    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()

    if (key === 'title') meta.title = value
    if (key === 'date') meta.date = value
    if (key === 'description') meta.description = value
  })

  return { meta, content: bodyContent }
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
