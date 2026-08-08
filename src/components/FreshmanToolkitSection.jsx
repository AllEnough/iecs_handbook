import { Bike, BookOpenCheck, Bus, CalendarDays, ExternalLink, MapPinned, Soup } from 'lucide-react'

const courseSteps = [
  '至逢甲人資訊服務入口登入 NID。',
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

const foodCategories = [
  {
    title: '便宜吃飽',
    desc: '適合午餐、晚餐，不知道吃什麼時可以先往這類找。',
  },
  {
    title: '快速解決',
    desc: '適合兩堂課中間空檔不長，買完可以快速回教室。',
  },
  {
    title: '飲料與點心',
    desc: '適合下午沒精神、讀書或討論作業時補充一下。',
  },
  {
    title: '宵夜與聚餐',
    desc: '適合宿舍同學、組員或系上朋友一起吃飯聊天。',
  },
]

function FreshmanToolkitSection() {
  return (
    <section id="freshman-toolkit" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="motion-reveal rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
            <BookOpenCheck size={18} />
            Extra
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Extra | 新生實用工具包
          </h2>

          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-zinc-800 md:text-lg md:leading-9">
            這裡整理入學初期最容易用到的選課、行事曆、吃飯與福星校區往返資訊。實際日期、路線與公告仍請以學校官方資訊為準。
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <CalendarDays size={26} />
                選課與課表
              </h3>

              <div className="mt-5 space-y-5">
                <div className="rounded-md border-2 border-zinc-950 bg-[#fff8e8] p-4">
                  <p className="text-lg font-black text-blue-600">8/20（四）9:00 起</p>
                  <p className="mt-1 text-base font-black">可查詢課表</p>
                  <ol className="mt-3 list-inside list-decimal space-y-1 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                    {courseSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="mt-3 rounded-md border-2 border-zinc-950 bg-[#ffe993] p-3 text-sm font-black leading-6 text-zinc-800">
                    必修科目會由系統直接轉入個人課表，其他選修科目請於加退選期間自行上網辦理。
                  </p>
                </div>

                <div className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4">
                  <p className="text-lg font-black text-blue-600">8/26（三）至 8/27（四）9:00-24:00</p>
                  <p className="mt-1 text-base font-black">可進行網路加退選</p>
                  <ol className="mt-3 list-inside list-decimal space-y-1 text-sm font-bold leading-7 text-zinc-800 md:text-base">
                    {addDropNotes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://myfcu.fcu.edu.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b]"
                >
                  逢甲人資訊服務入口
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://course.fcu.edu.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-white px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-[#ffe993] hover:shadow-[4px_4px_0_#18181b]"
                >
                  選課系統
                  <ExternalLink size={16} />
                </a>
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
            </article>

            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <CalendarDays size={26} />
                115 學年度行事曆
              </h3>

              <p className="mt-4 text-base font-bold leading-8 text-zinc-800">
                學校行事曆會列出開學、加退選、考試週、假期與重要行政日期。網站先放官方 PDF 入口，詳細日期請以學校公告版本為準。
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {['開學與註冊', '加退選期間', '期中考週', '期末考週'].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 text-center text-base font-black shadow-[3px_3px_0_#18181b]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/sites/118/2026/04/08110307/逢甲-115學年度-行事曆115.02.25會議後-公告.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pressable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-base font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] sm:w-auto"
              >
                查看官方行事曆 PDF
                <ExternalLink size={18} />
              </a>
            </article>

            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <Soup size={26} />
                校園附近美食
              </h3>

              <p className="mt-4 text-base font-bold leading-8 text-zinc-800">
                美食資訊先用情境分類，之後可以再補上學長姐推薦名單。第一次來逢甲時，先用用途找會比硬背店名更快。
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {foodCategories.map((category) => (
                  <div
                    key={category.title}
                    className="rounded-md border-2 border-zinc-950 bg-[#fff8e8] p-4 shadow-[3px_3px_0_#18181b]"
                  >
                    <p className="text-lg font-black">{category.title}</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
                      {category.desc}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <MapPinned size={26} />
                福星校區到校本部
              </h3>

              <p className="mt-4 text-base font-bold leading-8 text-zinc-800">
                福星校區地址為臺中市西屯區福星北路 98 號，校本部大門地址為臺中市西屯區文華路 100 號。實際時間會受路線、天氣與交通狀況影響。
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 shadow-[3px_3px_0_#18181b]">
                  <p className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <MapPinned size={20} />
                    走路
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
                    建議抓約 15-20 分鐘，第一次走可以多預留一些時間。
                  </p>
                </div>

                <div className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 shadow-[3px_3px_0_#18181b]">
                  <p className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <Bike size={20} />
                    YouBike
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
                    可查詢福星校區與校本部附近站點，騎乘時間通常比步行短，尖峰時段請先確認車輛與空位。
                  </p>
                </div>

                <div className="rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-4 shadow-[3px_3px_0_#18181b]">
                  <p className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <Bus size={20} />
                    公車
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
                    可使用台中市公車動態或 Google Maps 查詢即時路線；上車前記得確認方向與站名。
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/逢甲大學福星校區/逢甲大學"
                target="_blank"
                rel="noopener noreferrer"
                className="pressable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-base font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] sm:w-auto"
              >
                開啟福星校區到校本部導航
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
