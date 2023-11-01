'use client'

import { useTransition, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface addToCartProps {
  productId: string
  addToCart: (productId: string) => Promise<void>
}

export default function AddtoCartButton({
  productId,
  addToCart,
}: addToCartProps) {
  const [isPindng, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <div className="flex items-center gap-3">
      <button
        className="btn btn-accent text-white"
        disabled={isPindng}
        onClick={() => {
          setIsSuccess(false)
          startTransition(async () => {
            await addToCart(productId)
            setIsSuccess(true)
            toast.success('successfuly add product to cart', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            })
          })
        }}
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cart text-white"
          viewBox="0 0 16 16"
        >
          {' '}
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            fill="white"
          ></path>{' '}
        </svg>
        {isPindng && <span className="loading loading-dots loading-md" />}
      </button>
      {!isPindng && isSuccess && <ToastContainer />}
    </div>
  )
}
