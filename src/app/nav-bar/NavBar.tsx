import Image from 'next/image'
import Link from 'next/link'
import logo from '@/app/assest/logo.jpg'
import ShopingCartButton from './ShopingCartButton'
import { findCart } from '@/lib/cart'

export default async function NavBar() {
  const cart = await findCart()

  return (
    <div>
      <div className="navbar m-auto max-w-7xl flex-col gap-2 bg-base-100 px-20 shadow-lg sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="flex gap-1 text-xl">
            <Image
              src={logo}
              alt="shepshop logo"
              width={40}
              height={40}
              className="rounded-full"
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              <div className="w-10 rounded-full">
                <Image width={20} height={20} src="" alt="avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
