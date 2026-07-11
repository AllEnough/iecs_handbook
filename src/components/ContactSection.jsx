import { AtSign, Building2, HelpCircle, Mail, MapPin, Phone, UserRound } from 'lucide-react'

const contacts = [
  {
    icon: Building2,
    title: '辦公室',
    detail: '逢甲大學資訊電機館 B30',
  },
  {
    icon: UserRound,
    title: '助教',
    detail: '吳振宇 助教',
    subDetail: '04-24517250 #3704 / wucy@o365.fcu.edu.tw',
  },
  {
    icon: AtSign,
    title: 'Instagram',
    detail: '@fcu_iecs',
  },
]

const faqs = [
  {
    question: 'Q1: 系會費的用途是什麼？',
    answer:
      'A1: 將用於各活動舉辦支出與系上相關事務處理，以便提供系上同學們多方面服務。',
  },
  {
    question: 'Q2: 經費管理安全嗎？',
    answer:
      'A2: 系學經費運用會經過預算大會、理監事大會審核且公開透明，將開銷運作公開給學校審核，請各位學生與家長放心。',
  },
]

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 border-2 border-zinc-950 bg-[#ffe993] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#18181b]">
                <MapPin size={18} />
                Final Mission
              </p>

              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Final Mission | 聯絡我們
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-zinc-800 md:text-lg md:leading-9">
                有任何入學、活動、系會費或新生群相關問題，都可以從這裡找到聯絡窗口。
              </p>
            </div>

            <div className="grid gap-4">
              {contacts.map((contact) => {
                const Icon = contact.icon

                return (
                  <article
                    key={contact.title}
                    className="rounded-lg border-4 border-zinc-950 bg-[#f8fbff] p-5 shadow-[5px_5px_0_#18181b]"
                  >
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-zinc-950 bg-[#ffe993]">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black">{contact.title}</h3>
                        <p className="mt-1 text-base font-bold leading-7 text-zinc-800">
                          {contact.detail}
                        </p>
                        {contact.subDetail && (
                          <p className="mt-1 break-words text-sm font-medium leading-6 text-zinc-600">
                            {contact.subDetail}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mt-8 rounded-lg border-4 border-zinc-950 bg-[#e8f4ff] p-5 shadow-[5px_5px_0_#18181b] md:p-6">
            <h3 className="flex items-center gap-2 text-2xl font-black">
              <HelpCircle size={26} />
              常見問題
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-lg border-4 border-zinc-950 bg-white p-5 shadow-[4px_4px_0_#18181b]"
                >
                  <h4 className="text-lg font-black">{faq.question}</h4>
                  <p className="mt-3 text-base font-medium leading-8 text-zinc-800">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-lg border-4 border-zinc-950 bg-zinc-950 p-5 text-white shadow-[5px_5px_0_#facc15] md:flex-row md:items-center md:justify-between">
            <p className="text-2xl font-black">歡迎加入逢甲資訊系 IECS</p>
            <div className="flex flex-wrap gap-3 text-sm font-black">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-zinc-950">
                <Phone size={18} />
                #3704
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-zinc-950">
                <Mail size={18} />
                wucy@o365.fcu.edu.tw
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
