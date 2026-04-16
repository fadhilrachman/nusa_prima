import SectionTitle from '../components/SectionTitle'

const standardModels = [
  { volume: 'Ssize(3p3w) Individual model', dimension: '(120×120×60)×3', wire: '1m', weight: '5kg' },
  { volume: 'Msize(3p3w) Individual model', dimension: '(130×156×91)×3', wire: 'CV8/2.7m', weight: '6kg' },
  { volume: 'Lsize(3p3w) Individual model', dimension: '(140×161×101)×3', wire: 'CV8/2.7m', weight: '7kg' },
  { volume: '30kVA(3p3w) Individual model', dimension: '(135×160×110)×3', wire: 'CV14/2.7m', weight: '8kg' },
  { volume: '50kVA(3p3w) Individual model', dimension: '(140×170×135)×3', wire: 'CV14/2.7m', weight: '10kg' },
  { volume: '100kVA(3p3w) Individual model', dimension: '(150×190×115)×3', wire: 'CV14/2.7m', weight: '12kg' },
]

const customModels = [
  { volume: '150kVA(3p3w) Individual model', dimension: '(180×232×116)×3', wire: 'CV14/2.7m', weight: '17kg' },
  { volume: '200kVA(3p3w) Individual model', dimension: '(190×272×142)×3', wire: 'CV22/2.7m', weight: '22kg' },
  { volume: '300kVA(3p3w) Individual model', dimension: '(190×292×142)×3', wire: 'CV22/2.7m', weight: '33kg' },
  { volume: '400kVA(3p3w) Individual model', dimension: '(180×332×152)×3', wire: 'CV38/2.7m', weight: '39kg' },
  { volume: '500kVA(3p3w) Individual model', dimension: '(190×352×162)×3', wire: 'CV38/2.7m', weight: '43kg' },
  { volume: '750kVA(3p3w) Individual model', dimension: '(240×442×152)×3', wire: 'CV38/2.7m', weight: '66kg' },
  { volume: '1000kVA(3p3w) Individual model', dimension: '(300×502×202)×3', wire: 'CV38/2.7m', weight: '135kg' },
]

const TableHeader = () => (
  <thead>
    <tr className="bg-navy-900 text-white text-sm">
      <th className="px-5 py-4 text-left font-semibold rounded-tl-xl">Volume</th>
      <th className="px-5 py-4 text-left font-semibold">
        <div>Outside Dimension (mm)</div>
        <div className="text-blue-300 text-xs font-normal mt-0.5">W × H × D</div>
      </th>
      <th className="px-5 py-4 text-left font-semibold">
        <div>Connection Wire</div>
        <div className="text-blue-300 text-xs font-normal mt-0.5">Length / Wire</div>
      </th>
      <th className="px-5 py-4 text-left font-semibold rounded-tr-xl">
        <div>Weight</div>
        <div className="text-blue-300 text-xs font-normal mt-0.5">kg</div>
      </th>
    </tr>
  </thead>
)

const TableRow = ({ item, idx }) => (
  <tr className={`border-b border-gray-100 transition-colors duration-200
                  ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}
                  hover:bg-blue-50/60`}>
    <td className="px-5 py-3.5 text-sm font-medium text-navy-900">{item.volume}</td>
    <td className="px-5 py-3.5 text-sm text-gray-600 font-mono">{item.dimension}</td>
    <td className="px-5 py-3.5 text-sm text-gray-600 font-mono">{item.wire}</td>
    <td className="px-5 py-3.5 text-sm text-gray-600 font-semibold">{item.weight}</td>
  </tr>
)

const ProductSpecs = () => {
  return (
    <section id="specs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center mb-14">
          <SectionTitle
            subtitle="Specifications"
            title="Spesifikasi Produk"
            description="Tersedia dalam berbagai kapasitas mulai dari skala kecil hingga industri besar. Unit di atas 100kVA tersedia secara build-to-order."
            align="center"
          />
        </div>

        {/* Standard Models */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-blue-500 rounded-full" />
            <h3 className="text-lg font-bold text-navy-900">Standard Lineup</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <TableHeader />
                <tbody>
                  {standardModels.map((item, idx) => (
                    <TableRow key={item.volume} item={item} idx={idx} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Divider note */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-blue-200" />
          <span className="text-blue-600 text-sm font-semibold px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            Build-to-Order mulai dari 100kVA ke atas
          </span>
          <div className="flex-1 h-px bg-blue-200" />
        </div>

        {/* Custom / BTO Models */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-cyan-500 rounded-full" />
            <h3 className="text-lg font-bold text-navy-900">Build-to-Order Lineup</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <TableHeader />
                <tbody>
                  {customModels.map((item, idx) => (
                    <TableRow key={item.volume} item={item} idx={idx} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs text-gray-500 mt-4">
          <span>※ Ukuran merupakan angka referensi.</span>
          <span>※ Di atas 1000 kVA akan dibuat secara custom.</span>
        </div>
      </div>
    </section>
  )
}

export default ProductSpecs
