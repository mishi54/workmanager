import React from 'react'
import Link from 'next/link';
const Footer = () => {
  return (

        <footer className="bg-blue-600">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  Work Manager
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                    Pages
                  </h2>
                  <ul className="text-blue-100 font-medium">
                    <li className="mb-4">
                      <Link href="/add-task" className="hover:underline">
                        Add Task
                      </Link>
                    </li>
                    <li>
                      <Link href="/show-tasks" className="hover:underline">
                        Show Tasks
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                    Follow us
                  </h2>
                  <ul className="text-blue-100 font-medium">
                    <li className="mb-4">
                      <Link href="https://github.com" className="hover:underline">
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link href="https://discord.com" className="hover:underline">
                        Discord
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                    Legal
                  </h2>
                  <ul className="text-blue-100 font-medium">
                    <li className="mb-4">
                      <Link href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="hover:underline">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-blue-100 sm:text-center">
                © 2025{' '}
                <Link href="/" className="hover:underline">
                  Work Manager
                </Link>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <Link
                  href="https://facebook.com"
                  className="text-blue-100 hover:text-gray-900 "
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                  </svg>
                  <span className="sr-only text-blue-100">Facebook page</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-blue-100 hover:text-gray-900 ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" />
                  </svg>
                  <span className="sr-only text-blue-100">Twitter page</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
  
    

  )
}

export default Footer