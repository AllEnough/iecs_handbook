import { CalendarClock, Gift, PartyPopper, Star } from 'lucide-react'
import infoNightPhoto from '../assets/handbook/info-night.jpg'

const events = [
  {
    date: '9/1 - 9/3',
    title: '新鮮人成長營',
    note: '這算是正式上課，請務必要出席喔！！',
  },
  {
    date: '9月初',
    title: '迎新茶會',
    note: '屆時會有抽家族的活動喔。',
  },
  {
    date: '12月初',
    title: '耶誕晚會',
    note: '這會是上學期的最後一個活動。',
  },
]

function ScheduleSection() {
  return (
    <section id="schedule" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#dff0ff] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
              <Star size={18} />
              Extra
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Extra | 活動預告與福利
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div className="rounded-lg border-4 border-zinc-950 bg-[#f8fbff] p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <CalendarClock size={26} />
                活動時間軸
              </h3>

              <div className="mt-6 space-y-5">
                {events.map((event) => (
                  <article key={event.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-zinc-950 bg-[#ffe993] shadow-[2px_2px_0_#18181b]">
                        <PartyPopper size={20} />
                      </span>
                      <span className="mt-2 h-full min-h-8 w-1 bg-zinc-950 last:hidden" />
                    </div>

                    <div className="flex-1 rounded-lg border-2 border-zinc-950 bg-white p-4 shadow-[3px_3px_0_#18181b]">
                      <p className="text-sm font-black text-blue-600">
                        {event.date}
                      </p>
                      <h4 className="mt-1 text-xl font-black">{event.title}</h4>
                      <p className="mt-2 text-base font-medium leading-7 text-zinc-800">
                        {event.note}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-4 border-zinc-950 bg-[#ffe993] p-5 shadow-[5px_5px_0_#18181b]">
              <div className="mb-5 overflow-hidden rounded-md border-4 border-zinc-950 bg-white shadow-[4px_4px_0_#18181b]">
                <img
                  src={infoNightPhoto}
                  alt="資訊之夜活動合照"
                  className="aspect-video h-full w-full object-cover"
                />
              </div>

              <h3 className="flex items-center gap-2 text-2xl font-black">
                <Gift size={26} />
                學生福利
              </h3>

              <p className="mt-5 text-base font-bold leading-8 text-zinc-800 md:text-lg md:leading-9">
                系學會與逢甲 Straight A 特約商店合作：只要是資訊工程學系的學生，都可以以 8 折的優惠購買所有的副廠商品
                <span className="font-black">（音頻與軟體除外）</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
