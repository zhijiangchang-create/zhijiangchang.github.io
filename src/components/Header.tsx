import { Link } from 'react-router-dom'

function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#updates', label: 'Updates' },
    { href: '#blog', label: 'Blog' },
    { href: '#links', label: 'Links' },
    { href: '#downloads', label: 'Downloads' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-sky-700 hover:text-sky-600 transition-colors">
          Zhijiang Chang
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
