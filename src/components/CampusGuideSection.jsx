import { Map, School, Sparkles } from 'lucide-react'
import campusMapLandscape from '../assets/handbook/campus-map-landscape.jpg'
import campusMapPortrait from '../assets/handbook/campus-map-portrait.jpg'

const abbreviations = [
  ['忠', '忠勤樓'],
  ['商', '商學大樓'],
  ['工', '工學館'],
  ['人', '人言大樓'],
  ['建', '建築館'],
  ['土', '土木水利館'],
  ['學', '學思樓'],
  ['紀', '丘逢甲紀念館'],
  ['育', '育樂館'],
  ['人社', '人文社會館'],
  ['圖', '圖書館'],
  ['資電', '資訊電機館'],
  ['語', '語文大樓'],
  ['電通', '電子通訊館'],
  ['理', '理學大樓'],
  ['科航', '科學與航太館'],
]

function CampusGuideSection() {
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
                原來忠、育、資、紀等，皆是逢甲校園中建築物的縮寫。
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

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {abbreviations.map(([shortName, fullName]) => (
                  <div
                    key={`${shortName}-${fullName}`}
                    className="flex items-center gap-3 rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-3 shadow-[3px_3px_0_#18181b]"
                  >
                    <span className="grid h-10 min-w-10 place-items-center rounded-md border-2 border-zinc-950 bg-[#ffe993] text-base font-black">
                      {shortName}
                    </span>
                    <span className="text-base font-bold leading-6 text-zinc-800">
                      {fullName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border-4 border-zinc-950 bg-gray-200 shadow-[6px_6px_0_#18181b]">
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
    </section>
  )
}

export default CampusGuideSection
