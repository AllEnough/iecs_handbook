import { BadgeDollarSign, CheckCircle2, CreditCard, MapPin, Wallet } from 'lucide-react'

const plans = [
  {
    name: '四年方案',
    meta: '',
    price: '$2500',
    description: '一次繳交大學四年的系學會會員費用',
    highlight: true,
  },
  {
    name: '一年方案',
    meta: '彈性選擇',
    price: '$800',
    description: '適合先以一年為單位參與系學會會員方案的新生',
    highlight: false,
  },
]

const benefits = [
  '會員期限內，系上舉辦的活動可享有會員優惠價格。',
  '會員期限內，資訊之夜可獲得會員專屬摸彩券。',
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex min-w-0 flex-col justify-between rounded-lg border-4 border-zinc-950 p-5 shadow-[5px_5px_0_#18181b] ${
                  plan.highlight
                    ? 'bg-[#ffe993] xl:-translate-y-2'
                    : 'bg-[#f8fbff]'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-xl font-black">{plan.name}</h3>
                      {plan.meta && (
                        <p className="mt-1 text-sm font-bold text-zinc-600">
                          {plan.meta}
                        </p>
                      )}
                    </div>
                    {plan.tag && (
                      <span className="shrink-0 rounded-full border-2 border-zinc-950 bg-red-100 px-3 py-1 text-xs font-black text-red-600">
                        {plan.tag}
                      </span>
                    )}
                  </div>

                  <p className="mt-5 whitespace-nowrap text-3xl font-black">{plan.price}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-zinc-700">
                    {plan.description}
                  </p>
                </div>
              </article>
            ))}

            <div className="flex min-w-0 flex-col rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[5px_5px_0_#18181b] sm:col-span-2 xl:col-span-1">
              <h3 className="text-xl font-black">會員權利</h3>
              <ol className="mt-4 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 text-sm font-medium leading-6 text-zinc-800"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-green-600"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-5 flex flex-col justify-between rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b]">
            <div className="lg:flex lg:items-start lg:justify-between lg:gap-10">
              <div className="lg:w-1/3">
                <h3 className="flex items-center gap-2 text-xl font-black">
                  <Wallet size={22} />
                  繳費資訊
                </h3>
                <p className="mt-2 text-sm font-bold text-zinc-600">
                  以下資訊為系會費繳費方式，若有更新請以系學會公告為準。
                </p>
                <a
                  href="#contact"
                  className="mt-6 hidden items-center justify-center gap-2 rounded-lg border-4 border-zinc-950 bg-[#ffe993] py-3 text-lg font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-1 hover:shadow-[5px_5px_0_#18181b] lg:flex"
                >
                  前往聯絡我們
                </a>
              </div>

              <div className="mt-5 min-w-0 space-y-6 text-base font-bold leading-7 text-zinc-800 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:mt-0 lg:flex-1 xl:grid-cols-[0.9fr_1.1fr]">
                {/* 左邊：現金與匯款 */}
                <div className="space-y-6">
                  {/* 現金繳費 */}
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-black text-blue-600">
                      <MapPin size={20} />
                      現金繳費
                    </h4>
                    <p className="mt-1 font-medium leading-7">開學後可至資電 B30 繳交系會費</p>
                  </div>

                  {/* 匯款繳費 */}
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-black text-blue-600">
                      <CreditCard size={20} />
                      匯款繳費
                    </h4>
                    <ol className="mt-2 ml-5 list-decimal space-y-1 text-sm font-medium md:text-base">
                      <li>將系會費轉帳至系學會帳戶</li>
                      <li>
                        <span className="block">轉帳備注欄填寫</span>
                        <span className="block">
                          <span className="inline-block bg-[#ffe993] px-1 font-bold">班級/姓名</span> EX.一甲歐俊緯
                        </span>
                      </li>
                      <li>完成後記得保存轉帳紀錄以便對帳</li>
                    </ol>
                  </div>
                </div>

                {/* 右邊：帳戶 */}
                <div className="md:flex md:flex-col md:justify-center">
                  <div className="w-full min-w-0 space-y-2 rounded-md border-2 border-zinc-950 bg-white p-4 text-sm shadow-[3px_3px_0_#18181b] md:text-base">
                    <p className="grid gap-1 sm:grid-cols-[auto_1fr]">
                      <strong className="whitespace-nowrap">銀行：</strong>
                      <span className="min-w-0 break-words">臺中逢甲郵局 / 代號 700</span>
                    </p>
                    <p className="grid gap-1 sm:grid-cols-[auto_1fr]">
                      <strong className="whitespace-nowrap">戶名：</strong>
                      <span className="min-w-0 break-words">逢甲大學資訊工程系系學會歐俊緯</span>
                    </p>
                    <p className="grid gap-1 sm:grid-cols-[auto_1fr]">
                      <strong className="whitespace-nowrap">帳號：</strong>
                      <span className="min-w-0 break-words">0021256 0893462</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 flex md:hidden items-center justify-center gap-2 rounded-lg border-4 border-zinc-950 bg-[#ffe993] py-3 text-lg font-black shadow-[3px_3px_0_#18181b] transition hover:-translate-y-1 hover:shadow-[5px_5px_0_#18181b]"
            >
              前往聯絡我們
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeeSection
