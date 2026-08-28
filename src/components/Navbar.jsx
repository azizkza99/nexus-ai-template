import { useState } from 'react'
import { t } from '../translations'

export default function Navbar({ onOpenDemo, lang, onToggleLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const currentText = t[lang].nav
  const links = [
    { href: '#features', label: currentText.features },
    { href: '#architecture', label: currentText.solutions },
    { href: '#pricing', label: currentText.pricing },
    { href: '#planner', label: currentText.contact },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-900 bg-slate-950/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'}
      >
        <a
          href="#top"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          onClick={closeMenu}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-indigo-500/20">
            N
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white" dir="ltr">
            Nexus<span className="text-indigo-400">-AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={currentText.languageLabel}
            className="rounded-xl px-3 py-2 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            dir="ltr"
          >
            {currentText.langBtn}
          </button>
          <button
            type="button"
            onClick={onOpenDemo}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            {currentText.dashboard}
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={currentText.languageLabel}
            className="rounded-lg px-3 py-2 text-xs font-semibold text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            dir="ltr"
          >
            {currentText.langBtn}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? currentText.closeMenu : currentText.openMenu}
            className="rounded-lg p-2 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span aria-hidden="true" className="text-xl">
              {mobileMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-slate-900 bg-slate-950 px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                closeMenu()
                onOpenDemo()
              }}
              className="mt-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {currentText.dashboard}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
