import { useState } from 'react'
import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import IconWrapper from '../components/Icon'
import { contactInfo as defaultContactInfo } from '../data'
import { useSiteStore } from '../store/useSiteStore'

const Contact = () => {
  const getSectionData = useSiteStore((state) => state.getSectionData)
  const contactSection = getSectionData('contact')
  const contactData = contactSection?.blocks?.[0] || null

  const subtitle = contactData?.subtitle
  const title = contactData?.title
  const description = contactData?.description

  const infoItems = contactData?.items?.length
    ? contactData.items.map((item, index) => {
        const parts = item.title.split(':')
        const label = parts[0] ? parts[0].trim() : "Info"
        const value = parts[1] ? parts[1].trim() : item.title
        const defaultInfo = defaultContactInfo[index] || defaultContactInfo[0]
        
        return {
          id: item.id || index,
          label,
          value,
          icon: defaultInfo.icon
        }
      })
    : defaultContactInfo

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding gradient-navy">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle={subtitle}
            title={title}
            description={description}
            light
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div className="space-y-8">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {infoItems.map((info) => (
                <div
                  key={info.id}
                  className="flex items-start gap-4 bg-white/10 border border-white/10
                             backdrop-blur-sm rounded-xl p-5"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-blue-500/20 rounded-xl
                                   flex items-center justify-center">
                    <IconWrapper name={info.icon} size={18} className="text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs mb-1 uppercase tracking-wide">{info.label}</div>
                    <div className="text-white text-sm font-medium leading-snug">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Maps placeholder */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                title="Lokasi PT Nusa Prima Energi Indonesia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2817485565!2d106.82118!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDYuOSJTIDEwNsKwNDknMTYuMiJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-navy-900 font-bold text-xl mb-6">Kirim Pesan</h3>

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700
                              text-sm rounded-xl px-4 py-3 font-medium">
                ✓ Pesan berhasil dikirim! Tim kami akan menghubungi Anda segera.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                               text-gray-800 placeholder-gray-400 focus:outline-none
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    No. Telepon
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+62 852-2224-4494"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                               text-gray-800 placeholder-gray-400 focus:outline-none
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@perusahaan.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                             text-gray-800 placeholder-gray-400 focus:outline-none
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan kebutuhan energi bisnis Anda..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                             text-gray-800 placeholder-gray-400 focus:outline-none
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2
                           bg-gradient-to-r from-blue-600 to-blue-800 text-white
                           font-semibold py-3.5 rounded-xl shadow-md
                           hover:shadow-blue-400/40 hover:scale-[1.02] transition-all duration-300"
              >
                Kirim Pesan
                <Icon icon="lucide:send" width={16} height={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
