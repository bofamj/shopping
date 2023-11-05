import { findCart } from '@/lib/cart'
import CartItem from './CartItem'

export default async function cartPage() {
  const cart = await findCart()
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Your Shopping Cart</h1>
      {cart?.items.map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />
      })}
    </div>
  )
}
