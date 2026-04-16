import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { sectors as defaultSectors } from '../data'
import { useSiteStore } from '../store/useSiteStore'

const Sectors = () => {
  const getSectionData = useSiteStore((state) => state.getSectionData)
  const sectorsSection = getSectionData('sectors')
  const sectorsData = sectorsSection?.blocks?.[0] || null

  const subtitle = sectorsData?.subtitle 
  const title = sectorsData?.title 
  const description = sectorsData?.description 

  
  const items = sectorsData?.items?.length 
    ? sectorsData.items.map((item, index) => {
        const parts = item.title.split(' - ')
        const itemTitle = parts[0] ? parts[0].trim() : item.title
        const itemDesc = parts[1] || item.description || ''
        const defaultItem = defaultSectors[index] || defaultSectors[0]
        
        return {
          id: item.id || index,
          title: itemTitle,
          description: itemDesc,
          image: defaultItem.image,
          icon: defaultItem.icon,
        }
      })
    : []

  return (
    <section id="sectors" className="section-padding gradient-navy">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle={subtitle}
            title={title}
            description={description}
            light
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((sector) => (
            <div
              key={sector.id}
              className="group relative rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="mb-2">
                  <Icon icon={sector.icon} width={28} height={28} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{sector.title}</h3>
                <p className="text-blue-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100
                               translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sectors
