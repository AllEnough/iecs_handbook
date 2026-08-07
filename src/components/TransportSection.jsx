import { Bus, Train, Car, MapPin, Compass } from 'lucide-react'

function TransportSection() {
  return (
    <section id="transport" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="motion-reveal rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
            <Compass size={18} />
            Guide
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            如何抵達逢甲
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-[#f8fbff] p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <Train size={26} />
                大眾運輸
              </h3>
              
              <div className="mt-5 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <Train size={20} />
                    高鐵台中站
                  </h4>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-base font-medium leading-7 text-zinc-800">
                    <li>搭乘免費快捷公車 160 至「逢甲大學」站</li>
                    <li>搭乘計程車約 20-30 分鐘即可抵達</li>
                  </ul>
                  <a
                    href="https://www.google.com/maps/dir/高鐵台中站/逢甲大學"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable mt-3 inline-flex items-center gap-2 rounded-md border-2 border-zinc-950 bg-white px-4 py-2 text-sm font-bold text-zinc-950 shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-[#ffe993] hover:shadow-[4px_4px_0_#18181b]"
                  >
                    <MapPin size={16} />
                    高鐵台中站到逢甲大學的導航
                  </a>
                </div>
                
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-black text-blue-600">
                    <Bus size={20} />
                    台中火車站
                  </h4>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-base font-medium leading-7 text-zinc-800">
                    <li>搭乘公車 25、33、35 至「逢甲大學」站</li>
                    <li>搭乘計程車約 30 分鐘即可抵達</li>
                  </ul>
                  <a
                    href="https://www.google.com/maps/dir/台中火車站/逢甲大學"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable mt-3 inline-flex items-center gap-2 rounded-md border-2 border-zinc-950 bg-white px-4 py-2 text-sm font-bold text-zinc-950 shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-[#ffe993] hover:shadow-[4px_4px_0_#18181b]"
                  >
                    <MapPin size={16} />
                    台中火車站到逢甲大學的導航
                  </a>
                </div>
              </div>
            </article>

            <article className="lift-card rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-2xl font-black">
                <Car size={26} />
                自行開車
              </h3>
              
              <div className="mt-5 space-y-4 text-base font-medium leading-7 text-zinc-800">
                <p>
                  <strong className="font-black">國道一號 (中山高速公路)：</strong><br/>
                  由中港交流道 (台灣大道) 下，往市區方向，左轉河南路，再左轉福星路，即可抵達逢甲大學周邊。
                </p>
                <p>
                  <strong className="font-black">國道三號 (福爾摩沙高速公路)：</strong><br/>
                  由快官交流道接中彰快速道路 (台 74 線)，由青海路交流道下，右轉青海路，左轉逢甲路，即可抵達。
                </p>
                
                <div className="mt-6 rounded-md border-2 border-zinc-950 bg-white p-4 font-bold">
                  <MapPin size={20} className="mb-2 text-red-500" />
                  校內與周邊設有收費停車場（如：逢甲大學福星停車場、文華立體停車場）。
                </div>
                <a
                  href="https://www.google.com/maps/dir//逢甲大學"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-4 py-3 text-base font-bold text-zinc-950 shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-[#facc15] hover:shadow-[4px_4px_0_#18181b]"
                >
                  <MapPin size={20} />
                  導航到逢甲大學
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransportSection
