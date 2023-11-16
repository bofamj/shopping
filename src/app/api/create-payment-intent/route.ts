import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
const YOUR_DOMAIN = 'http://localhost:3000'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const corsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeader })
}

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()

    const extractItems = await reqBody.items[0].map((item: any) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'USD',
        unit_amount: item.product.price * 100,
        product_data: {
          name: item.product.name,
          description: item.product.discription,
          images: [item.product.imageUrl],
        },
      },
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: extractItems,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/checkout`,
    })

    return NextResponse.json({
      message: 'Connection is Active!',
      success: true,
      id: session.id,
    })
  } catch (error: any) {
    return NextResponse.json({ error: 'the is bad req' })
  }
}
