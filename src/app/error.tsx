'use client'

import Link from 'next/link'

export default function error() {
  return (
    <section className="flex h-screen items-center p-16  dark:bg-gray-700">
      <div className="container flex flex-col items-center ">
        <div className="flex max-w-md flex-col gap-6 text-center">
          <h2 className="text-9xl font-extrabold text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl dark:text-gray-400 md:text-3xl">
            Sorry, we couldnt find this page.
          </p>
          <Link
            href="/"
            className="rounded bg-purple-600 px-8 py-4 text-xl font-semibold text-gray-50 hover:text-gray-200"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
