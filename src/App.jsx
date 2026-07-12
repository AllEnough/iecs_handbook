import { useState } from 'react'
import { ArrowUp, ChevronRight, Code2, Menu, Sparkles, X } from 'lucide-react'
import AboutSection from './components/AboutSection'
import CampusGuideSection from './components/CampusGuideSection'
import CampSection from './components/CampSection'
import ContactSection from './components/ContactSection'
import FeeSection from './components/FeeSection'
import MerchSection from './components/MerchSection'
import ScheduleSection from './components/ScheduleSection'
import TransportSection from './components/TransportSection'
import iecsLogo from './assets/handbook/iecs-logo.png'

const navItems = [
  { label: '認識系學會', href: '#student-association' },
  { label: '迎新宿營', href: '#camp' },
  { label: '系會費', href: '#fee' },
  { label: '系服資訊', href: '#shirt' },
  { label: '聯絡我們', href: '#contact' },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#fff8e8] text-zinc-950">
      <header className="sticky top-0 z-50 border-b-4 border-zinc-950 bg-[#fff8e8]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 text-lg font-black tracking-wide"
          >
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border-2 border-zinc-950 bg-zinc-950 shadow-[3px_3px_0_#facc15]">
              <img
                src={iecsLogo}
                alt="IECS logo"
                className="h-full w-full object-cover"
              />
            </span>
            IECS 新生手冊
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-zinc-950 bg-white shadow-[3px_3px_0_#18181b] md:hidden"
            aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t-2 border-zinc-950 bg-[#fff8e8] px-5 pb-5 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md border-2 border-zinc-950 bg-white px-4 py-3 text-base font-bold shadow-[3px_3px_0_#18181b]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl content-center gap-10 px-5 py-14 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-24"
      >
        <div className="flex flex-col items-start justify-center">
          <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#dff0ff] px-4 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
            <Sparkles size={18} />
            Mission Start
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            歡迎加入逢甲大學資訊工程學系 IECS！
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-zinc-800 md:text-xl md:leading-9">
            這份線上新生手冊會帶你了解入學前的重要資訊，包含聯絡資訊、系學會、迎新宿營、系會費、系服資訊、校園地圖與常見問題。
          </p>

          <a
            href="#student-association"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-4 border-zinc-950 bg-[#ffe993] px-8 py-4 text-lg font-black shadow-[5px_5px_0_#18181b] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#18181b]"
          >
            開始探索
            <ChevronRight size={22} strokeWidth={3} />
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="w-full max-w-sm border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b]">
            <div className="mb-4 flex items-center justify-between border-b-2 border-zinc-950 pb-4">
              <div className="flex gap-2">
                <span className="h-4 w-4 bg-red-400" />
                <span className="h-4 w-4 bg-yellow-300" />
                <span className="h-4 w-4 bg-green-400" />
              </div>
              <Code2 size={26} className="text-blue-500" />
            </div>

            <h2 className="text-2xl font-black">快速前往</h2>

            <ul className="mt-5 space-y-3 text-base font-bold leading-7">
              <li>
                <a href="#student-association" className="transition hover:text-blue-600 hover:underline">Mission 01 | 認識系學會</a>
              </li>
              <li>
                <a href="#camp" className="transition hover:text-blue-600 hover:underline">Mission 02 | 解鎖迎新宿營</a>
              </li>
              <li>
                <a href="#fee" className="transition hover:text-blue-600 hover:underline">Mission 03 | 系會費與會員福利</a>
              </li>
              <li>
                <a href="#shirt" className="transition hover:text-blue-600 hover:underline">Mission 04 | 系服與周邊</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-blue-600 hover:underline">Final Mission | 聯絡我們</a>
              </li>
              <li>
                <a href="#schedule" className="transition hover:text-blue-600 hover:underline">Extra | 活動預告與逢甲小知識</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <AboutSection />
      <CampSection />
      <FeeSection />
      <MerchSection />
      <ContactSection />
      <ScheduleSection />
      <TransportSection />
      <CampusGuideSection />

      <a
        href="#top"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full border-4 border-zinc-950 bg-[#ffe993] text-zinc-950 shadow-[4px_4px_0_#18181b] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#18181b] md:bottom-10 md:right-10"
        aria-label="回到頂部"
      >
        <ArrowUp size={28} strokeWidth={3} />
      </a>
    </main>
  )
}

export default App
