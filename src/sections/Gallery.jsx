import { useState, useCallback } from 'react'
import SectionTitle from '../components/SectionTitle'
import { Icon } from '@iconify/react'

// Dynamic import all 44 gallery photos
import image1 from '../assets/galery_photo/image1.jpeg'
import image2 from '../assets/galery_photo/image2.jpeg'
import image3 from '../assets/galery_photo/image3.jpeg'
import image4 from '../assets/galery_photo/image4.jpeg'
import image5 from '../assets/galery_photo/image5.jpeg'
import image6 from '../assets/galery_photo/image6.jpeg'
import image7 from '../assets/galery_photo/image7.jpeg'
import image8 from '../assets/galery_photo/image8.jpeg'
import image9 from '../assets/galery_photo/image9.jpeg'
import image10 from '../assets/galery_photo/image10.jpeg'
import image11 from '../assets/galery_photo/image11.jpeg'
import image12 from '../assets/galery_photo/image12.jpeg'
import image13 from '../assets/galery_photo/image13.jpeg'
import image14 from '../assets/galery_photo/image14.jpeg'
import image15 from '../assets/galery_photo/image15.jpeg'
import image16 from '../assets/galery_photo/image16.jpeg'
import image17 from '../assets/galery_photo/image17.jpeg'
import image18 from '../assets/galery_photo/image18.jpeg'
import image19 from '../assets/galery_photo/image19.jpeg'
import image20 from '../assets/galery_photo/image20.jpeg'
import image21 from '../assets/galery_photo/image21.jpeg'
import image22 from '../assets/galery_photo/image22.jpeg'
import image23 from '../assets/galery_photo/image23.jpeg'
import image24 from '../assets/galery_photo/image24.jpeg'
import image25 from '../assets/galery_photo/image25.jpeg'
import image26 from '../assets/galery_photo/image26.jpeg'
import image27 from '../assets/galery_photo/image27.jpeg'
import image28 from '../assets/galery_photo/image28.jpeg'
import image29 from '../assets/galery_photo/image29.jpeg'
import image30 from '../assets/galery_photo/image30.jpeg'
import image31 from '../assets/galery_photo/image31.jpeg'
import image32 from '../assets/galery_photo/image32.jpeg'
import image33 from '../assets/galery_photo/image33.jpeg'
import image34 from '../assets/galery_photo/image34.jpeg'
import image35 from '../assets/galery_photo/image35.jpeg'
import image36 from '../assets/galery_photo/image36.jpeg'
import image37 from '../assets/galery_photo/image37.jpeg'
import image38 from '../assets/galery_photo/image38.jpeg'
import image39 from '../assets/galery_photo/image39.jpeg'
import image40 from '../assets/galery_photo/image40.jpeg'
import image41 from '../assets/galery_photo/image41.jpeg'
import image42 from '../assets/galery_photo/image42.jpeg'
import image43 from '../assets/galery_photo/image43.jpeg'
import image44 from '../assets/galery_photo/image44.jpeg'

const photos = [
  image1, image2, image3, image4, image5, image6, image7, image8,
  image9, image10, image11, image12, image13, image14, image15, image16,
  image17, image18, image19, image20, image21, image22, image23, image24,
  image25, image26, image27, image28, image29, image30, image31, image32,
  image33, image34, image35, image36, image37, image38, image39, image40,
  image41, image42, image43, image44
]

const INITIAL_COUNT = 12
const LOAD_MORE_COUNT = 8

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [selectedIdx, setSelectedIdx] = useState(null)

  const goNext = useCallback((e) => {
    e.stopPropagation()
    setSelectedIdx((prev) => (prev + 1) % photos.length)
  }, [])

  const goPrev = useCallback((e) => {
    e.stopPropagation()
    setSelectedIdx((prev) => (prev - 1 + photos.length) % photos.length)
  }, [])

  const closeModal = useCallback(() => setSelectedIdx(null), [])

  const visiblePhotos = photos.slice(0, visibleCount)
  const hasMore = visibleCount < photos.length

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, photos.length))
  }

  return (
    <section id="gallery" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex justify-center mb-12">
          <SectionTitle
            subtitle="Galeri Dokumentasi"
            title="Aktivitas & Pemasangan Lapangan"
            description="Dokumentasi pemasangan unit ecomo di berbagai fasilitas klien kami."
            align="center"
          />
        </div>

        {/* Masonry-style grid using columns */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {visiblePhotos.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer
                         shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
              onClick={() => setSelectedIdx(i)}
            >
              <img
                src={src}
                alt={`Galeri ecomo ${i + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <Icon icon="lucide:zoom-in" width={22} height={22} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMore}
              className="text-blue-600 underline text-sm hover:text-blue-800 transition-colors"
            >
              Tampilkan lebih banyak
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeModal}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white hover:rotate-90 transition-all duration-200 z-10"
            onClick={closeModal}
          >
            <Icon icon="lucide:x" width={32} height={32} />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest">
            {selectedIdx + 1} / {photos.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 sm:left-8 text-white/60 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full"
            onClick={goPrev}
          >
            <Icon icon="lucide:chevron-left" width={28} height={28} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] w-full px-16 sm:px-24 flex items-center justify-center animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIdx]}
              alt={`Galeri ecomo ${selectedIdx + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 sm:right-8 text-white/60 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full"
            onClick={goNext}
          >
            <Icon icon="lucide:chevron-right" width={28} height={28} />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
