import { Icon } from '@iconify/react'
import Logo from '../components/Logo'

const footerLinks = [
  {
    title: 'Perusahaan',
    links: ['Tentang Kami', 'Karir', 'Berita & Blog', 'CSR'],
  },
  {
    title: 'Layanan',
    links: ['Konsultasi Energi', 'Instalasi', 'Maintenance', 'Audit Energi'],
  },
  {
    title: 'Produk',
    links: ['ECOMO Residential', 'ECOMO Commercial', 'ECOMO Industrial', 'ECOMO Medical'],
  },
]

const socials = [
  { icon: 'lucide:facebook',  label: 'Facebook'  },
  { icon: 'lucide:instagram', label: 'Instagram' },
  { icon: 'lucide:linkedin',  label: 'LinkedIn'  },
  { icon: 'lucide:twitter',   label: 'Twitter'   },
  { icon: 'lucide:youtube',   label: 'YouTube'   },
]

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo size={52} className="drop-shadow-md" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Mitra terpercaya solusi hemat energi berbasis teknologi Jepang untuk bisnis Indonesia.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                             text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white
                             transition-all duration-200"
                >
                  <Icon icon={icon} width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} PT Nusa Prima Energi Indonesia. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
