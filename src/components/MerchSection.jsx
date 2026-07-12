import { Bell, Shirt, Sparkles } from 'lucide-react'

function MerchSection() {
  return (
    <section id="shirt" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[8px_8px_0_#18181b] md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-10 md:p-8">
          <div className="rounded-lg border-4 border-zinc-950 bg-white p-6 text-center shadow-[6px_6px_0_#18181b]">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-zinc-950 bg-[#ffe993] shadow-[4px_4px_0_#18181b]">
              <Shirt size={46} strokeWidth={2.5} />
            </div>

            <p className="mt-6 inline-flex items-center gap-2 border-2 border-zinc-950 bg-zinc-950 px-4 py-2 text-lg font-black text-white shadow-[3px_3px_0_#facc15]">
              <Sparkles size={20} />
              Coming soon
            </p>
          </div>

          <div>
            <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-white px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
              <Shirt size={18} />
              Mission 04
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Mission 04 | 系服與周邊
            </h2>

            <p className="mt-5 text-base font-medium leading-8 text-zinc-800 md:text-lg md:leading-9">
              今年系學會將推出屬於 IECS 的系服與周邊，相關設計、價格、尺寸表與訂購方式，會在確認後公布於系學會 IG 與新生群。想第一時間看到最新資訊，記得追蹤{' '}
              <a
                href="https://instagram.com/fcu_iecs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 transition hover:underline"
              >
                @fcu_iecs
              </a>
              。
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] md:text-base">
              <Bell size={20} />
              最新消息將公布於系學會 IG 與新生群
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MerchSection
