import { Icon } from '@iconify/react'
import certificateImg from '../assets/certificate.png'

const Distributor = () => {
  return (
    <section id='certificate' className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-tr-full -z-10" />

      <div className="container-custom">
        <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-10">
          
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
            <div className="relative group rounded-xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.2)] border border-white/20 transition-transform duration-300 hover:scale-105">
              <img 
                src={certificateImg} 
                alt="Sertifikat Distributor Resmi" 
                className="w-48 sm:w-60 md:w-72 h-auto object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <a 
                  href="/Sertifikat_Distributor_Resmi.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/90 text-navy-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-white"
                >
                  <Icon icon="mdi:magnify" width={18}/> Perbesar
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-semibold mb-6">
              <Icon icon="mdi:certificate-outline" width={16} />
              <span>Sertifikat Kemitraan Resmi</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
              PT Nusa Prima Energi Indonesia adalah Distributor Resmi <span className="text-emerald-400">Ecomo</span>
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Kami dipercaya sebagai mitra distribusi resmi produk ecomo di wilayah Indonesia. Dikembangkan oleh <strong>Hayabusa Holdings</strong> di Jepang, teknologi revolusioner ecomo telah dipatenkan dan terbukti andal dalam menyempurnakan aliran listrik yang efisien untuk berbagai industri.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* <a 
                href="/Sertifikat_Distributor_Resmi.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Icon icon="mdi:file-pdf-box" width={20} />
                Lihat Sertifikat
              </a> */}
              <a 
                href="https://hayabusa-holdings.com/case/ecomo/#:~:text=PT.Nusa%20Prima%20Energi%20Indonesia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white px-4 py-3 font-semibold transition-colors group"
              >
                Baca Selengkapnya
                <Icon icon="mdi:arrow-top-right" width={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Distributor
