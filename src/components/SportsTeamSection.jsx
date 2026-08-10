import { AtSign, Dumbbell, HeartHandshake, QrCode, Trophy, UsersRound } from 'lucide-react'
import basketballBigTeam from '../assets/handbook/basketball-big-team.jpg'
import basketballLineQr from '../assets/handbook/basketball-line-qr.png'
import basketballTeamPortrait from '../assets/handbook/basketball-team-portrait.jpg'
import basketballWelcome from '../assets/handbook/basketball-welcome.jpg'
import volleyballOuting from '../assets/handbook/volleyball-outing.jpg'
import volleyballChampion from '../assets/handbook/volleyball-champion.jpg'
import volleyballGathering from '../assets/handbook/volleyball-gathering.jpg'
import womensVolleyballChampion from '../assets/handbook/womens-volleyball-champion.jpg'
import womensVolleyballPractice from '../assets/handbook/womens-volleyball-practice.jpg'

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
    imageClassName: 'object-center',
  },
  {
    src: volleyballOuting,
    alt: '逢甲資工系排出遊合照',
    imageClassName: 'object-[center_78%]',
  },
  {
    src: volleyballGathering,
    alt: '逢甲資工系排聚會大合照',
    imageClassName: 'object-center',
  },
]

const basketballPhotos = [
  {
    src: basketballWelcome,
    alt: '逢甲資訊系籃迎新活動合照',
    imageClassName: 'object-center',
  },
  {
    src: basketballTeamPortrait,
    alt: '逢甲資訊系籃隊員合照',
    imageClassName: 'object-center',
  },
  {
    src: basketballBigTeam,
    alt: '逢甲資訊系籃大合照',
    imageClassName: 'object-center',
  },
]

const basketballHighlights = [
  {
    icon: Dumbbell,
    title: '一起練球切磋',
    desc: '平常一起練球、切磋球技，在球場上慢慢累積手感。',
  },
  {
    icon: Trophy,
    title: '比賽培養默契',
    desc: '代表資訊系參加系際盃、大資盃等比賽，一起享受熱血時刻。',
  },
  {
    icon: HeartHandshake,
    title: '課業外的夥伴',
    desc: '找一群能一起流汗、一起進步的朋友，讓大學生活更完整。',
  },
]

const womensVolleyballPhotos = [
  {
    src: womensVolleyballChampion,
    alt: '逢甲資工系女排比賽得獎合照',
    className: '',
    imageClassName: 'aspect-[16/9] object-center',
  },
  {
    src: womensVolleyballPractice,
    alt: '逢甲資工系女排球場練習合照',
    className: '',
    imageClassName: 'aspect-[5/4] object-center',
  },
]

const womensVolleyballHighlights = [
  {
    icon: Dumbbell,
    title: '不在乎你是不是新手',
    desc: '不管以前有沒有碰過排球，都有學長姐耐心帶著練習。',
  },
  {
    icon: Trophy,
    title: '例行活動與比賽',
    desc: '包含迎新、送舊、友誼賽等活動，一起累積球場回憶。',
  },
  {
    icon: HeartHandshake,
    title: '大學生活後盾',
    desc: '課業、教授評價到宵夜推薦，學長姐都能給你實用建議。',
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

          <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Bonus 02 | 系隊介紹
              </h2>

              <div className="mt-6 rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b]">
                <h3 className="flex items-center gap-2 text-2xl font-black">
                  <UsersRound size={26} />
                  資訊系男排
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
                    className={`aspect-[16/9] h-full w-full object-cover ${photo.imageClassName}`}
                  />
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t-4 border-zinc-950 pt-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
              <div>
                <div className="rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b]">
                  <h3 className="flex items-center gap-2 text-2xl font-black">
                    <UsersRound size={26} />
                    資訊系女排
                  </h3>
                  <div className="mt-4 space-y-4 text-base font-bold leading-8 text-zinc-800 md:text-lg md:leading-9">
                    <p>不想大學四年只有寫程式和統籌考嗎？歡迎加入資訊系女排！</p>
                    <p>
                      不管你以前有沒有碰過排球，都有學長姐陪你從零開始練起。這裡不只是一支球隊，也會一起參加迎新、送舊、友誼賽等活動，讓你在課業之外找到一群能一起流汗、一起聊天、一起適應大學生活的夥伴。
                    </p>
                  </div>
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

                <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {womensVolleyballHighlights.map((item) => {
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

              <div className="grid gap-3">
                {womensVolleyballPhotos.map((photo) => (
                  <figure
                    key={photo.alt}
                    className={`photo-frame overflow-hidden rounded-lg border-4 border-zinc-950 bg-white shadow-[5px_5px_0_#18181b] ${photo.className}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`${photo.imageClassName} h-full w-full object-cover`}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t-4 border-zinc-950 pt-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
              <div>
                <div className="rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b]">
                  <h3 className="flex items-center gap-2 text-2xl font-black">
                    <UsersRound size={26} />
                    資訊系籃
                  </h3>
                  <div className="mt-4 space-y-4 text-base font-bold leading-8 text-zinc-800 md:text-lg md:leading-9">
                    <p>大學生活不只在教室，也可以在球場上留下屬於自己的回憶！</p>
                    <p>
                      資訊系籃是一群因為喜歡籃球而聚在一起的人。平常我們一起練球、切磋球技，也會代表資訊系參加系際盃、大資盃等比賽。不用擔心自己不夠強，只要你喜歡籃球、想打球，或想找一群能一起流汗、一起進步的朋友，都歡迎加入資訊系籃。
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/fcu_iecs.bb?igsh=MTZlOXRnZjhhOWl6Mw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[4px_4px_0_#18181b] sm:w-auto"
                  >
                    <AtSign size={18} />
                    系籃 IG：@fcu_iecs.bb
                  </a>

                  <div className="mt-5 flex flex-col gap-4 rounded-md border-2 border-zinc-950 bg-white p-4 shadow-[3px_3px_0_#18181b] sm:flex-row sm:items-center">
                    <img
                      src={basketballLineQr}
                      alt="資訊系籃 LINE 群組 QR Code"
                      loading="lazy"
                      className="mx-auto h-28 w-28 shrink-0 rounded-md border-2 border-zinc-950 bg-white object-contain sm:mx-0"
                    />
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-black">
                        <QrCode size={22} />
                        系籃 LINE 群組
                      </h4>
                      <p className="mt-2 text-sm font-bold leading-7 text-zinc-700">
                        想了解練球、招新與活動資訊，可以掃描 QR Code 加入群組。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {basketballHighlights.map((item) => {
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
                {basketballPhotos.map((photo) => (
                  <figure
                    key={photo.alt}
                    className="photo-frame overflow-hidden rounded-lg border-4 border-zinc-950 bg-white shadow-[5px_5px_0_#18181b]"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`aspect-[16/9] h-full w-full object-cover ${photo.imageClassName}`}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SportsTeamSection
