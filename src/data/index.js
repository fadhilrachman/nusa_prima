// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'Tentang Kami',  href: '#about' },
  { label: 'Produk',        href: '#product' },
  { label: 'Sektor',    href: '#sectors' },
  { label: 'Cara Kerja',    href: '#how-it-works' },
  { label: 'Studi Kasus',    href: '#case-study' },
  { label: 'Sertifikat',    href: '#certificate' },
]

// ─── Business Sectors ────────────────────────────────────────────────────────
export const sectors = [
  {
    id: 1,
    title: 'Pabrik / Plant',
    description: 'Solusi efisiensi energi skala besar untuk sektor manufaktur dan industri berat.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
    icon: 'mdi:factory',
  },
  {
    id: 2,
    title: 'Supermarket',
    description: 'Optimalkan konsumsi energi pendingin, pencahayaan, dan sistem HVAC pusat perbelanjaan.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
    icon: 'mdi:store',
  },
  {
    id: 3,
    title: 'Gudang / Freezer',
    description: 'Hemat energi pada cold storage dan warehouse dengan konsumsi pendingin tinggi.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    icon: 'mdi:warehouse',
  },
  {
    id: 4,
    title: 'Rumah Sakit',
    description: 'Sistem energi andal dan efisien untuk layanan kesehatan yang tak terputus.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    icon: 'mdi:hospital-building',
  },
  {
    id: 5,
    title: 'Gedung Perkantoran',
    description: 'Optimasi energi untuk gedung perkantoran modern dengan teknologi hemat daya terdepan.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    icon: 'mdi:office-building',
  },
  {
    id: 6,
    title: 'Fasilitas Hiburan',
    description: 'Efisiensi energi untuk pusat hiburan, mall, dan fasilitas rekreasi berskala besar.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
    icon: 'mdi:ferris-wheel',
  },
]

// ─── Product Features ─────────────────────────────────────────────────────────
export const productFeatures = [
  { text: 'Mengurangi konsumsi listrik 5% hingga 15% setelah instalasi' },
  { text: 'Menggunakan mineral Tourmaline alami untuk menghaluskan aliran arus listrik' },
  { text: 'Material Ferrite khusus untuk mereduksi harmonik dan meningkatkan efisiensi' },
  { text: 'Tidak ada komponen elektronik (kapasitor, IC) yang dapat rusak atau menurun' },
  { text: 'Dihubungkan langsung ke sisi sekunder transformator daya' },
  { text: 'Produk telah dipatenkan sebagai "Power Improvement Equipment" oleh Satsuki Co., Ltd.' },
]

// ─── Advantages ───────────────────────────────────────────────────────────────
export const advantages = [
  {
    id: 1,
    title: 'Teknologi Paten Jepang',
    description: 'Produk ecomo telah dipatenkan dan terjual lebih dari 3.000 unit sejak 2003 di Jepang, Cina, dan internasional.',
    icon: 'lucide:award',
  },
  {
    id: 2,
    title: 'Hemat 5–15% Listrik',
    description: 'Pengurangan konsumsi listrik 5–15% dapat diharapkan setelah instalasi, tergantung pada beban dan kondisi fasilitas.',
    icon: 'lucide:trending-down',
  },
  {
    id: 3,
    title: 'Instalasi Hanya 2 Jam',
    description: 'Hanya perlu dihubungkan ke sisi sekunder transformator. Pekerjaan instalasi memakan waktu sekitar 2 jam saja.',
    icon: 'lucide:clock',
  },
  {
    id: 4,
    title: 'Tanpa Risiko Kerusakan',
    description: 'Tidak ada arus yang mengalir di unit utama. Tidak ada komponen elektronik yang bisa aus atau rusak — awet seumur hidup.',
    icon: 'lucide:shield-check',
  },
  {
    id: 5,
    title: 'Solusi Menyeluruh',
    description: 'Kami menyediakan proposal konservasi energi holistik mencakup distribusi daya dan efisiensi peralatan fasilitas.',
    icon: 'lucide:layout-grid',
  },
  {
    id: 6,
    title: 'Efisiensi Berkelanjutan',
    description: 'Mendukung program efisiensi energi dan pengurangan jejak karbon secara berkelanjutan untuk masa depan.',
    icon: 'lucide:leaf',
  },
]

