import { Icon } from '@iconify/react'
import tourmalineImg from '../assets/tourmaline.png'
import ferriteImg from '../assets/ferrite.png'
import safetyInnerImg from '../assets/howitworks/safety-inner.png'
import safetyOuterImg from '../assets/howitworks/safety-outer.png'
import SectionTitle from '../components/SectionTitle'
import { useSiteStore } from '../store/useSiteStore'

// SVG assets
import cubicleImg from '../assets/howitworks/cubicle.svg'
import cubicleEcomoImg from '../assets/howitworks/cubicle-ecomo.svg'
import motorAcImg from '../assets/howitworks/motor-ac.svg'


const scopedStyles = `
  @keyframes floatParticle {
    0%   { transform: translate(0, 0) scale(1);   opacity: 0.7; }
    50%  { transform: translate(6px, -4px) scale(1.2); opacity: 1; }
    100% { transform: translate(0, 0) scale(1);   opacity: 0.7; }
  }
  @keyframes flowRight {
    0%   { transform: translateX(-8px); opacity: 0; }
    20%  { opacity: 1; }
    80%  { opacity: 1; }
    100% { transform: translateX(8px); opacity: 0; }
  }
  @keyframes sparkle {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50%      { opacity: 1;   transform: scale(1.3); }
  }
`

