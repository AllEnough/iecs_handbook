import { AtSign, Dumbbell, HeartHandshake, Trophy, UsersRound } from 'lucide-react'
import volleyballOuting from '../assets/handbook/volleyball-outing.jpg'
import volleyballChampion from '../assets/handbook/volleyball-champion.jpg'
import volleyballGathering from '../assets/handbook/volleyball-gathering.jpg'

const teamHighlights = [
  {
    icon: Dumbbell,
    title: '基本功與實力提升',
    desc: '課餘時間除了訓練基本功，平常也可以邀請學長在野場切磋過招、提升實力，也能認識別系的朋友。',
  },
  {
    icon: Trophy,
    title: '比賽與友誼賽',
    desc: '系隊有多個比賽資訊，也會邀請別校舉辦友誼賽，不僅能享受場上的熱血奮戰，培養團隊默契，還能認識來自各校的好朋友、學習別人得分戰略。',
  },
  {
    icon: UsersRound,
    title: '寒暑訓與團隊默契',
    desc: '寒假暑假時會有寒暑訓，加強團隊戰略，並建立團隊默契與深厚情誼。',
  },
  {
    icon: HeartHandshake,
    title: '球場外的夥伴',
    desc: '大家也會一起揪團聚會、出遊踏青。加入系排，收穫的不只是球技，也是一群陪你走過大學時光的夥伴。',
  },
]

const teamPhotos = [
  {
    src: volleyballChampion,
    alt: '逢甲資工系男排比賽得獎合照',
  },
  {
    src: volleyballOuting,
    alt: '逢甲資工系排出遊合照',
  },
  {
    src: volleyballGathering,
    alt: '逢甲資工系排聚會大合照',
  },
]

function SportsTeamSection() {
  return (
    <section id="sports-team" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="motion-reveal rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
            <Trophy size={18} />
            Bonus 02
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Bonus 02 | 系隊介紹
          </h2>

          <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div>
              <div className="rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b]">
                <h3 className="flex items-center gap-2 text-2xl font-black">
                  <UsersRound size={26} />
                  逢甲資工系男排
                </h3>
                <p className="mt-4 text-base font-bold leading-8 text-zinc-800 md:text-lg md:leading-9">
                  逢甲資工系排是一個充滿熱情、溫暖且凝聚力十足的大家庭！在這裡，排球不只是運動，更是連結彼此的橋樑。無論你是想從零開始紮實鍛鍊基本功，還是懷抱著對排球的強烈熱愛，我們都非常歡迎你的加入。
                </p>
                <a
                  href="https://www.instagram.com/fcu_iecs_vb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] sm:w-auto"
                >
                  <AtSign size={18} />
                  系排 IG：@fcu_iecs_vb
                </a>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {teamHighlights.map((item) => {
                  const Icon = item.icon

                  return (
                    <article
                      key={item.title}
                      className="lift-card rounded-lg border-4 border-zinc-950 bg-[#fff8e8] p-4 shadow-[4px_4px_0_#18181b]"
                    >
                      <h4 className="flex items-center gap-2 text-lg font-black text-blue-600">
                        <Icon size={22} />
                        {item.title}
                      </h4>
                      <p className="mt-3 text-sm font-bold leading-7 text-zinc-800">
                        {item.desc}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-rows-3">
              {teamPhotos.map((photo) => (
                <figure
                  key={photo.alt}
                  className="photo-frame overflow-hidden rounded-lg border-4 border-zinc-950 bg-white shadow-[5px_5px_0_#18181b]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-[170px] w-full object-cover md:h-[190px] lg:h-full"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SportsTeamSection
