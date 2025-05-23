"use client"

import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"

// Reusable card component for media items
const MediaCard = ({ media }) => {
  const { language } = useContext(TranslationContext)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card-hover relative rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <img
        src={media.thumbnail || "/placeholder.svg"}
        alt={media.title}
        className="w-full aspect-video object-cover"
        loading="lazy"
      />

      {/* Overlay on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col p-4 transition-opacity duration-300">
          <h3 className="text-lg font-bold mb-1">
            <span className={language === "am" ? "amharic" : ""}>{media.title}</span>
          </h3>

          <p className="text-sm text-gray-300 mb-2 line-clamp-3">
            <span className={language === "am" ? "amharic" : ""}>
              {language === "en" ? media.description : media.descriptionAm}
            </span>
          </p>

          <div className="flex items-center text-xs text-gray-400 mb-auto">
            <span>{media.duration}</span>
            <span className="mx-2">•</span>
            <span>{media.year}</span>
          </div>

          <Link to={`/watch/${media.id}`} className="mt-auto btn-primary text-center text-sm py-1">
            <span className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Play
            </span>
          </Link>
        </div>
      )}

      {/* Title (visible when not hovered) */}
      {!isHovered && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-sm font-semibold">
            <span className={language === "am" ? "amharic" : ""}>{media.title}</span>
          </h3>
        </div>
      )}
    </div>
  )
}

export default MediaCard
