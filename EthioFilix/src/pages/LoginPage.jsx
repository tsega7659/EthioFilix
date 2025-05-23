"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { TranslationContext } from "../context/TranslationContext"

// Login page
const LoginPage = () => {
  const { translations, language } = useContext(TranslationContext)

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="text-red-600 font-bold text-3xl">
            EthioStream
          </Link>
          <h1 className="text-2xl font-bold mt-6">
            <span className={language === "am" ? "amharic" : ""}>{translations.auth.loginTitle}</span>
          </h1>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                <span className={language === "am" ? "amharic" : ""}>{translations.auth.email}</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 mb-2">
                <span className={language === "am" ? "amharic" : ""}>{translations.auth.password}</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
              />
            </div>

            <button type="button" className="w-full btn-primary py-3" onClick={() => console.log("Login clicked")}>
              <span className={language === "am" ? "amharic" : ""}>{translations.auth.loginButton}</span>
            </button>
          </form>

          <div className="mt-4 text-center text-gray-400">
            <span className={language === "am" ? "amharic" : ""}>{translations.auth.noAccount}</span>{" "}
            <Link to="/register" className="text-red-500 hover:underline">
              <span className={language === "am" ? "amharic" : ""}>{translations.auth.registerLink}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
