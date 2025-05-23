"use client"

import { useState, useEffect, useContext } from "react"
import { useSearchParams } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"
import MediaCard from "../components/MediaCard"
import mediaData from "../data/mediaData"

// Search page with filtering functionality
const SearchPage = () => {
  const { translations, language } = useContext(TranslationContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [results, setResults] = useState([])

  // Categories for filter
  const categories = [
    { id: "all", name: translations.search.allCategories },
    { id: "music", name: translations.categories.music },
    { id: "film", name: translations.categories.film },
    { id: "cinema", name: translations.categories.cinema },
    { id: "kids", name: translations.categories.kids },
    { id: "educational", name: translations.categories.educational },
    { id: "documentary", name: translations.categories.documentary },
    { id: "series", name: translations.categories.series },
  ]

  // Filter media based on search query and category
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim()

    let filtered = mediaData

    // Filter by category if not 'all'
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )

      // Update URL with search query
      setSearchParams({ q: query })
    } else {
      setSearchParams({})
    }

    setResults(filtered)
  }, [searchQuery, selectedCategory, setSearchParams])

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Handle category filter change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-8">
        <span className={language === "am" ? "amharic" : ""}>{translations.search.title}</span>
      </h1>

      <div className="mb-8">
        {/* Search input */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={translations.search.placeholder}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-red-500"
              />
              <div className="absolute left-3 top-3 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className="w-full md:w-64">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search results */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          <span className={language === "am" ? "amharic" : ""}>
            {results.length > 0 ? `${translations.search.results} (${results.length})` : translations.search.noResults}
          </span>
        </h2>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {results.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-lg">
            <svg
              className="w-16 h-16 mx-auto text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-400">
              <span className={language === "am" ? "amharic" : ""}>{translations.search.tryDifferent}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage
