import { AtSign, CalendarDays, MapPin } from 'lucide-react'
import campPhoto from '../assets/handbook/camp.jpg'

function CampSection() {
  return (
    <section id="camp" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[8px_8px_0_#18181b] md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10 md:p-8">
          <div className="order-2 overflow-hidden rounded-md border-4 border-zinc-950 bg-gray-200 shadow-[6px_6px_0_#18181b] md:order-1">
            <img
              src={campPhoto}
              alt="迎新宿營活動合照"
              className="aspect-video h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-white px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
              <CalendarDays size={18} />
              Mission 02
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Mission 02 | 迎新宿營
            </h2>

            <p className="mt-3 inline-flex items-center gap-2 text-xl font-black text-zinc-900 md:text-2xl">
              <MapPin size={22} className="text-red-500" />
              10/2 - 10/4 翔園文旅
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-zinc-800 md:text-lg md:leading-9">
              注意注意！！資訊系好久沒有到校外辦迎新宿營活動了！這次還是難得的7系合辦，也就是說各位資訊系的新鮮人可以認識到中文、外文、自控、通訊、電子與電機系的同學！宿營可以說是大一新鮮人進入大學後的第一個大型活動，透過各種遊戲、闖關與晚會，認識系上同學還能結交外系朋友。不管你是外向、慢熟，還是剛來逢甲什麼都不熟，宿營都會是你打開大學生活一次難得的機會。
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="rounded-full border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] md:text-base">
                報名方式：線上匯款 or 開學後在資電B30繳費
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] md:text-base">
                <AtSign size={20} />
                活動 IG：@115.fcu.7camping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampSection
