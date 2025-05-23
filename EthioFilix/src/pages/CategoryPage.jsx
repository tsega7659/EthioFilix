"use client"

import { useContext } from "react"
import { useParams } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"
import MediaCard from "../components/MediaCard"
import mediaData from "../data/mediaData"

// Dynamic page for each category
const CategoryPage = () => {
  const { categoryId } = useParams()
  const { translations, language } = useContext(TranslationContext)

  // Get category name
  const getCategoryName = () => {
    switch (categoryId) {
      case "music":
        return translations.categories.music
      case "film":
        return translations.categories.film
      case "cinema":
        return translations.categories.cinema
      case "kids":
        return translations.categories.kids
      case "educational":
        return translations.categories.educational
      case "documentary":
        return translations.categories.documentary
      case "series":
        return translations.categories.series
      default:
        return categoryId
    }
  }

  // Filter media by category
  const categoryMedia = mediaData.filter((item) => item.category === categoryId)

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-8">
        <span className={language === "am" ? "amharic" : ""}>{getCategoryName()}</span>
      </h1>

      {categoryMedia.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categoryMedia.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">
            <span className={language === "am" ? "amharic" : ""}>{translations.category.noContent}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default CategoryPage
