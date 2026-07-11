import { Building2, UsersRound } from 'lucide-react'
import memberPhoto from '../assets/handbook/members.jpg'

function AboutSection() {
  return (
    <section id="student-association" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10 md:p-8">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#dff0ff] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
              <UsersRound size={18} />
              Mission 01
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Mission 01 | 認識系學會
            </h2>

            <p className="mt-5 text-base font-medium leading-8 text-zinc-800 md:text-lg md:leading-9">
              系學會是由系上學生組成的學生自治組織，主要負責舉辦系上活動、協助新生融入大學生活，也會在同學需要幫助時提供資訊與協助。對新生來說，系學會就像是你進入資工系後第一個可以詢問、認識與依靠的學長姐窗口。敬請期待之後我們會帶來怎麼樣的活動吧！
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] md:text-base">
              <Building2 size={20} />
              系學會辦公室：資電B30
            </div>
          </div>

          <div className="overflow-hidden rounded-md border-4 border-zinc-950 bg-gray-200 shadow-[6px_6px_0_#18181b]">
            <img
              src={memberPhoto}
              alt="系學會成員合照"
              className="aspect-video h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
