import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { useSiteStore } from '../store/useSiteStore'

import g1 from '../assets/galery_photo/image1.jpeg'
import g2 from '../assets/galery_photo/image2.jpeg'
import g3 from '../assets/galery_photo/image3.jpeg'
import g4 from '../assets/galery_photo/image4.jpeg'
import g5 from '../assets/galery_photo/image5.jpeg'
import g6 from '../assets/galery_photo/image6.jpeg'
import g7 from '../assets/galery_photo/image7.jpeg'
import g8 from '../assets/galery_photo/image8.jpeg'

const galleryPhotos = [g1, g2, g3, g4, g5, g6, g7, g8]

const CaseStudy = () => {
  const getSectionData = useSiteStore((state) => state.getSectionData)
  const caseSection = getSectionData('case_study')
  const caseData = caseSection?.blocks?.[0] || null

  const subtitle = caseData?.subtitle
  const title = caseData?.title
  const description = caseData?.description
  const source = caseData?.extra?.source

  const items = caseData?.items?.map((item, index) => {
        try {
          // Parsing: "Toyo Corporation (Jul 2018, 60kVA): 15% reduction"
          const mainParts = item.title.split(':')
          const infoPart = mainParts[0]
          const reductionPart = mainParts[1]

          const name = infoPart.split('(')[0]?.trim() || "Company"
          const meta = infoPart.split('(')[1]?.replace(')', '') || ""
          const date = meta.split(',')[0]?.trim() || ""
          const unit = meta.split(',')[1]?.trim() || ""
          const reduction = reductionPart?.match(/\d+/)?.[0] || "0"

          return {
            id: item.id || index,
            name,
            installDate: date,
            unit,
            reduction,
            image: galleryPhotos[index % galleryPhotos.length]
          }
        } catch (e) {
          return { id: index, name: item.title, installDate: '', unit: '', reduction: '0', image: galleryPhotos[index % galleryPhotos.length] }
        }
      }) || []

  return (
    <section id="case-study" className="section-padding gradient-navy">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle={subtitle}
            title={title}
            description={description}
            light
          />
        </div>

        {/* Case study grid — pamphlet style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((cs) => (
            <div
              key={cs.id}
              className="group bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-white/5">
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-4">
                {/* Company / facility name */}
                <h3 className="text-white font-semibold text-sm leading-snug mb-3 line-clamp-2">
                  {cs.name}
                </h3>

                {/* Install date & unit */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1.5 text-blue-300 text-xs">
                    <Icon icon="lucide:calendar" width={11} height={11} className="flex-shrink-0" />
                    <span>{cs.installDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-300 text-xs">
                    <Icon icon="lucide:zap" width={11} height={11} className="flex-shrink-0" />
                    <span>Unit {cs.unit}</span>
                  </div>
                </div>

                {/* Bold reduction % — matches pamphlet style */}
                <p
                  className="text-2xl text-emerald-400 font-black leading-none"
                >
                  {cs.reduction}% reduction
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Source note */}
        {/* <p className="text-center text-blue-400 text-xs mt-10">
          * {source}
        </p> */}
      </div>
    </section>
  )
}

export default CaseStudy
