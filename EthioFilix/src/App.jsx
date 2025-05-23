"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import SearchPage from "./pages/SearchPage"
import VideoPlaybackPage from "./pages/VideoPlaybackPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AboutPage from "./pages/AboutPage"
import { TranslationContext } from "./context/TranslationContext"
import translations from "./data/translations"

function App() {
  const [language, setLanguage] = useState("en")
  const [currentTranslations, setCurrentTranslations] = useState(translations.en)

  useEffect(() => {
    setCurrentTranslations(translations[language])
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "am" : "en"))
  }

  return (
    <TranslationContext.Provider value={{ translations: currentTranslations, language, toggleLanguage }}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/watch/:mediaId" element={<VideoPlaybackPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TranslationContext.Provider>
  )
}

export default App
