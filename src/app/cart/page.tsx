import { findCart } from '@/lib/cart'
import CartItem from './CartItem'
import { changeCartProductQuantity } from './actions'
import Link from 'next/link'
import Button from './Button'
import Cart from '@prisma/client'

export const metadata = {
  title: 'Shopping Cart Shep-Shope',
}

export default async function cartPage() {
  const cart = await findCart()

  return (
    <div className="mb-10 text-center">
      <h1 className="mb-10 text-3xl font-bold">Your Shopping Cart</h1>
      {cart?.items.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            changeCartProductQuantity={changeCartProductQuantity}
          />
        )
      })}
      {!cart?.items.length && (
        <h1 className="text-lg ">
          You have no items in your cart nast go{' '}
          <Link
            href="/"
            className="text-info hover:text-accent hover:drop-shadow-lg"
          >
            shopping ...
          </Link>
        </h1>
      )}
      <div className="mt-10 flex flex-col items-end gap-2 md:items-center">
        <h1 className="font-bold">Cart Total : ${cart?.subtotal}</h1>
        <Button cart={cart} />
      </div>
    </div>
  )
}
