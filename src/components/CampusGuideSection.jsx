import { useState } from 'react'
import { Map, School, Sparkles, X, MapPin, Image as ImageIcon } from 'lucide-react'
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
                {abbreviations.map(([shortName, fullName]) => (
                  <button
                    key={`${shortName}-${fullName}`}
                    onClick={() => setSelectedBuilding({ shortName, fullName })}
                    className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#f8fbff] p-3 shadow-[3px_3px_0_#18181b] transition hover:-translate-y-1 hover:bg-[#ffe993] hover:shadow-[5px_5px_0_#18181b]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-zinc-950 bg-white text-base font-black">
                      {shortName}
                    </span>
                    <span className="text-sm font-bold leading-5 text-zinc-800">
                      {fullName}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="overflow-hidden rounded-t-lg border-4 border-b-0 border-zinc-950 bg-gray-200">
              <picture>
                <source media="(min-width: 768px)" srcSet={campusMapLandscape} />
                <img
                  src={campusMapPortrait}
                  alt="逢甲大學校區平面圖"
                  className="max-h-[720px] w-full bg-white object-contain"
                />
              </picture>
            </div>
            <div className="grid gap-3 rounded-b-lg border-4 border-zinc-950 bg-white p-4 shadow-[6px_6px_0_#18181b] sm:grid-cols-2">
              <a
                href={campusMapLandscape}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-zinc-950 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#facc15]"
              >
                <ImageIcon size={18} />
                點擊查看高畫質大圖
              </a>
              <a
                href="https://maps.app.goo.gl/r6m8R58bE1s8R1r48"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#e8f4ff] py-3 text-sm font-black text-zinc-950 transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#18181b]"
              >
                <MapPin size={18} />
                開啟 Google Maps 導航
              </a>
            </div>
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
              <div className="flex aspect-video w-full items-center justify-center rounded-md border-2 border-zinc-950 bg-gray-200">
                <span className="text-sm font-bold text-zinc-500">照片準備中...</span>
              </div>
              <p className="mt-4 text-base font-bold leading-7 text-zinc-800">
                這是{selectedBuilding.fullName}的簡介。我們將在日後補充更多關於這棟建築物的實景照片與相關資訊！
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CampusGuideSection

