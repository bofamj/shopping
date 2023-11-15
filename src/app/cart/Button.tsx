'use client'

import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

export default function Button(cart: any) {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  )
  const createCheckoutSession = async () => {
    console.log('🚀 ~ file: Button.tsx:7 ~ Button ~ cart:', cart.cart.items)

    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        items: cart.cart.items,
      }),
    })

    console.log(res)
  }

  return (
    <button
      className="btn btn-error hover:drop-shadow-lg sm:w-[200px]"
      onClick={createCheckoutSession}
    >
      CHECKOUT
    </button>
  )
}
