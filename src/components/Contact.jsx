import { useState } from 'react'
import { t } from '../translations'

function getLabel(options, value) {
  return options.find((option) => option.value === value)?.label ?? value
}

export default function Contact({ lang }) {
  const currentText = t[lang].planner
  const [form, setForm] = useState({
    team: 'small',
    priority: 'workflow',
    output: 'prototype',
  })
  const [hasSummary, setHasSummary] = useState(false)

  const summary = hasSummary
    ? currentText.resultDesc
        .replace('{team}', getLabel(currentText.teams, form.team))
        .replace(
          '{priority}',
          getLabel(currentText.priorities, form.priority),
        )
        .replace('{output}', getLabel(currentText.outputs, form.output))
    : ''

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setHasSummary(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setHasSummary(true)
  }

  return (
    <section
      id="planner"
      className="scroll-mt-20 border-t border-slate-900 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-400 sm:text-sm">
            {currentText.tag}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {currentText.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            {currentText.desc}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <label className="block text-xs font-semibold text-slate-300">
              <span className="mb-2 block">{currentText.team}</span>
              <select
                value={form.team}
                onChange={(event) => updateField('team', event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {currentText.teams.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-xs font-semibold text-slate-300">
              <span className="mb-2 block">{currentText.priority}</span>
              <select
                value={form.priority}
                onChange={(event) =>
                  updateField('priority', event.target.value)
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {currentText.priorities.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-xs font-semibold text-slate-300">
              <span className="mb-2 block">{currentText.output}</span>
              <select
                value={form.output}
                onChange={(event) => updateField('output', event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {currentText.outputs.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-500 hover:to-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            {currentText.submit}
          </button>

          <div className="mt-6 min-h-28" aria-live="polite">
            {summary ? (
              <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-6">
                <h3 className="font-bold text-white">{currentText.resultTitle}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{summary}</p>
                <button
                  type="button"
                  onClick={() => setHasSummary(false)}
                  className="mt-4 rounded-lg text-xs font-semibold text-indigo-300 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {currentText.reset}
                </button>
              </div>
            ) : (
              <p className="pt-4 text-center text-xs text-slate-600">
                {lang === 'ar'
                  ? 'لن تُطلب أو تُرسل أي معلومات شخصية.'
                  : 'No personal information will be requested or sent.'}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
