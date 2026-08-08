import { useEffect, useState } from 'react'
import { CalendarClock, Gift, PartyPopper, Star, Store, X } from 'lucide-react'
import growthCampPhoto from '../assets/handbook/growth-camp.jpg'
import infoNightPhoto from '../assets/handbook/info-night.jpg'
import straightAIpadPoster from '../assets/handbook/straight-a-ipad.jpg'
import straightAMacbookPoster from '../assets/handbook/straight-a-macbook.jpg'
import straightA5gPoster from '../assets/handbook/straight-a-5g.jpg'

const events = [
  {
    date: '9/1 - 9/3',
    title: '新鮮人成長營',
    note: '這三天活動視同正課，請務必出席‼️若無法出席，需事先使用學校請假系統請假！',
  },
  {
    date: '9月初',
    title: '迎新茶會',
    note: '想多了解系學會與系上的活動嗎？來參加迎新茶會就對了，帶你拉近彼此間的距離。',
  },
  {
    date: '12月初',
    title: '耶誕晚會',
    note: '一想到12月最期待的就是聖誕節，來參加我們的耶誕晚會，讓你在冰冷的冬天，遇見暖心的人。',
  },
  {
    date: '3月中',
    title: '資電盃',
    note: '想在球場上熱血的揮灑汗水嗎？或是和好朋友一起來一場有趣的趣味競賽，那你絕對不能錯過由資電學院各科系聯合舉辦的資電盃！',
  },
  {
    date: '5月初',
    title: '資訊之夜',
    note: '一學年很快就要結束了，讓我們為自己這一年的付出做一個小小的總結。系學會要來回饋系上，誠心邀請系上的大家一起來同歡共樂。',
    image: infoNightPhoto,
    imageAlt: '資訊之夜活動合照',
  },
]

const straightAPosters = [
  {
    src: straightAIpadPoster,
    alt: 'Straight A BTS 開學季 iPad 優惠海報',
    title: 'iPad 優惠',
  },
  {
    src: straightAMacbookPoster,
    alt: 'Straight A BTS 開學季 MacBook 優惠海報',
    title: 'MacBook 優惠',
  },
  {
    src: straightA5gPoster,
    alt: 'Straight A 與台灣大哥大 5G 校園資費方案海報',
    title: '5G 校園資費',
  },
]

function ScheduleSection() {
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false)

  const closeSponsorModal = () => setIsSponsorModalOpen(false)

  useEffect(() => {
    if (!isSponsorModalOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeSponsorModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSponsorModalOpen])

  return (
    <section id="schedule" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="motion-reveal rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#dff0ff] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
              <Star size={18} />
              Extra
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Extra | 活動與福利
            </h2>
          </div>

          <div className="photo-frame mt-8 overflow-hidden rounded-lg border-4 border-zinc-950 bg-white shadow-[5px_5px_0_#18181b]">
            <img
              src={growthCampPhoto}
              alt="新鮮人成長營活動合照"
              className="aspect-video max-h-[360px] w-full object-cover object-[center_58%] md:aspect-[16/5]"
            />
          </div>

          <div className="mt-8 rounded-lg border-4 border-zinc-950 bg-[#f8fbff] p-5 shadow-[5px_5px_0_#18181b]">
            <h3 className="flex items-center gap-2 text-2xl font-black">
              <CalendarClock size={26} />
              活動時間軸
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {events.map((event, index) => (
                <article
                  key={event.title}
                  className={`lift-card flex min-h-full flex-col rounded-lg border-2 border-zinc-950 bg-white p-4 shadow-[3px_3px_0_#18181b] ${
                    index === events.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-zinc-950 bg-[#ffe993] shadow-[2px_2px_0_#18181b]">
                      <PartyPopper size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-black text-blue-600">
                        {event.date}
                      </p>
                      <h4 className="mt-1 text-xl font-black">{event.title}</h4>
                    </div>
                  </div>
                  <p className="mt-4 text-base font-medium leading-7 text-zinc-800">
                    {event.note}
                  </p>
                  {event.image && (
                    <div className="photo-frame mt-4 overflow-hidden rounded-md border-2 border-zinc-950 bg-white shadow-[3px_3px_0_#18181b]">
                      <img
                        src={event.image}
                        alt={event.imageAlt}
                        className="aspect-video h-full w-full object-cover"
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg border-4 border-zinc-950 bg-[#ffe993] p-5 shadow-[5px_5px_0_#18181b]">
            <h3 className="flex items-center gap-2 text-2xl font-black">
              <Gift size={26} />
              學生福利
            </h3>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <article className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[4px_4px_0_#18181b]">
                <h4 className="flex items-center gap-2 text-xl font-black">
                  <Gift size={22} />
                  資訊系學生福利
                </h4>

                <p className="mt-3 text-base font-bold leading-8 text-zinc-800">
                  逢甲資訊工程學系學生在 115 學年度可享副廠商品 8 折優惠（音頻與軟體商品除外）。另外也會有不定時團購與線上課程資訊，詳細內容請以系學會公告為準。
                </p>
              </article>

              <article className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[4px_4px_0_#18181b]">
                <h4 className="flex items-start gap-3 text-xl font-black leading-tight">
                  <Store size={22} className="mt-1 shrink-0" />
                  <span>
                    <span className="block sm:inline">🍎 Straight A</span>
                    <span className="block sm:inline sm:ml-1">逢甲大學校園門市</span>
                  </span>
                </h4>

                <p className="mt-3 text-base font-bold leading-8 text-zinc-800">
                  歡迎資訊系的同學加入逢甲大學！門市目前有Apple教育優惠、BTS開學季與5G校園資費資訊。詳情點擊下方按鈕👇🏾
                </p>

                <button
                  type="button"
                  onClick={() => setIsSponsorModalOpen(true)}
                  className="pressable mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#dff0ff] px-4 py-3 text-base font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] sm:w-auto"
                >
                  查看 Straight A 優惠詳情
                  <Store size={18} />
                </button>
              </article>
            </div>
          </div>
        </div>
      </div>

      {isSponsorModalOpen && (
        <div
          className="motion-reveal fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/55 p-3 py-4 backdrop-blur-sm md:items-center md:p-4"
          role="presentation"
          onClick={closeSponsorModal}
        >
          <div
            className="motion-pop my-2 w-full max-w-5xl rounded-lg border-4 border-zinc-950 bg-white shadow-[8px_8px_0_#18181b] md:max-h-[88vh] md:overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="straight-a-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="top-0 z-10 flex items-start justify-between gap-3 border-b-4 border-zinc-950 bg-[#ffe993] p-4 md:sticky">
              <div className="min-w-0">
                <p className="text-sm font-black text-zinc-600">學生福利</p>
                <h3 id="straight-a-title" className="text-2xl font-black">
                  🍎 Straight A 優惠資訊
                </h3>
              </div>
              <button
                type="button"
                onClick={closeSponsorModal}
                aria-label="關閉 Straight A 優惠資訊"
                autoFocus
                className="pressable grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-zinc-950 bg-white hover:bg-zinc-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 p-5 md:p-6">
              <p className="rounded-md border-2 border-zinc-950 bg-[#e8f4ff] p-4 text-sm font-bold leading-7 text-zinc-800 shadow-[3px_3px_0_#18181b] md:text-base">
                🍎 Straight A 為 Apple 授權校園經銷門市，位於逢甲大學人言大樓 1 樓，提供 Apple 全系列產品、教育優惠、配件選購及售後服務。
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-lg border-4 border-zinc-950 bg-white p-4 shadow-[4px_4px_0_#18181b]">
                  <h4 className="text-xl font-black text-blue-600">🎓 Apple 教育優惠 × BTS 開學季</h4>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                    <li>📱 iPad 系列包含好禮自由選、配件優惠組合、指定信用卡分期優惠。</li>
                    <li>💻 MacBook 系列包含開學禮三選一、指定機型現折、AirPods 或品牌禮包等加碼優惠。</li>
                    <li>🎓 購買前可主動告知門市人員欲使用教育優惠。</li>
                  </ul>
                </article>

                <article className="rounded-lg border-4 border-zinc-950 bg-white p-4 shadow-[4px_4px_0_#18181b]">
                  <h4 className="text-xl font-black text-blue-600">📶 台灣大哥大5G校園資費方案</h4>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                    <li>✔ 新辦、攜碼皆可至門市諮詢申辦。</li>
                    <li>✔ 部分 Apple 產品可搭配資費享購機方案。</li>
                    <li>✔ 月租最低 599 元起，依方案不同可享不同購機優惠。</li>
                  </ul>
                  <p className="mt-3 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                    若正在考慮換手機、辦新門號，或想了解搭配資費是否更划算，也歡迎到門市由專人協助試算最適合的方案。
                  </p>
                </article>
              </div>

              <div className="rounded-lg border-4 border-zinc-950 bg-[#fff8e8] p-4 shadow-[4px_4px_0_#18181b]">
                <h4 className="text-xl font-black">📍 門市資訊</h4>
                <div className="mt-3 grid gap-2 text-sm font-bold leading-7 text-zinc-800 md:grid-cols-2 md:text-base">
                  <p>🏫 地點：逢甲大學人言大樓 1 樓</p>
                  <p>💬 LINE 官方帳號：@164hkzpu</p>
                  <p>📞 電話：04-2452-4971</p>
                  <p>🎓 教育優惠證明：學生證、在學證明或錄取通知書</p>
                </div>
                <p className="mt-4 rounded-md border-2 border-zinc-950 bg-[#ffe993] p-3 text-sm font-black leading-6 text-zinc-800">
                  實際優惠內容、價格、活動期間與適用條件，請以 Straight A 門市公告與現場說明為準。購買前請主動向門市人員確認教育優惠與校園資費方案適用條件。
                </p>
              </div>

              <div className="rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-4 shadow-[4px_4px_0_#18181b]">
                <h4 className="text-xl font-black">🚀 資訊系新生專屬</h4>
                <p className="mt-3 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                  如果不知道該選 MacBook 還是 iPad、需不需要搭配電信方案，歡迎加入 LINE 或到門市諮詢，我們會依照課程需求與預算，協助推薦最適合的大學四年使用的設備。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-black">🖼️ 優惠海報</h4>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {straightAPosters.map((poster) => (
                    <a
                      key={poster.title}
                      href={poster.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable block rounded-lg border-4 border-zinc-950 bg-white p-3 shadow-[4px_4px_0_#18181b] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#18181b]"
                    >
                      <img
                        src={poster.src}
                        alt={poster.alt}
                        loading="lazy"
                        className="max-h-[520px] w-full rounded-md border-2 border-zinc-950 bg-zinc-50 object-contain"
                      />
                      <p className="mt-3 text-center text-sm font-black text-zinc-800">
                        {poster.title}，點擊可開啟原圖
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={closeSponsorModal}
                className="pressable flex w-full items-center justify-center rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-base font-black shadow-[3px_3px_0_#18181b] hover:bg-white"
              >
                關閉 Straight A 優惠資訊
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ScheduleSection
