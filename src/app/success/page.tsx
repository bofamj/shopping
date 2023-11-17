import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">
          Your Payment Accepted by shepshope.com
        </h2>
        <p>Now you can view your Orders or continue Shopping with us</p>
        <div className="flex items-center gap-x-5">
          <Link href={'/order'}>
            <button className="h-12 w-44 rounded-full bg-black text-base font-semibold text-slate-100 duration-300 hover:bg-orange-600">
              View Orders
            </button>
          </Link>
          <Link href={'/'}>
            <button className="h-12 w-44 rounded-full bg-black text-base font-semibold text-slate-100 duration-300 hover:bg-orange-600">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default SuccessPage
