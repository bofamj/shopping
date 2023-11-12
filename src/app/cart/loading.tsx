import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  const carts = [1, 2, 3, 4, 5]
  return (
    <>
      {carts.map((cart) => (
        <SkeletonTheme baseColor="#F5F5F5" highlightColor="#ffffff" key={cart}>
          <div className="hero rounded-xl  ">
            <section className="flex w-full flex-col gap-3 border-4">
              <article className=" flex w-full gap-3">
                <div className="item-img">
                  <Skeleton width={140} height={140} />
                </div>
                <div className="w-full">
                  {' '}
                  <h3 className="item-title">
                    <Skeleton count={4} />
                  </h3>
                  <div className="item-info">
                    <Skeleton width={160} height={20} />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </SkeletonTheme>
      ))}
    </>
  )
}
