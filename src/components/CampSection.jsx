import { AtSign, CalendarDays, MapPin, QrCode } from 'lucide-react'
import campPhoto from '../assets/handbook/camp.jpg'
import campIgQr from '../assets/handbook/camp-ig-qr.png'

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
              不管你是活潑外向，還是害羞慢熱的同學，宿營都會是豐富你們學生活的重要活動！詳細資訊可以追蹤我們的IG帳號！！歡迎你們一起來參加！
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="rounded-full border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] md:text-base">
                報名與繳費方式：請依活動 IG 與系學會公告為準
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] md:text-base">
                <AtSign size={20} />
                活動 IG：
                <a
                  href="https://instagram.com/115.fcu.7camping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition hover:underline"
                >
                  @115.fcu.7camping
                </a>
              </div>
              <div className="grid gap-4 rounded-lg border-2 border-zinc-950 bg-white p-4 shadow-[3px_3px_0_#18181b] sm:grid-cols-[120px_1fr] sm:items-center">
                <img
                  src={campIgQr}
                  alt="115.fcu.7camping 迎新宿營 Instagram QR Code"
                  className="mx-auto w-32 rounded-md border-2 border-zinc-950 bg-white sm:w-full"
                />
                <div>
                  <h3 className="flex items-center gap-2 text-base font-black">
                    <QrCode size={20} />
                    掃描 QR Code 追蹤宿營 IG
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-700">
                    最新報名、活動提醒與公告會以官方貼文為準，也可以直接點上方 IG 連結前往。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampSection
