import { useState } from 'react'
import { Map, School, Sparkles, X } from 'lucide-react'
import campusMapLandscape from '../assets/handbook/campus-map-landscape.jpg'
import campusMapPortrait from '../assets/handbook/campus-map-portrait.jpg'

const abbreviations = [
  { shortName: '忠', fullName: '忠勤樓' },
  { shortName: '商', fullName: '商學大樓' },
  { shortName: '工', fullName: '工學館' },
  { shortName: '人', fullName: '人言大樓', desc: '逢甲最高的建築，部分通識課/中文課/英文課的地點，人言一樓及樓下有座位區供吃飯休息，但是人言不可以睡覺喔' },
  { shortName: '建', fullName: '建築館' },
  { shortName: '土', fullName: '土木水利館' },
  { shortName: '學', fullName: '學思樓' },
  { shortName: '紀', fullName: '丘逢甲紀念館' },
  { shortName: '育', fullName: '育樂館' },
  { shortName: '人社', fullName: '人文社會館' },
  { shortName: '圖', fullName: '圖書館', desc: '一樓有座位區可以睡覺，但不能帶食物及飲料喔，樓上也有讀書的地方' },
  { shortName: '資電', fullName: '資訊電機館', desc: '資訊系學生在逢甲最常去的建築，這邊有各位接下來四年大部分必選修科目的教室喔，資訊系的系辦公室就在資電二樓' },
  { shortName: '語', fullName: '語文大樓' },
  { shortName: '電通', fullName: '電子通訊館' },
  { shortName: '理', fullName: '理學大樓' },
  { shortName: '科航', fullName: '科學與航太館' },
]

function CampusGuideSection() {
  const [selectedBuilding, setSelectedBuilding] = useState(null)

  return (
    <section id="campus-guide" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-10">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-white px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
                <Sparkles size={18} />
                Extra
              </p>

              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Extra | 逢甲小知識
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-zinc-800 md:text-lg md:leading-9">
                原來忠、育、資、紀等，皆是逢甲校園中建築物的縮寫。點擊下方縮寫來看看它是哪棟大樓吧！
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#18181b] md:text-base">
                <School size={20} />
                新生常見校園縮寫整理
              </div>
            </div>

            <div className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <Map size={26} />
                縮寫對照表
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {abbreviations.map((item) =>
                  item.desc ? (
                    <button
                      key={`${item.shortName}-${item.fullName}`}
                      onClick={() => setSelectedBuilding(item)}
                      className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-3 shadow-[3px_3px_0_#18181b] transition hover:-translate-y-1 hover:bg-[#ffe993] hover:shadow-[5px_5px_0_#18181b]"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-zinc-950 bg-white text-base font-black">
                        {item.shortName}
                      </span>
                      <span className="text-sm font-bold leading-5 text-zinc-800">
                        {item.fullName}
                      </span>
                    </button>
                  ) : (
                    <div
                      key={`${item.shortName}-${item.fullName}`}
                      className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-3 shadow-[3px_3px_0_#18181b]"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-zinc-950 bg-white text-base font-black">
                        {item.shortName}
                      </span>
                      <span className="text-sm font-bold leading-5 text-zinc-800">
                        {item.fullName}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border-4 border-zinc-950 bg-gray-200 shadow-[6px_6px_0_#18181b]">
            <picture>
              <source media="(min-width: 768px)" srcSet={campusMapLandscape} />
              <img
                src={campusMapPortrait}
                alt="逢甲大學校區平面圖"
                className="max-h-[720px] w-full bg-white object-contain"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Modal for Building Detail */}
      {selectedBuilding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-lg border-4 border-zinc-950 bg-white shadow-[8px_8px_0_#18181b]">
            <div className="flex items-center justify-between border-b-4 border-zinc-950 bg-[#ffe993] p-4">
              <h3 className="text-xl font-black">
                {selectedBuilding.shortName} - {selectedBuilding.fullName}
              </h3>
              <button
                onClick={() => setSelectedBuilding(null)}
                className="grid h-8 w-8 place-items-center rounded-full border-2 border-zinc-950 bg-white hover:bg-zinc-100"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-5">
              <p className="text-base font-bold leading-7 text-zinc-800">
                {selectedBuilding.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CampusGuideSection

