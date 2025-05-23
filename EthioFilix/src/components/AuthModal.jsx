"use client"

import { useState, useContext } from "react"
import { TranslationContext } from "../context/TranslationContext"

// Authentication modal for login/register
const AuthModal = ({ type = "login", onClose }) => {
  const { translations, language } = useContext(TranslationContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const isLogin = type === "login"
  const title = isLogin ? translations.auth.loginTitle : translations.auth.registerTitle
  const buttonText = isLogin ? translations.auth.loginButton : translations.auth.registerButton

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!email || !password || (!isLogin && !name)) {
      setError(translations.auth.errorFields)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError(translations.auth.errorEmail)
      return
    }

    // Password validation
    if (password.length < 6) {
      setError(translations.auth.errorPassword)
      return
    }

    // Clear error
    setError("")

    // In a real app, this would handle authentication
    console.log("Form submitted:", { email, password, name })

    // Close modal
    if (onClose) onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white" aria-label="Close">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">
          <span className={language === "am" ? "amharic" : ""}>{title}</span>
        </h2>

        {error && (
          <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-100 px-4 py-3 rounded mb-4">
            <span className={language === "am" ? "amharic" : ""}>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name field (register only) */}
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                <span className={language === "am" ? "amharic" : ""}>{translations.auth.name}</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
              />
            </div>
          )}

          {/* Email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              <span className={language === "am" ? "amharic" : ""}>{translations.auth.email}</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 mb-2">
              <span className={language === "am" ? "amharic" : ""}>{translations.auth.password}</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="w-full btn-primary py-3">
            <span className={language === "am" ? "amharic" : ""}>{buttonText}</span>
          </button>

          {/* Toggle login/register */}
          <div className="mt-4 text-center text-gray-400">
            <span className={language === "am" ? "amharic" : ""}>
              {isLogin ? translations.auth.noAccount : translations.auth.hasAccount}
            </span>{" "}
            <a href="#" className="text-red-500 hover:underline">
              <span className={language === "am" ? "amharic" : ""}>
                {isLogin ? translations.auth.registerLink : translations.auth.loginLink}
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthModal
