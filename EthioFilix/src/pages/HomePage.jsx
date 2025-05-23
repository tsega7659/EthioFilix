"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"
import Hero from "../components/Hero"
import MediaCard from "../components/MediaCard"
import mediaData from "../data/mediaData"

// Home page with hero and categorized media carousels
const HomePage = () => {
  const { translations, language } = useContext(TranslationContext)

  // Group media by category
  const categories = [
    { id: "music", name: translations.categories.music },
    { id: "film", name: translations.categories.film },
    { id: "cinema", name: translations.categories.cinema },
    { id: "kids", name: translations.categories.kids },
    { id: "educational", name: translations.categories.educational },
    { id: "documentary", name: translations.categories.documentary },
    { id: "series", name: translations.categories.series },
  ]

  return (
    <div className="pt-16">
      {/* Hero section */}
      <Hero />

      {/* Category carousels */}
      <div className="container mx-auto px-4 py-8">
        {categories.map((category) => {
          const categoryMedia = mediaData.filter((item) => item.category === category.id)

          if (categoryMedia.length === 0) return null

          return (
            <div key={category.id} className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  <span className={language === "am" ? "amharic" : ""}>{category.name}</span>
                </h2>
                <Link to={`/category/${category.id}`} className="text-sm text-red-500 hover:text-red-400">
                  <span className={language === "am" ? "amharic" : ""}>{translations.home.viewAll}</span>
                </Link>
              </div>

              {/* Horizontal scrollable carousel */}
              <div className="media-carousel flex overflow-x-auto space-x-4 pb-4">
                {categoryMedia.map((media) => (
                  <div key={media.id} className="flex-none w-64">
                    <MediaCard media={media} />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