// ─── How It Works (Installation Flow) ────────────────────────────────────────
export const installationSteps = [
  {
    id: 1,
    title: 'Permintaan Awal & Data',
    description: 'Pelanggan menyerahkan ringkasan tagihan listrik 1 tahun dan diagram panel distribusi / daftar transformator.',
    icon: 'lucide:file-text',
  },
  {
    id: 2,
    title: 'Simulasi & Proposal',
    description: 'Tim ahli kami menyusun simulasi penghematan energi dan mengajukan proposal terukur kepada pelanggan.',
    icon: 'lucide:bar-chart-2',
  },
  {
    id: 3,
    title: 'Pemesanan',
    description: 'Setelah menyetujui proposal, pelanggan melakukan pemesanan unit ecomo sesuai kebutuhan kapasitas.',
    icon: 'lucide:shopping-cart',
  },
  {
    id: 4,
    title: 'Pengiriman Unit',
    description: 'Unit ecomo dikirimkan ke lokasi fasilitas pelanggan dalam kondisi siap instalasi.',
    icon: 'lucide:package',
  },
  {
    id: 5,
    title: 'Instalasi Profesional',
    description: 'Teknisi berpengalaman melakukan instalasi langsung ke sisi sekunder transformator hanya dalam ~2 jam. Tidak perlu pemadaman listrik.',
    icon: 'lucide:zap',
  },
]

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const caseStudies = [
  {
    id: 1,
    name: 'Toyo Corporation',
    installDate: 'Juli 2018',
    unit: '60kVA',
    reduction: 15.0,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
  },
  {
    id: 2,
    name: 'Auto Parts Manufacturing Plant',
    installDate: 'Juli 2021',
    unit: '30kVA × 3',
    reduction: 13.5,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    id: 3,
    name: 'Clothing Manufacturing & Sales Company',
    installDate: 'Agustus 2021',
    unit: '50kVA',
    reduction: 9.0,
    image: 'https://images.unsplash.com/photo-1604093872489-8f0e7e5b5893?w=600&q=80',
  },
  {
    id: 4,
    name: 'Clothing Manufacturing & Sales Company',
    installDate: 'Oktober 2013',
    unit: '1.250kVA (700+500)',
    reduction: 9.0,
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
  },
  {
    id: 5,
    name: 'Electric Facilities Material Maker',
    installDate: 'Juni 2023',
    unit: '300kVA',
    reduction: 7.5,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    id: 6,
    name: 'Freezers and Refrigerators',
    installDate: 'Maret 2024',
    unit: '100kVA',
    reduction: 6.2,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    id: 7,
    name: 'Major Automobile Company',
    installDate: 'Februari 2020',
    unit: '300kVA',
    reduction: 9.6,
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=600&q=80',
  },
  {
    id: 8,
    name: 'Major Chemical Product Manufacturing Plant',
    installDate: 'Mei 2015',
    unit: '800kVA (400+400)',
    reduction: 9.9,
    image: 'https://images.unsplash.com/photo-1627325122335-947a5a80ab96?w=600&q=80',
  },
]

// ─── Mission List ─────────────────────────────────────────────────────────────
export const missions = [
  'Menyediakan produk penghemat energi ecomo dengan teknologi paten Jepang berkualitas tinggi.',
  'Membantu pelanggan mengoptimalkan penggunaan energi dan menekan biaya operasional secara terukur.',
  'Memberikan layanan profesional mulai dari konsultasi, simulasi data, hingga instalasi dan purna jual.',
  'Mendukung terciptanya lingkungan industri yang lebih hemat energi dan berkelanjutan.',
  'Membangun kemitraan jangka panjang yang saling menguntungkan dengan seluruh pelanggan.',
]

// ─── Company Values ───────────────────────────────────────────────────────────
export const values = [
  {
    id: 1,
    title: 'Integritas',
    description: 'Kami beroperasi dengan kejujuran dan transparansi penuh dalam setiap aspek bisnis.',
    icon: 'mdi:scale-balance',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: 'Inovasi',
    description: 'Selalu menghadirkan teknologi terdepan – seperti mineral Tourmaline dan Ferrite – untuk menjawab tantangan energi masa kini.',
    icon: 'mdi:lightbulb-on',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    id: 3,
    title: 'Efisiensi',
    description: 'Mengoptimalkan setiap sumber daya untuk memberikan nilai penghematan terbaik yang terukur bagi klien.',
    icon: 'mdi:lightning-bolt',
    color: 'from-sky-500 to-sky-700',
  },
  {
    id: 4,
    title: 'Pelayanan',
    description: 'Kepuasan klien adalah prioritas utama – kami hadir dari konsultasi awal, instalasi, hingga pemantauan purna jual.',
    icon: 'mdi:handshake',
    color: 'from-cyan-500 to-cyan-700',
  },
]

// ─── Target Markets ───────────────────────────────────────────────────────────
export const targetMarkets = [
  {
    id: 1,
    title: 'Industri Manufaktur',
    description: 'Penghematan signifikan pada motor-motor industri dan sistem produksi manufaktur.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
  },
  {
    id: 2,
    title: 'Hotel & Hospitality',
    description: 'Tekan biaya energi operasional hotel tanpa mengorbankan kenyamanan tamu.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    id: 3,
    title: 'Rumah Sakit & Fasilitas Kesehatan',
    description: 'Suplai daya stabil dan efisien untuk mendukung peralatan medis kritis.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
  },
  {
    id: 4,
    title: 'Gedung Perkantoran',
    description: 'Optimalkan konsumsi energi gedung perkantoran modern untuk efisiensi operasional jangka panjang.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    id: 5,
    title: 'Pusat Perbelanjaan & Department Store',
    description: 'Optimalkan konsumsi energi HVAC, eskalator, dan sistem pencahayaan area komersial.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80',
  },
]

// ─── Contact Info ─────────────────────────────────────────────────────────────
export const contactInfo = [
  {
    id: 1,
    label: 'Alamat',
    value: 'Jl. Gatot Subroto No. 45, Jakarta Selatan 12950',
    icon: 'lucide:map-pin',
  },
  {
    id: 2,
    label: 'Telepon',
    value: '+62 21 5555-0123',
    icon: 'lucide:phone',
  },
  {
    id: 3,
    label: 'Email',
    value: 'info@nusaprimaenergi.co.id',
    icon: 'lucide:mail',
  },
  {
    id: 4,
    label: 'Jam Kerja',
    value: 'Senin – Jumat, 08:00 – 17:00 WIB',
    icon: 'lucide:clock',
  },
]
