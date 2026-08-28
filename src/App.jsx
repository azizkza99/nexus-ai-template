import { useEffect, useState } from 'react'
import DemoModal from './components/DemoModal'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import StatsBar from './components/StatsBar'
import Testimonials from './components/Testimonials'
import { t } from './translations'

const LANGUAGE_STORAGE_KEY = 'nexus-language:v1'

function getInitialLanguage() {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en'
      ? 'en'
      : 'ar'
  } catch {
    return 'ar'
  }
}

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    const copy = t[lang].meta
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.title = copy.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', copy.title)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', copy.description)

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }, [lang])

  const openDashboard = () => {
    setIsDemoOpen(false)
    setShowDashboard(true)
  }

  if (showDashboard) {
    return (
      <Dashboard
        onBack={() => setShowDashboard(false)}
        lang={lang}
        onToggleLang={() => setLang((current) => (current === 'ar' ? 'en' : 'ar'))}
      />
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <a className="skip-link" href="#main-content">
        {lang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}
      </a>
      <Navbar
        onOpenDemo={() => setIsDemoOpen(true)}
        lang={lang}
        onToggleLang={() => setLang((current) => (current === 'ar' ? 'en' : 'ar'))}
      />
      <main id="main-content">
        <Hero lang={lang} onOpenDemo={() => setIsDemoOpen(true)} />
        <StatsBar lang={lang} />
        <Features lang={lang} />
        <Pricing lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenDashboard={openDashboard}
        lang={lang}
      />
    </div>
  )
}
