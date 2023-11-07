import Image from 'next/image'
import Link from 'next/link'
import logo from '@/app/assest/logo.jpg'
import ShopingCartButton from './ShopingCartButton'
import { findCart } from '@/lib/cart'
import UserInfoButton from './UserInfoButton'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function NavBar() {
  const session = await getServerSession(authOptions)
  const cart = await findCart()

  return (
    <div>
      <div className="navbar fixed top-0 z-50 m-auto max-w-7xl flex-col gap-2 bg-base-100 px-20 shadow-lg sm:flex-row">
        <div className="flex-1 ">
          <Link href="/" className="flex gap-1 text-xl ">
            <Image
              src={logo}
              alt="shepshop logo"
              width={40}
              height={40}
              className="h-[40px] w-[40px] rounded-full"
            />
            ShepShop
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action="">
            <div className="form-control">
              <input
                type="text"
                name="Search"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px] md:w-auto"
              />
            </div>
          </form>
          <ShopingCartButton cart={cart} />

          <UserInfoButton session={session} />
        </div>
      </div>
    </div>
  )
}
