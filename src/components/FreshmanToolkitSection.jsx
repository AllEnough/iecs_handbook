import { Bike, BookOpenCheck, Bus, CalendarDays, ExternalLink, MapPinned } from 'lucide-react'

const courseSteps = [
  '至 MyFCU 逢甲人資訊服務入口登入 NID。',
  '進入「課程學習」。',
  '點選「我的課表」。',
  '進入「修習課表」查詢。',
]

const addDropNotes = [
  '請於選課系統網頁自行上網辦理加退選登記。',
  '請留意選課系統內的「課程公告」。',
  '8/31（一）下午公布上網登記結果。',
  '每次登錄選課作業閒置時間以 10 分鐘為限。',
]

const academicDates = [
  { label: '開學日', date: '9/8（二）' },
  { label: '加退選期間', date: '9/4（五）- 9/17（四）' },
  { label: '退選截止日', date: '11/9（一）' },
  { label: '期中統籌考', date: '10/28（三）' },
  { label: '期末統籌考', date: '12/28（一）- 12/29（二）' },
]

function FreshmanToolkitSection() {
  return (
    <section id="freshman-toolkit" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="motion-reveal rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
            <BookOpenCheck size={18} />
            Guide 01
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Guide 01 | 新生實用工具包
          </h2>

          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-zinc-800 md:text-lg md:leading-9">
            這裡整理入學初期最容易用到的選課、行事曆與福星宿舍往返學校資訊。實際日期、路線與公告仍請以學校官方資訊為準。
          </p>

          <div className="mt-8">
            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h3 className="flex items-center gap-2 text-2xl font-black">
                  <CalendarDays size={26} />
                  選課與課表
                </h3>

                <a
                  href="https://service825.fcu.edu.tw/infofiles/F_0holq1m0eea7af34fd5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-white px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-[#ffe993] hover:shadow-[4px_4px_0_#18181b]"
                >
                  選課行事曆 PDF
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="mt-5 space-y-5">
                <div className="grid gap-4 rounded-md border-2 border-zinc-950 bg-[#fff8e8] p-4 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <p className="text-lg font-black text-blue-600">8/20（四）9:00 起</p>
                    <p className="mt-1 text-base font-black">可查詢課表</p>
                    <ol className="mt-3 list-inside list-decimal space-y-1 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                      {courseSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <a
                    href="https://myfcu.fcu.edu.tw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable inline-flex items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] md:min-w-44"
                  >
                    逢甲人資訊服務入口
                    <ExternalLink size={16} />
                  </a>

                  <p className="rounded-md border-2 border-zinc-950 bg-[#ffe993] p-3 text-sm font-black leading-6 text-zinc-800 md:col-span-2">
                    必修科目會由系統直接轉入個人課表，其他選修科目請於加退選期間自行上網辦理。
                  </p>
                </div>

                <div className="grid gap-4 rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <p className="text-lg font-black text-blue-600">8/26（三）至 8/27（四）9:00-24:00</p>
                    <p className="mt-1 text-base font-black">可進行網路加退選</p>
                    <ol className="mt-3 list-inside list-decimal space-y-1 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                      {addDropNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ol>
                  </div>

                  <a
                    href="https://course.fcu.edu.tw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable inline-flex items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] md:min-w-36"
                  >
                    選課系統
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <CalendarDays size={26} />
                115 學年度行事曆
              </h3>

              <p className="mt-4 text-base font-bold leading-8 text-zinc-800">
                以下僅整理 115 學年度上學期新生較常用到的日期，完整一整學年度內容請點選下方PDF 查看。
              </p>

              <div className="mt-5 grid gap-3">
                {academicDates.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 shadow-[3px_3px_0_#18181b] sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <p className="text-base font-black">{item.label}</p>
                    <p className="text-sm font-black text-blue-600 sm:text-base">{item.date}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/sites/118/2026/04/08110307/逢甲-115學年度-行事曆115.02.25會議後-公告.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pressable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-base font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] sm:w-auto"
              >
                查看逢甲大學115學年度行事曆 PDF
                <ExternalLink size={18} />
              </a>
            </article>

            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <MapPinned size={26} />
                福星宿舍如何到學校
              </h3>

              <p className="mt-4 text-base font-bold leading-8 text-zinc-800">
                以下時間為大約估計，實際時間會受等車、路況與步行速度影響。第一次上課建議多預留一些時間。
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 shadow-[3px_3px_0_#18181b]">
                  <p className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <MapPinned size={20} />
                    走路
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
                    約 10-15 分鐘。
                  </p>
                </div>

                <div className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 shadow-[3px_3px_0_#18181b]">
                  <p className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <Bus size={20} />
                    公車
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
                    從「僑光科技大學」站到「逢甲大學（福星路）」站約 3-5 分鐘。
                  </p>
                </div>

                <div className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 shadow-[3px_3px_0_#18181b]">
                  <p className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <Bike size={20} />
                    YouBike
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
                    約 7 分鐘。可搭配下方導航地圖確認路線與附近站點。
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/逢甲大學福星校區學生宿舍/逢甲大學"
                target="_blank"
                rel="noopener noreferrer"
                className="pressable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-base font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] sm:w-auto"
              >
                開啟福星宿舍到學校導航
                <ExternalLink size={18} />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreshmanToolkitSection
