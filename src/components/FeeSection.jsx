import { BadgeDollarSign, CheckCircle2, MapPin, ReceiptText, Wallet } from 'lucide-react'

const plans = [
  {
    name: '早鳥限時優惠',
    meta: '9/14 前',
    price: '敬請期待',
    description: '系會費一年方案 + 迎新宿營',
    highlight: false,
  },
  {
    name: '四年方案',
    meta: '推薦方案',
    price: '$2500',
    description: '一次完成大學四年的系學會會員方案',
    highlight: true,
  },
  {
    name: '一年方案',
    meta: '彈性選擇',
    price: '$800',
    description: '適合先體驗系學會會員福利的新生',
    highlight: false,
  },
]

const benefits = [
  '會費期限內所有系上舉辦的活動皆能享有優惠價格！',
  '會費期限內的資訊之夜可獲得會員專屬摸彩券！',
]

function FeeSection() {
  return (
    <section id="fee" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
              <BadgeDollarSign size={18} />
              Mission 03
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Mission 03 | 系會費與會員福利
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-lg border-4 border-zinc-950 p-5 shadow-[5px_5px_0_#18181b] ${
                  plan.highlight
                    ? 'bg-[#ffe993] md:-translate-y-2'
                    : 'bg-[#f8fbff]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{plan.name}</h3>
                    <p className="mt-1 text-sm font-bold text-zinc-600">
                      {plan.meta}
                    </p>
                  </div>
                  {plan.highlight && (
                    <span className="rounded-full border-2 border-zinc-950 bg-white px-3 py-1 text-xs font-black">
                      推薦
                    </span>
                  )}
                </div>

                <p className="mt-5 text-3xl font-black">{plan.price}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-700">
                  {plan.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Wallet size={22} />
                繳費資訊
              </h3>
              <div className="mt-4 space-y-3 text-base font-bold leading-7 text-zinc-800">
                <p className="flex items-center gap-2">
                  <ReceiptText size={20} />
                  繳費方式：現金 or 匯款
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={20} />
                  現場繳費地點：資電 B30
                </p>
              </div>
            </div>

            <div className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b]">
              <h3 className="text-xl font-black">會員福利</h3>
              <ol className="mt-4 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 text-base font-medium leading-7 text-zinc-800"
                  >
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-green-600"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeeSection
