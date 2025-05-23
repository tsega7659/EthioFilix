"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"

// Footer component with links to About, Contact, and GitHub Repository
const Footer = () => {
  const { translations, language } = useContext(TranslationContext)

  return (
    <footer className="bg-black py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-red-600 font-bold text-xl">
              EthioStream
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              <span className={language === "am" ? "amharic" : ""}>{translations.footer.copyright}</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
              <span className={language === "am" ? "amharic" : ""}>{translations.footer.about}</span>
            </Link>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className={language === "am" ? "amharic" : ""}>{translations.footer.contact}</span>
            </a>
            <a
              href="https://github.com/example/ethiopian-streaming-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <span className={language === "am" ? "amharic" : ""}>{translations.footer.github}</span>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-white font-semibold mb-3">{translations.categories.title}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/category/music" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.categories.music}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/film" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.categories.film}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/cinema" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.categories.cinema}</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">{translations.footer.explore}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/category/kids" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.categories.kids}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/educational" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.categories.educational}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/documentary" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.categories.documentary}</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">{translations.footer.account}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.navbar.login}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.navbar.register}</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">{translations.footer.legal}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.footer.terms}</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className={language === "am" ? "amharic" : ""}>{translations.footer.privacy}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
