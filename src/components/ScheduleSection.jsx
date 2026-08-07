import { CalendarClock, Gift, PartyPopper, Star } from 'lucide-react'
import growthCampPhoto from '../assets/handbook/growth-camp.jpg'
import infoNightPhoto from '../assets/handbook/info-night.jpg'

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

function ScheduleSection() {
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

          <div className="motion-reveal photo-frame mt-8 overflow-hidden rounded-lg border-4 border-zinc-950 bg-white shadow-[5px_5px_0_#18181b]">
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
                  className={`motion-reveal lift-card flex min-h-full flex-col rounded-lg border-2 border-zinc-950 bg-white p-4 shadow-[3px_3px_0_#18181b] ${
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

          <div className="motion-reveal mt-6 rounded-lg border-4 border-zinc-950 bg-[#ffe993] p-5 shadow-[5px_5px_0_#18181b]">
            <h3 className="flex items-center gap-2 text-2xl font-black">
              <Gift size={26} />
              學生福利
            </h3>

            <p className="mt-5 text-base font-bold leading-8 text-zinc-800 md:text-lg md:leading-9">
              系學會與逢甲 Straight A 特約商店合作：逢甲資訊工程學系學生在 115 學年度可享副廠商品 8 折優惠（音頻與軟體商品除外）。另外也會有不定時團購與線上課程資訊，詳細內容請以系學會公告為準。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
