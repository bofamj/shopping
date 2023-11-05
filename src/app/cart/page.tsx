import { findCart } from '@/lib/cart'
import CartItem from './CartItem'
import { changeCartProductQuantity } from './actions'

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
    </div>
  )
}
