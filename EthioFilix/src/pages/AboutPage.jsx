"use client"

import { useContext } from "react"
import { TranslationContext } from "../context/TranslationContext"

// About page with project information
const AboutPage = () => {
  const { translations, language } = useContext(TranslationContext)

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          <span className={language === "am" ? "amharic" : ""}>{translations.about.title}</span>
        </h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            <span className={language === "am" ? "amharic" : ""}>{translations.about.aboutProject}</span>
          </h2>

          <p className="text-gray-300 mb-4">
            <span className={language === "am" ? "amharic" : ""}>{translations.about.description}</span>
          </p>

          <p className="text-gray-300">
            <span className={language === "am" ? "amharic" : ""}>{translations.about.openSource}</span>
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            <span className={language === "am" ? "amharic" : ""}>{translations.about.features}</span>
          </h2>

          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>
              <span className={language === "am" ? "amharic" : ""}>{translations.about.featureMultilingual}</span>
            </li>
            <li>
              <span className={language === "am" ? "amharic" : ""}>{translations.about.featureCategories}</span>
            </li>
            <li>
              <span className={language === "am" ? "amharic" : ""}>{translations.about.featureSearch}</span>
            </li>
            <li>
              <span className={language === "am" ? "amharic" : ""}>{translations.about.featureVideo}</span>
            </li>
            <li>
              <span className={language === "am" ? "amharic" : ""}>{translations.about.featureResponsive}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            <span className={language === "am" ? "amharic" : ""}>{translations.about.technologies}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="block font-semibold">React.js</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="block font-semibold">Tailwind CSS</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="block font-semibold">React Router</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="block font-semibold">Vite</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="block font-semibold">JavaScript</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <span className="block font-semibold">HTML5/CSS3</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/example/ethiopian-streaming-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className={language === "am" ? "amharic" : ""}>{translations.about.viewGithub}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