const FlowDiagram = ({ variant = 'before' }) => {
  const isEcomo = variant === 'after'

  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4 py-3">

      {/* ── Cubicle ── */}
      <div className="flex flex-col items-center text-center flex-shrink-0 w-[70px] sm:w-[90px]">
        <div className="w-14 h-14 sm:w-[70px] sm:h-[70px] flex items-center justify-center">
          <img src={isEcomo ? cubicleEcomoImg : cubicleImg} alt="Cubicle"
               className="w-full h-full object-contain" />
        </div>
        <p className="text-[10px] sm:text-xs font-semibold text-gray-700 mt-1.5">Cubicle</p>
        <p className="text-[9px] text-gray-400">Suplai Daya</p>
        <p className={`text-sm sm:text-lg font-black leading-none mt-0.5
          ${isEcomo ? 'text-emerald-600' : 'text-gray-800'}`}>
          {isEcomo ? '105~115' : '120'}
        </p>
      </div>

      {/* ── Center: Chevron flow area ── */}
      <div className="flex-1 flex flex-col items-center min-w-0">
        {/* Loss labels top (before variant) */}
        {!isEcomo && (
          <div className="flex items-center gap-3 mb-1">
            <span className="text-amber-500 text-[9px] sm:text-[10px] font-bold flex items-center gap-0.5">
              <Icon icon="mdi:arrow-top-right" width={10} className="text-amber-400" />loss
            </span>
            <span className="text-amber-500 text-[9px] sm:text-[10px] font-bold flex items-center gap-0.5">
              loss<Icon icon="mdi:arrow-top-left" width={10} className="text-amber-400" />
            </span>
          </div>
        )}

        {/* Chevron shape via CSS clip-path */}
        <div
          className={`relative w-full max-w-[200px] h-[52px] sm:h-[60px] ${
            isEcomo
              ? 'bg-gradient-to-r from-emerald-50 to-emerald-100/80'
              : 'bg-gradient-to-r from-gray-100 to-gray-200/80'
          }`}
          style={{ clipPath: 'polygon(0% 0%, 82% 0%, 100% 50%, 82% 100%, 0% 100%)' }}
        >
          {/* Animated particles inside */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Yellow arrows (chaotic for before, flowing right for after) */}
            {!isEcomo ? (
              /* Chaotic scattered arrows */
              <>
                <Icon icon="mdi:arrow-top-right-bold" width={11}
                  className="absolute text-amber-400" style={{ top: '6px', left: '8%', animation: 'floatParticle 2s ease-in-out infinite' }} />
                <Icon icon="mdi:arrow-bottom-left-bold" width={11}
                  className="absolute text-amber-400" style={{ top: '30px', left: '16%', animation: 'floatParticle 2.4s ease-in-out 0.3s infinite' }} />
                <Icon icon="mdi:arrow-top-left-bold" width={11}
                  className="absolute text-amber-400" style={{ top: '8px', left: '30%', animation: 'floatParticle 1.8s ease-in-out 0.6s infinite' }} />
                <Icon icon="mdi:arrow-right-bold" width={11}
                  className="absolute text-amber-400" style={{ top: '36px', left: '40%', animation: 'floatParticle 2.2s ease-in-out 0.2s infinite' }} />
                <Icon icon="mdi:arrow-bottom-right-bold" width={11}
                  className="absolute text-amber-400" style={{ top: '6px', left: '58%', animation: 'floatParticle 2.6s ease-in-out 0.5s infinite' }} />
                <Icon icon="mdi:arrow-top-right-bold" width={11}
                  className="absolute text-amber-400" style={{ top: '32px', left: '68%', animation: 'floatParticle 2s ease-in-out 0.8s infinite' }} />
              </>
            ) : (
              /* Organized flowing arrows */
              <>
                <Icon icon="mdi:arrow-right-bold" width={11}
                  className="absolute text-emerald-400/70" style={{ top: '8px', left: '10%', animation: 'flowRight 2s ease-in-out infinite' }} />
                <Icon icon="mdi:arrow-right-bold" width={11}
                  className="absolute text-emerald-400/70" style={{ top: '25px', left: '18%', animation: 'flowRight 2s ease-in-out 0.4s infinite' }} />
                <Icon icon="mdi:arrow-right-bold" width={11}
                  className="absolute text-emerald-400/70" style={{ top: '38px', left: '8%', animation: 'flowRight 2s ease-in-out 0.8s infinite' }} />
                <Icon icon="mdi:arrow-right-bold" width={11}
                  className="absolute text-emerald-400/70" style={{ top: '10px', left: '55%', animation: 'flowRight 2s ease-in-out 0.2s infinite' }} />
                <Icon icon="mdi:arrow-right-bold" width={11}
                  className="absolute text-emerald-400/70" style={{ top: '35px', left: '58%', animation: 'flowRight 2s ease-in-out 0.6s infinite' }} />
              </>
            )}

            {/* Green electron dots */}
            {[
              { top: '14px', left: '12%', delay: '0s' },
              { top: '34px', left: '25%', delay: '0.4s' },
              { top: '10px', left: '45%', delay: '0.7s' },
              { top: '38px', left: '55%', delay: '0.2s' },
              { top: '22px', left: '70%', delay: '0.9s' },
            ].map((d, i) => (
              <span
                key={i}
                className={`absolute w-[5px] h-[5px] rounded-full ${isEcomo ? 'bg-emerald-500' : 'bg-emerald-400'}`}
                style={{ top: d.top, left: d.left, animation: `sparkle 2s ease-in-out ${d.delay} infinite` }}
              />
            ))}
          </div>

          {/* "Electronic" label */}
          <div className="absolute inset-0 flex items-center justify-center pr-[18%]">
            <span className={`text-[10px] sm:text-xs font-bold text-white px-2.5 py-1 rounded-md shadow-sm
              ${isEcomo ? 'bg-emerald-500' : 'bg-emerald-600'}`}>
              Electronic
            </span>
          </div>
        </div>

        {/* Loss labels bottom */}
        {!isEcomo ? (
          <div className="flex items-center gap-3 mt-1">
            <span className="text-amber-500 text-[9px] sm:text-[10px] font-bold flex items-center gap-0.5">
              <Icon icon="mdi:arrow-bottom-right" width={10} className="text-amber-400" />loss
            </span>
            <span className="text-amber-500 text-[9px] sm:text-[10px] font-bold flex items-center gap-0.5">
              loss<Icon icon="mdi:arrow-bottom-left" width={10} className="text-amber-400" />
            </span>
          </div>
        ) : (
          <div className="flex justify-end w-full pr-4 mt-1">
            <span className="text-amber-500 text-[9px] sm:text-[10px] font-bold flex items-center gap-0.5">
              loss<Icon icon="mdi:arrow-bottom-right" width={10} className="text-amber-400" />
            </span>
          </div>
        )}
      </div>

      {/* ── Motor / AC ── */}
      <div className="flex flex-col items-center text-center flex-shrink-0 w-[70px] sm:w-[90px]">
        <div className="w-14 h-14 sm:w-[70px] sm:h-[70px] flex items-center justify-center">
          <img src={motorAcImg} alt="Motor, Mesin, AC"
               className="w-full h-full object-contain" />
        </div>
        <p className="text-[10px] sm:text-xs font-semibold text-gray-700 mt-1.5 leading-tight">
          Motor, Mesin,<br />AC dll.
        </p>
        <p className="text-[9px] text-gray-400">Konsumsi Daya</p>
        <p className={`text-sm sm:text-lg font-black leading-none mt-0.5
          ${isEcomo ? 'text-emerald-600' : 'text-gray-800'}`}>
          100
        </p>
      </div>
    </div>
  )
}


const HowItWorks = () => {
  const getSectionData = useSiteStore((state) => state.getSectionData)
  const hiwSection = getSectionData('how_it_works')
  const hiwData = hiwSection?.blocks?.[0] || null

  const subtitle = hiwData?.subtitle
  const title = hiwData?.title
  const description = hiwData?.description

  const beforeAfter = hiwData?.extra?.before_after
  const currentData = beforeAfter?.current
  const ecomoData = beforeAfter?.with_ecomo

  const installSteps = hiwData?.items || []

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <style>{scopedStyles}</style>

      <div className="container-custom">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="flex justify-center">
          <SectionTitle
            subtitle={subtitle}
            title={title}
            description={description}
          />
        </div>

        {/* ── Comparison grid ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ───── Card 1 — Kondisi Saat Ini ───── */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden
                          hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-700 px-6 py-3 flex items-center gap-2">
              <Icon icon="mdi:lightning-bolt" className="text-gray-300" width={20} />
              <h3 className="text-white font-bold text-base sm:text-lg tracking-wide">Kondisi Saat Ini</h3>
            </div>

            <div className="p-4 sm:p-6">
              <FlowDiagram variant="before" />

              <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-center mb-4 mt-2">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Biasanya terdapat <strong className="text-gray-800">loss</strong> (rugi daya) pada kabel listrik dan perangkat elektronik.
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-medium mb-1">Power Loss</p>
                <p className="text-4xl sm:text-5xl font-black text-red-500 leading-none">{currentData?.loss_percent}<span className="text-2xl sm:text-3xl">%</span></p>
              </div>
            </div>
          </div>

          {/* ───── Card 2 — Dengan ecomo ───── */}
          <div className="relative bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden
                          hover:shadow-xl hover:shadow-emerald-100/60 transition-all duration-300">
            <div className="absolute top-4 -right-8 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider
                            px-10 py-1 rotate-45 shadow-md z-10">
              Solusi
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 flex items-center gap-2">
              <Icon icon="mdi:lightning-bolt" className="text-emerald-100" width={20} />
              <h3 className="text-white font-bold text-base sm:text-lg tracking-wide">Dengan ecomo</h3>
            </div>

            <div className="p-4 sm:p-6">
              <FlowDiagram variant="after" />

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-center mb-4 mt-2">
                <p className="text-emerald-700 text-xs sm:text-sm leading-relaxed">
                  Elektron yang dipancarkan oleh <strong>ecomo</strong> dan efek penghilangan noise dari <strong>Ferrite</strong> melumasi aliran arus listrik.
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-medium mb-1">Power Loss Berkurang Sekitar</p>
                <p className="text-4xl sm:text-5xl font-black text-emerald-500 leading-none">~{ecomoData?.loss_percent}<span className="text-2xl sm:text-3xl">%</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Info note ────────────────────────────────────────────── */}
        <div className="mt-14 flex flex-col gap-6">
          
          {/* Card 1: Instalasi */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            
            {/* Header bagian atas */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 justify-between border-b border-white/10 pb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/30 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Icon icon="mdi:tools" className="text-white text-3xl" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Instalasi Mudah & Cepat</h3>
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                    Pemasangan unit cukup dihubungkan langsung ke sisi sekunder transformator atau sisi sekunder breaker.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-4 rounded-xl text-white font-bold text-lg border border-white/20 shadow-lg backdrop-blur-sm">
                  <Icon icon="mdi:clock-fast" className="text-emerald-400 text-2xl" />
                  ~30 Menit - 1 Jam
                </div>
              </div>
            </div>

            {/* Bagian Bawah: Gambar dan Detail Langkah */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center pt-2">
              <div className="rounded-xl shadow-2xl border border-white/20 bg-[#f8f9fa] relative overflow-hidden flex flex-col items-center justify-center h-[280px] p-6 lg:ml-2">
                {/* Warning Badge */}
                <div className="absolute top-4 bg-green-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-30">
                   <Icon icon="mdi:alert-circle-outline" className="text-sm" /> Selama instalasi, diperlukan pemadaman sementara
                </div>

                <div className="w-full max-w-[300px] sm:max-w-xs relative mt-8 h-[200px] flex items-center justify-between">
                   {/* Transformator Box */}
                   <div className="flex flex-col items-center z-20 relative ml-4 sm:ml-8">
                     <div className="w-16 sm:w-20 h-24 sm:h-28 bg-gray-500 rounded shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),_0_10px_15px_-3px_rgba(0,0,0,0.3)] relative border-2 border-gray-400 flex flex-col">
                        {/* Top inputs */}
                        <div className="flex gap-2 justify-center w-full absolute -top-3">
                           <div className="w-1.5 sm:w-2 h-4 bg-gray-300 rounded-sm"></div>
                           <div className="w-1.5 sm:w-2 h-4 bg-gray-300 rounded-sm"></div>
                           <div className="w-1.5 sm:w-2 h-4 bg-gray-300 rounded-sm"></div>
                        </div>
                        {/* Left orange wires */}
                        <div className="absolute -left-6 sm:-left-8 top-6 flex flex-col gap-1.5">
                          <div className="w-6 sm:w-8 h-[3px] bg-orange-500"></div>
                          <div className="w-6 sm:w-8 h-[3px] bg-orange-500"></div>
                          <div className="w-6 sm:w-8 h-[3px] bg-orange-500"></div>
                        </div>
                        <span className="absolute -left-20 sm:-left-24 top-4 text-[9px] font-bold text-gray-500 leading-tight pr-1 text-right">Sisi Primer<br/>(6600V)</span>
                        
                        {/* Heat sink lines */}
                        <div className="w-full h-full p-2 flex flex-col justify-end gap-1 opacity-30 mt-2">
                           {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="w-full h-1 bg-black"></div>)}
                        </div>
                     </div>
                     
                     {/* Bottom Breakers attached to Trafo */}
                     <div className="absolute -bottom-10 flex gap-2 w-full justify-center">
                       {/* Wires down */}
                       <div className="absolute top-0 w-full h-2 flex justify-center gap-[10px]">
                          <div className="w-[2px] h-3 bg-black"></div>
                          <div className="w-[2px] h-3 bg-black"></div>
                          <div className="w-[2px] h-3 bg-black"></div>
                       </div>
                       {[1,2,3].map(i => (
                         <div key={`breaker-${i}`} className="mt-3 w-4 h-6 sm:w-5 sm:h-7 bg-black rounded-[2px] border border-gray-700 flex flex-col justify-center items-center shadow-md relative overflow-hidden">
                            <div className="w-full h-[3px] sm:h-2 bg-red-600"></div>
                            <div className="w-full h-[2px] sm:h-1 bg-yellow-400 mt-0.5"></div>
                            <div className="w-full h-[2px] sm:h-1 bg-blue-600 mt-0.5"></div>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Lines Grid */}
                   <div className="flex-1 relative h-28 sm:h-32 flex flex-col justify-start pt-5 sm:pt-6 z-10 -ml-4 pl-4 pr-1">
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] font-bold text-gray-500 bg-[#f8f9fa] px-1 z-10 whitespace-nowrap">Sisi Sekunder (100V-600V)</span>
                      
                      {/* R line */}
                      <div className="w-full flex items-center relative mb-4 sm:mb-5">
                         <div className="w-[10%] h-[3px] bg-blue-700"></div>
                         <div className="w-1 h-3 bg-blue-700 absolute left-[10%] -top-3"></div>
                         <div className="w-[90%] h-[3px] bg-red-600"></div>
                         <div className="w-2 h-2 rounded-full border-2 border-red-600 bg-white absolute left-[20%] -translate-x-1/2"></div>
                      </div>
                      
                      {/* S line */}
                      <div className="w-full flex items-center relative mb-4 sm:mb-5">
                         <div className="w-[10%] h-[3px] bg-gray-500"></div>
                         <div className="w-1 h-2.5 bg-gray-500 absolute left-[10%] -top-2.5"></div>
                         <div className="w-[90%] h-[3px] bg-gray-500"></div>
                         <div className="w-2 h-2 rounded-full border-2 border-gray-500 bg-white absolute left-[30%] -translate-x-1/2"></div>
                      </div>
                      
                      {/* T line */}
                      <div className="w-full flex items-center relative">
                         <div className="w-[10%] h-[3px] bg-blue-700"></div>
                         <div className="w-1 h-2 bg-blue-700 absolute left-[10%] -top-2"></div>
                         <div className="w-[90%] h-[3px] bg-blue-600"></div>
                         <div className="w-2 h-2 rounded-full border-2 border-blue-600 bg-white absolute left-[40%] -translate-x-1/2"></div>
                      </div>
                   </div>

                   {/* Ecomo Modules */}
                   <div className="flex gap-1 sm:gap-1.5 z-20">
                     {[1,2,3].map(i => (
                       <div key={i} className="bg-blue-800 border-2 border-indigo-400 w-10 h-16 sm:w-12 sm:h-20 rounded shadow-[inset_0_-2px_0_rgba(0,0,0,0.5),_0_5px_10px_-2px_rgba(0,0,0,0.3)] flex flex-col items-center pt-1.5 sm:pt-2 relative">
                         <span className="text-[5px] sm:text-[6px] font-extrabold text-white tracking-wider">ECOMO</span>
                         <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-900 border border-indigo-300/50 mt-1 flex flex-col justify-center items-center gap-0.5">
                            <div className="w-3 sm:w-4 h-[1px] bg-white/30"></div>
                            <div className="w-4 sm:w-6 h-[1px] bg-white/30"></div>
                            <div className="w-3 sm:w-4 h-[1px] bg-white/30"></div>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                {
                  installSteps?.map((step, idx) => (
                    <div key={step.id || idx} className="bg-blue-900/40 rounded-xl p-4 border border-blue-400/20 shadow-inner">
                      <div className="flex items-start gap-3 flex-row">
                        <div className="w-7 h-7 rounded-full bg-blue-500/50 flex-shrink-0 flex items-center justify-center font-bold text-white border border-blue-400/50 text-sm">{idx + 1}</div>
                        <p className="text-blue-50 text-sm md:text-base leading-relaxed">{step.title}</p>
                      </div>
                    </div>
                  ))
                }
                <div className="mt-2 inline-flex items-start gap-2 bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 px-4 py-3 rounded-xl text-sm font-medium">
                  <Icon icon="mdi:information" className="text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
                  <span>Catatan Khusus: <span className="font-normal opacity-90">Untuk produk tipe Home Ecomo (skala rumahan) juga dapat dipasang langsung pada circuit breaker biasa.</span></span>
                </div>
              </div>
            </div>

          </div>

          {/* Card 2: Keamanan */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            
            {/* Header bagian atas */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 justify-between border-b border-white/10 pb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/30 flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                  <Icon icon="mdi:shield-check" className="text-emerald-300 text-3xl" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Keamanan Maksimal Terjamin</h3>
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-3xl">
                    Dilapisi dengan cat khusus dan material pilihan, kami telah meningkatkan aspek keselamatan agar Anda dapat menggunakan ecomo dengan tenang.
                  </p>
                </div>
              </div>
            </div>

            {/* Bagian Bawah: Penjelasan Bahan dan Foto */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center pt-2">
              <div className="flex flex-col gap-4">
                <p className="text-white text-sm md:text-base leading-relaxed mb-1">
                  Boks bagian dalam ecomo dilindungi oleh kuatnya <strong>cat resin akrilik</strong>, dan boks pelindung luarnya terbuat dari padatnya <strong>cast nylon</strong>.
                </p>
                <div className="bg-blue-900/40 rounded-xl p-4 border border-blue-400/20 shadow-inner group/item hover:bg-blue-900/60 transition-colors">
                  <div className="flex items-start gap-3 flex-row">
                     <Icon icon="mdi:water-check" className="text-blue-300 text-2xl flex-shrink-0 mt-0.5" />
                     <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                       Sangat aman dan <strong>tahan air (100% waterproof)</strong>, memastikan kelistrikan tetap terlindungi sempurna dari air maupun rembesan kelonggaran.
                     </p>
                  </div>
                </div>
                <div className="bg-blue-900/40 rounded-xl p-4 border border-blue-400/20 shadow-inner group/item hover:bg-blue-900/60 transition-colors">
                  <div className="flex items-start gap-3 flex-row">
                     <Icon icon="mdi:hammer-wrench" className="text-blue-300 text-2xl flex-shrink-0 mt-0.5" />
                     <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                       Didesain dengan jaminan perlindungan mutlak terhadap segala <strong>benturan keras, pencegahan karat (abrasi), dan tahan cairan kimia keras</strong>.
                     </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 lg:mt-0">
                 <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white group-hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(52,211,153,0.3)] flex items-center justify-center aspect-[4/3] p-4 sm:p-6 relative">
                   {/* <div className="absolute top-3 left-3 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10 uppercase tracking-wider">Inner Resin</div> */}
                   <img src={safetyInnerImg} alt="Inner Box Acryl Resin" className="w-full h-full object-contain drop-shadow-lg scale-110" />
                 </div>
                 <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white group-hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(96,165,250,0.3)] flex items-center justify-center aspect-[4/3] relative">
                   {/* <div className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10 uppercase tracking-wider">Outer Nylon</div> */}
                   <img src={safetyOuterImg} alt="Outer Box Cast Nylon" className="w-full h-full object-cover scale-105" />
                 </div>
              </div>
            </div>

          </div>

          {/* Section Divider: Mineral */}
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 border border-orange-400/30">
              <Icon icon="mdi:atom" className="text-orange-500 text-xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-navy-900 tracking-tight">Terbuat dari Mineral Alami Berkualitas Tinggi</h3>
            <div className="h-px bg-gray-300 flex-1 ml-4 hidden md:block"></div>
          </div>

          {/* Card 3: Tourmaline */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:-translate-y-1 transition-transform duration-300">
            {/* Image container mapping top part of minerals.png */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-emerald-50 shadow-lg relative bg-white flex items-center justify-center">
              <img src={tourmalineImg} alt="Tourmaline" className="w-[85%] h-[85%] object-contain drop-shadow-md" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Icon icon="mdi:crystal-gem" /> Komponen Utama
              </div>
              <h4 className="text-navy-900 font-bold mb-3 text-xl md:text-2xl">Apa itu Tourmaline?</h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Satu-satunya mineral di Bumi yang menghasilkan listrik. Diidentifikasi sebagai "Batu Elektrik" pada awal abad ke-18. Ilmuwan dari Universitas Tokyo membuktikan bahwa mineral ini terus memancarkan listrik 0.06 mA saat menerima beban atau panas. Tourmaline berfungsi sebagai <strong>"elektroda permanen"</strong> yang menghasilkan aliran elektron tanpa batas, tak peduli sekecil apapun material ini dihancurkan.
              </p>
            </div>
          </div>

          {/* Card 4: Ferrite */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:-translate-y-1 transition-transform duration-300">
            {/* Image container mapping bottom part of minerals.png */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-blue-50 shadow-lg relative bg-white flex items-center justify-center">
              <img src={ferriteImg} alt="Ferrite" className="w-[85%] h-[85%] object-contain drop-shadow-md" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Icon icon="mdi:magnet" /> Penstabil Magnetik
              </div>
              <h4 className="text-navy-900 font-bold mb-3 text-xl md:text-2xl">Apa itu Ferrite?</h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Material magnetik canggih yang dibuat dengan mencampur dan memanaskan (sintering) oksida besi sebagai komponen utama bersama unsur logam esensial seperti kobalt, nikel, dan mangan. Di dalam inti ecomo, material ini berfungsi maksimal sebagai magnet berkekuatan tinggi untuk memberikan kemampuan penghilangan noise pada aliran frekuensi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks
