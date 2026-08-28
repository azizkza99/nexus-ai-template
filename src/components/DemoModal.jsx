import { useEffect, useRef } from 'react'
import { t } from '../translations'

export default function DemoModal({
  isOpen,
  onClose,
  onOpenDashboard,
  lang,
}) {
  const dialogRef = useRef(null)
  const primaryButtonRef = useRef(null)
  const previouslyFocusedRef = useRef(null)
  const currentText = t[lang].demo

  useEffect(() => {
    if (!isOpen) return undefined

    previouslyFocusedRef.current = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    primaryButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocusedRef.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        aria-describedby="demo-description"
        className="relative w-full max-w-lg space-y-6 rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
            {currentText.eyebrow}
          </p>
          <h2 id="demo-title" className="mt-3 text-2xl font-extrabold text-white">
            {currentText.title}
          </h2>
          <p id="demo-description" className="mt-3 text-sm leading-7 text-slate-400">
            {currentText.subtitle}
          </p>
        </div>

        <ul className="space-y-3 border-y border-slate-800 py-5">
          {currentText.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm text-slate-300">
              <span className="mt-0.5 text-indigo-400" aria-hidden="true">
                ✓
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col-reverse gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            {currentText.close}
          </button>
          <button
            ref={primaryButtonRef}
            type="button"
            onClick={onOpenDashboard}
            className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            {currentText.open}
          </button>
        </div>
      </section>
    </div>
  )
}
