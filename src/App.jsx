import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lang, setLang] = useState('ar'); // اللغة الافتراضية

  // تحديث اتجاه الصفحة تلقائياً (RTL للـ عربي / LTR للـ إنجليزي)
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // إذا سجل المستخدم الدخول، نعرض لوحة التحكم
  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} lang={lang} />;
  }

  // واجهة الموقع (Landing Page)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar 
        onOpenAuth={() => setIsAuthOpen(true)} 
        lang={lang} 
        onToggleLang={() => setLang(lang === 'ar' ? 'en' : 'ar')} 
      />
      <Hero lang={lang} />
      <StatsBar lang={lang} />
      <Features lang={lang} />
      <Pricing lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={() => {
          setIsAuthOpen(false);
          setIsLoggedIn(true);
        }}
        lang={lang}
      />
    </div>
  );
}
