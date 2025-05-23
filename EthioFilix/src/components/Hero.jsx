"use client"

import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"
import mediaData from "../data/mediaData"

// Hero component with featured content carousel
const Hero = () => {
  const { translations, language } = useContext(TranslationContext)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  // Filter featured content
  const featuredContent = mediaData.filter((item) => item.featured)
  const currentFeature = featuredContent[currentFeatureIndex]

  // Auto-rotate featured content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [featuredContent.length])

  // Manual navigation
  const goToFeature = (index) => {
    setCurrentFeatureIndex(index)
  }

  if (!currentFeature) return null

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background image or video */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={currentFeature.thumbnail || "/placeholder.svg"}
          alt={currentFeature.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16">
        <div className="max-w-2xl fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={language === "am" ? "amharic" : ""}>{currentFeature.title}</span>
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            <span className={language === "am" ? "amharic" : ""}>
              {language === "en" ? currentFeature.description : currentFeature.descriptionAm}
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to={`/watch/${currentFeature.id}`} className="btn-primary flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={language === "am" ? "amharic" : ""}>{translations.hero.playNow}</span>
            </Link>

            <button className="btn-secondary flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className={language === "am" ? "amharic" : ""}>{translations.hero.moreInfo}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToFeature(index)}
            className={`w-3 h-3 rounded-full ${index === currentFeatureIndex ? "bg-red-600" : "bg-gray-500"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
