import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'
import { advantages } from '../data'

const Advantages = () => {
  return (
    <section id="advantages" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Keunggulan Kami"
            title="Mengapa Memilih Nusa Prima Energi?"
            description="Kami tidak hanya menjual produk – kami menghadirkan solusi lengkap yang memberi dampak nyata pada bisnis Anda."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.id}
              className="group bg-white border border-gray-100 shadow-sm
                         rounded-2xl p-7 hover:shadow-md hover:-translate-y-1
                         transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4
                               group-hover:bg-blue-100 transition-colors">
                <Icon name={adv.icon} size={22} className="text-blue-600" />
              </div>

              <h3 className="text-navy-900 font-bold text-lg mb-2">{adv.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
