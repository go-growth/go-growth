"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface TestimonialProps {
  name: string
  role: string
  quote: string
  stats: string
  videoUrl: string
  videoThumbnail: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "JACK RHYSIDER",
    role: "DARKNET DIARIES HOST",
    quote: "I'm constantly impressed by how good they are! Nice work.",
    stats: "5.2M VIEWS IN 4 MONTHS - DOWNLOAD CASE STUDY",
    videoUrl: "https://www.youtube.com/embed/KrhN8HrT1k0?si=UEhOf7K6-6u3ylAQ",
    videoThumbnail: "/placeholder.svg?height=400&width=600",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="min-h-screen flex items-center justify-center w-full p-4 bg-black text-white">
      <div className="max-w-6xl w-full">
        <div className="flex justify-between items-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#1a3a25] rounded-full">
            <span className="text-xs font-medium uppercase tracking-wide">
              {currentTestimonial.name} - {currentTestimonial.role}
            </span>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">{currentTestimonial.quote}</h2>
        </div>

        <div className="flex justify-center mb-16">
          <button className="rounded-full border border-gray-600 px-8 py-3 text-xs font-medium tracking-widest uppercase hover:border-gray-400 transition-colors">
            {currentTestimonial.stats}
          </button>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl aspect-video">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <iframe
                src={currentTestimonial.videoUrl}
                title={`${currentTestimonial.name} video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

