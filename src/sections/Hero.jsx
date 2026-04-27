import { useState, useRef, useEffect } from 'react'
import { useSiteStore } from '../store/useSiteStore'
import { Icon } from '@iconify/react'
import ecomoLogo from '../assets/ecomo-logo-transparent.png'
import ecomoProduct from '../assets/ecomo_transparent.png'

const downloadFiles = [
  {
    href: '/Ecomo-Pamphlet-EN.pdf',
    filename: 'Ecomo Pamphlet (EN).pdf',
    label: 'Brosur Produk',
    lang: 'EN',
    desc: 'Overview singkat produk ecomo',
    icon: 'lucide:file-text',
  },
  {
    href: '/Pamphlet.pdf',
    filename: 'Ecomo Pamphlet.pdf',
    label: 'Pamflet Produk',
    lang: 'ID',
    desc: 'Dokumen lengkap dengan spesifikasi teknis',
    icon: 'lucide:file-text',
  },
]

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])
  const getSectionData = useSiteStore((state) => state.getSectionData)
  const heroSection = getSectionData('hero')
  const heroData = heroSection?.blocks?.[0] || null

  const subtitle = heroData?.subtitle || "Solusi Hemat Energi Berteknologi Jepang"
  const title = heroData?.title || "Next Generation Power Saving Unit"
  
  // Custom logic to split "Power Saving Unit" for styling if matches expected string
  const splitTitle = title.includes("Power Saving Unit") 
      ? { first: title.replace("Power Saving Unit", "").trim(), highlight: "Power Saving Unit" }
      : { first: title, highlight: "" }

  const description = heroData?.description || "Unit hemat daya berteknologi mineral Tourmaline & Ferrite paten Jepang — mampu mengurangi konsumsi listrik 5–15% untuk perkantoran, industri, hotel, dan rumah sakit."
  
  const defaultStats = [
    { value: 'Teknologi Paten Jepang', label: 'Hayabusa Holdings', href: 'https://hayabusa-holdings.com/', icon: 'lucide:award' },
    { value: 'Penghematan ', label: '5–15%', icon: 'lucide:zap' },
    { value: 'Terjual ', label: '3.000+ Unit sejak 2003', icon: 'lucide:bar-chart-3' },
  ]
  const defaultIcons = ['lucide:award', 'lucide:zap', 'lucide:bar-chart-3']

  const stats = heroData?.extra?.stats?.map((stat, i) => ({
        value: stat.label, 
        label: stat.value,
        icon: defaultIcons[i] || 'lucide:check-circle'
      }))


  const ctaPrimary = heroData?.extra?.cta_primary || { href: '#contact', label: 'Hubungi Kami' }
  const ctaSecondary = heroData?.extra?.cta_secondary || { href: '#product', label: 'Lihat Produk' }
  const bgImage =  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background — Factory / Industrial */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-navy-900/50" />

      {/* Accent light streaks */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/8 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-400/8 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative container-custom pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* Left column — Text (7 cols) */}
          <div className="lg:col-span-7 animate-fade-in-up">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15
                               text-blue-200 text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur-md">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
                </span>
                {subtitle}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
              {splitTitle.first}
              {splitTitle.highlight && (
                <>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
                    {splitTitle.highlight}
                  </span>
                </>
              )}
            </h1>

            {/* ecomo logo inline */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src={ecomoLogo}
                alt="ecomo"
                className="h-10 sm:h-12 lg:h-14 object-contain drop-shadow-lg"
              />
              <div className="h-8 w-px bg-white/20" />
              <span className="text-blue-200/80 text-sm font-medium">by PT Nusa Prima Energi Indonesia</span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-blue-100/90 leading-relaxed mb-10 max-w-xl">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-2.5
                           bg-gradient-to-r from-blue-500 to-blue-600
                           text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25
                           hover:shadow-blue-500/40 hover:from-blue-400 hover:to-blue-500
                           active:scale-[0.98] transition-all duration-300"
              >
                {ctaPrimary.label}
                <Icon icon="lucide:arrow-right" width={18} height={18}
                      className="group-hover:translate-x-1 transition-transform" />
              </a>
              {/* Download dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="group inline-flex items-center justify-center gap-2.5 border border-white/25
                             text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm
                             hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all duration-300"
                >
                  <Icon icon="lucide:download" width={18} height={18} />
                  Download Material
                  <Icon
                    icon="lucide:chevron-down"
                    width={15} height={15}
                    className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown panel */}
                {dropdownOpen && (
                  <div
                    className="absolute top-full mt-2 left-0 z-50 w-72
                               bg-navy-900/95 backdrop-blur-xl border border-white/15
                               rounded-2xl shadow-2xl shadow-black/40 p-2
                               animate-fade-in-up"
                    style={{ animationDuration: '0.15s' }}
                  >
                    {downloadFiles.map((file) => (
                      <a
                        key={file.href}
                        href={file.href}
                        download={file.filename}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl
                                   hover:bg-white/8 active:bg-white/12
                                   transition-colors duration-150 group/item"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10
                                        border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                          <Icon icon={file.icon} className="text-cyan-300 w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white text-sm font-semibold">{file.label}</span>
                         
                          </div>
                          <p className="text-blue-200/60 text-xs mt-0.5 truncate">{file.desc}</p>
                        </div>
                    
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 lg:gap-10">
              {defaultStats?.map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10
                                  border border-blue-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon icon={stat.icon} className="text-cyan-300 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-tight">{stat.value}</div>
                    {stat.href ? (
                      <a
                        href={stat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200/70 text-sm mt-0.5 underline underline-offset-2 hover:text-cyan-300 transition-colors duration-200"
                      >
                        {stat.label}
                      </a>
                    ) : (
                      <div className="text-blue-200/70 text-sm mt-0.5">{stat.label}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Product image (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center animate-fade-in-up"
               style={{ animationDelay: '0.25s' }}>
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute inset-0 scale-110 bg-blue-500/15 rounded-full blur-3xl" />
              <img
                src={ecomoProduct}
                alt="ecomo Power Saving Unit"
                className="relative w-72 sm:w-80 lg:w-[440px] drop-shadow-[0_20px_50px_rgba(59,130,246,0.25)]
                           hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50
                   hover:text-white transition-colors flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <Icon icon="lucide:chevron-down" width={18} height={18} className="animate-bounce" />
      </a>
    </section>
  )
}

export default Hero
