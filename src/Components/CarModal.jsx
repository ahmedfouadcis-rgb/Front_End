import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './CarModal.css' // See CSS below
import image from '../assets/product-4.png'
export default function CarModal() {
  // 1. Initialize Embla with Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ])

  // 2. Button Handlers
  const play = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    autoplay.play()
  }, [emblaApi])

  const pause = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    autoplay.stop()
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const slides = [6, 1, 2, 3, 4, 5]

  return (
    <div className="carousel-container">
      <h2>Auto Play & Pause with buttons</h2>

      <div className="embla-viewport">
        {/* Navigation Arrows */}
        <button className="nav-btn prev border border-0" onClick={scrollPrev}>
          <i className="bi bi-arrow-left-circle-fill fs-3 text-primary"></i>
        </button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="slide__content">
                  {/* {index} */}
                  <img className="img-fluid" src={image} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn next border border-0" onClick={scrollNext}>
          <i className="bi bi-arrow-right-circle-fill fs-3 text-primary"></i>
        </button>
      </div>

      {/* Control Buttons */}
    </div>
  )
}