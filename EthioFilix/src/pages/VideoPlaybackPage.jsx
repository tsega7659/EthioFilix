"use client"

import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"
import VideoPlayer from "../components/VideoPlayer"
import MediaCard from "../components/MediaCard"
import mediaData from "../data/mediaData"

// Page for video playback
const VideoPlaybackPage = () => {
  const { mediaId } = useParams()
  const { translations, language } = useContext(TranslationContext)
  const [media, setMedia] = useState(null)
  const [relatedMedia, setRelatedMedia] = useState([])

  // Find media by ID
  useEffect(() => {
    const foundMedia = mediaData.find((item) => item.id === mediaId)

    if (foundMedia) {
      setMedia(foundMedia)

      // Find related media (same category, excluding current)
      const related = mediaData
        .filter((item) => item.category === foundMedia.category && item.id !== mediaId)
        .slice(0, 5)

      setRelatedMedia(related)

      // Update document title
      document.title = `${foundMedia.title} - EthioStream`
    }

    // Scroll to top
    window.scrollTo(0, 0)
  }, [mediaId])

  if (!media) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 text-center">
        <p className="text-xl text-gray-400">
          <span className={language === "am" ? "amharic" : ""}>{translations.video.notFound}</span>
        </p>
        <Link to="/" className="btn-primary mt-4 inline-block">
          <span className={language === "am" ? "amharic" : ""}>{translations.video.backHome}</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Video player */}
      <div className="w-full bg-black">
        <VideoPlayer videoUrl={media.videoUrl} posterUrl={media.thumbnail} title={media.title} />
      </div>

      {/* Video details */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className={language === "am" ? "amharic" : ""}>{media.title}</span>
          </h1>

          <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
            <span>{media.year}</span>
            <span className="mx-2">•</span>
            <span>{media.duration}</span>
            <span className="mx-2">•</span>
            <Link to={`/category/${media.category}`} className="text-red-500 hover:underline">
              <span className={language === "am" ? "amharic" : ""}>
                {(() => {
                  switch (media.category) {
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
                      return media.category
                  }
                })()}
              </span>
            </Link>
          </div>

          <p className="text-gray-300">
            <span className={language === "am" ? "amharic" : ""}>
              {language === "en" ? media.description : media.descriptionAm}
            </span>
          </p>
        </div>

        {/* Related content */}
        {relatedMedia.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className={language === "am" ? "amharic" : ""}>{translations.video.related}</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {relatedMedia.map((item) => (
                <MediaCard key={item.id} media={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPlaybackPage
