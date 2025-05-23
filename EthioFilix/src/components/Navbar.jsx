"use client"

import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"

// Navbar component with logo, navigation links, and language toggle
const Navbar = () => {
  const { translations, language, toggleLanguage } = useContext(TranslationContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)

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
    <nav className="bg-black bg-opacity-90 fixed w-full z-50 px-4 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-red-600 font-bold text-2xl">EthioStream</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-red-500 transition-colors">
            {translations.navbar.home}
          </Link>

          {/* Categories dropdown */}
          <div className="relative">
            <button
              className="text-white hover:text-red-500 transition-colors flex items-center"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            >
              {translations.navbar.categories}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCategoryDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    onClick={() => setIsCategoryDropdownOpen(false)}
                  >
                    <span className={language === "am" ? "amharic" : ""}>{category.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/search" className="text-white hover:text-red-500 transition-colors">
            {translations.navbar.search}
          </Link>

          <Link to="/login" className="text-white hover:text-red-500 transition-colors">
            {translations.navbar.login}
          </Link>

          <Link to="/register" className="btn-primary">
            {translations.navbar.register}
          </Link>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center text-white hover:text-red-500 transition-colors"
          >
            <span className={language === "am" ? "amharic" : ""}>{language === "en" ? "አማርኛ" : "English"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 p-4 shadow-lg z-50">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.navbar.home}
              </Link>

              {/* Categories */}
              <div>
                <button
                  className="text-white hover:text-red-500 transition-colors flex items-center"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                >
                  {translations.navbar.categories}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isCategoryDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                </button>

                {isCategoryDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="block text-white hover:text-red-500"
                        onClick={() => {
                          setIsCategoryDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        <span className={language === "am" ? "amharic" : ""}>{category.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/search"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.navbar.search}
              </Link>

              <Link
                to="/login"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.navbar.login}
              </Link>

              <Link to="/register" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                {translations.navbar.register}
              </Link>

              {/* Language toggle */}
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsMenuOpen(false)
                }}
                className="text-white hover:text-red-500 transition-colors"
              >
                <span className={language === "am" ? "amharic" : ""}>{language === "en" ? "አማርኛ" : "English"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
