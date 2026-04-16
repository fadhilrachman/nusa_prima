import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { useSiteStore } from '../store/useSiteStore'

const About = () => {
  const getSectionData = useSiteStore((state) => state.getSectionData)
  const aboutSection = getSectionData('about')
  const aboutData = aboutSection?.blocks?.[0] || null

  const subtitle = aboutData?.subtitle 
  const title = aboutData?.title 
  const description = aboutData?.description 
  const imageUrl = aboutData?.image_url 
  
  const defaultFeatures = [
    { icon: 'lucide:trending-down', text: 'Mendistribusikan ecomo — unit hemat daya yang mengurangi konsumsi listrik 5–15%' },
    { icon: 'lucide:building',      text: 'Melayani gedung perkantoran, pabrik manufaktur, hotel, rumah sakit, dan department store' },
    { icon: 'lucide:leaf',          text: 'Mendukung implementasi green building dan efisiensi energi jangka panjang yang berkelanjutan' },
  ]
  const defaultIcons = ['lucide:trending-down', 'lucide:building', 'lucide:leaf']
  const features = aboutData?.items?.length
    ? aboutData.items.map((item, i) => ({
        icon: defaultIcons[i] || 'lucide:check-circle',
        text: item.title,
      }))
    : []
    

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt="Kantor PT Nusa Prima Energi Indonesia"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 z-20 max-w-[200px]">
              <div className="text-4xl font-bold text-blue-700">5–15%</div>
              <div className="text-sm text-gray-500 mt-1">Penghematan Energi Terukur</div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <SectionTitle
              subtitle={subtitle}
              title={title}
              align="left"
            />

            <p className="text-gray-600 leading-relaxed mb-6">
              {description?.includes('Hayabusa Holdings') ? (
                // Highlight Hayabusa Holdings like original code if description contains it
                <>
                  {description.split('Hayabusa Holdings')[0]}
                  <a href="https://hayabusa-holdings.com" className='underline text-blue-600' target="_blank" rel="noopener noreferrer"><strong>Hayabusa Holdings</strong></a>
                  {description.split('Hayabusa Holdings')[1]}
                </>
              ) : (
                description
              )}
            </p>

            <ul className="space-y-4">
              {features.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 flex-shrink-0 text-blue-600">
                    <Icon icon={icon} width={22} height={22} />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

