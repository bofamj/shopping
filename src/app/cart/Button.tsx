'use client'

import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

export default function Button(cart: any) {
  const cartItems: any[] = []

  const cartItem = cart?.cart.items.map((item: any) => {
    return item
  })
  cartItems.push(cartItem)

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  )
  const createCheckoutSession = async () => {
    const stripe = await stripePromise
    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        items: cartItems,
        itemsData: cart.cart,
      }),
    })
    const data = await res.json()

    stripe?.redirectToCheckout({ sessionId: data.id })
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
