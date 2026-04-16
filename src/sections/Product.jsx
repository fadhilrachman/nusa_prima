import { Icon } from '@iconify/react'
import SectionTitle from '../components/SectionTitle'
import { useSiteStore } from '../store/useSiteStore'
import { productFeatures } from '../data'
import Product1 from '../assets/product/product1.png'
import Product2 from '../assets/product/product2.png'

const defaultLineup = [
  {
    title: '3-Phase Individual Type',
    desc: 'Dirancang khusus untuk kebutuhan industri dan fasilitas skala besar dengan sistem kelistrikan 3-fase.',
    img: Product1,
    type: 'Industrial'
  },
  {
    title: 'Home & Store ecomo Series',
    desc: 'Tersedia dalam ukuran S (5~30kVA) untuk fasilitas kecil/rumah, serta ukuran M~L untuk fasilitas menengah.',
    img: Product2,
    type: 'Komersial / Residensial'
  }
]

const defaultEcoFeatures = [
    {
      title: 'Pengurangan CO2 melalui efisiensi konsumsi listrik',
      desc: 'Dengan menghemat listrik menggunakan ecomo, kami mengurangi emisi CO2 dari pembakaran bahan bakar fosil dan berkontribusi pada pencegahan pemanasan global.',
      icon: 'lucide:leaf'
    },
    {
      title: 'Instalasi mudah dan cepat, sekitar 30 menit',
      desc: 'Pemasangan sangat praktis dan cepat, dapat diselesaikan dalam waktu sekitar 30 menit.',
      icon: 'lucide:settings-2'
    },
    {
      title: 'Umur desain hingga 15 tahun',
      desc: 'Didesain secara khusus untuk memiliki umur operasional yang panjang hingga 15 tahun.',
      icon: 'lucide:calendar-clock'
    },
    {
      title: 'Aman karena tidak dilalui arus utama di unit',
      desc: 'Tidak ada listrik utama yang mengalir ke unit ecomo sehingga tidak menghasilkan panas. Daya disuplai langsung ke beban tanpa melalui ecomo.',
      icon: 'lucide:shield-check'
    },
    {
      title: 'Dapat dipindahkan saat relokasi fasilitas',
      desc: 'Jika pabrik atau kantor direlokasi, ecomo dapat dilepas dan dipasang kembali ke lokasi yang baru.',
      icon: 'lucide:move'
    },
    {
      title: 'Garansi kualitas 7 tahun',
      desc: 'Kami sangat yakin dengan kualitas produk kami, sehingga kami memberikan garansi kualitas selama 7 tahun penuh.',
      icon: 'lucide:award'
    }
]

const defaultEcoIcons = [
  'lucide:leaf', 'lucide:settings-2', 'lucide:calendar-clock', 
  'lucide:shield-check', 'lucide:move', 'lucide:award'
]

const Product = () => {
  const getSectionData = useSiteStore((state) => state.getSectionData)
  const productSection = getSectionData('product')
  const blocks = productSection?.blocks || []

  const headerBlock = blocks[0] || {}
  const subtitle = headerBlock.subtitle 
  const title = headerBlock.title 
  const description = headerBlock.description 

  const lineup = [
        {
          title: blocks[1]?.title || defaultLineup[0].title,
          desc: blocks[1]?.description || defaultLineup[0].desc,
          img: Product1,
          type: 'Industrial'
        },
        {
          title: blocks[2]?.title || defaultLineup[1].title,
          desc: blocks[2]?.description || defaultLineup[1].desc,
  img:Product2,          
          type: 'Komersial / Residensial'
        }
      ]
  

  const featuresBlock = blocks[3]
  const featuresTitle = featuresBlock?.description 
  
  const ecoFeatures = featuresBlock?.items?.map((item, idx) => ({
        title: item.title,
        desc: item.description,
        icon: defaultEcoIcons[idx] || 'lucide:check'
      }))
   

  return (
    <section id="product" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-24">
          <div className="flex justify-center mb-10">
            <SectionTitle
              subtitle={subtitle}
              title={title}
              description={description}
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lineup.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-56 w-full bg-white rounded-2xl mb-6 shadow-sm overflow-hidden flex items-center justify-center p-4">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-xl" />
                </div>
                <span className="text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full text-xs font-bold mb-4">{item.type}</span>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === PART 3: Green Eco Features === */}
        <div className="bg-blue-800 rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
           {/* Decorative elements */}
           <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
           <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl mix-blend-overlay"></div>

           <div className="relative z-10 text-center mb-16">
             <div className="inline-block border-2 border-blue-900 rounded-full py-4 px-8 bg-blue-600 shadow-lg">
               <h2 className="text-lg lg:text-2xl font-black text-white m-0">
                 {featuresTitle}
               </h2>
             </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 relative z-10">
             {ecoFeatures?.map((feature, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                     <Icon icon={feature.icon} width={32} height={32} className="text-white bg-white/20 p-1.5 rounded-lg flex-shrink-0" />
                     <h3 className="text-lg font-bold">{feature.title}</h3>
                  </div>
                  {feature.desc && <p className="text-white/90 text-sm leading-relaxed">{feature.desc}</p>}
                </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  )
}

export default Product
