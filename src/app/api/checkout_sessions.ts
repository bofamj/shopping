/* /* import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: '2023-10-16',
})

export async function POST(req: NextRequest) {
  const { body } = await req.json()
  //const { cart } = data
  const cart = req.body

  console.log('🚀 ~ file: route.ts:13 ~ POST ~ req.body:', cart)
  /* const transformedItems = cart?.map((cart:any) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: cart.name,
        images: [cart.image],
      },
      unit_amount: cart.tatalCost * 100,
    },
    quantity: 1,
  })); 

  try {
    return NextResponse.json(req.body)
    // Create Checkout Sessions from body params.
    /*  const session = await stripe.checkout.sessions.create({
      line_items: transformedItems,
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/`,
    });

    NextResponse.json({ sessionURL: session.url, session: session }); 
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error, {
      status: 400,
    })
  }
}
 */

/* import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

const YOUR_DOMAIN = 'http://localhost:3000' */

/* const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  typescript: true,
  apiVersion: '2023-10-16',
}) 

import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log({ message: '.jsHello from Next!' })
  res.status(200).json({ message: '.jsHello from Next!' })
}
 */
