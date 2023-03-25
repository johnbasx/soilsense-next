import React from 'react'

const Copyrights = () => {
  return (
    <div className="pt-8 mt-8 border-t border-gray-100">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <p className="text-xs text-left text-gray-200">
          &copy; Copyright {new Date().getFullYear()} SoilSense. All rights
          reserved.
        </p>

        <nav aria-label="Footer Navigation - Support">
          <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="text-gray-200 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-200 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-200 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Copyrights
