import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  const product = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <SkeletonTheme baseColor="#F5F5F5" highlightColor="#ffffff">
        <div className="hero rounded-xl  ">
          <section className="flex w-full flex-col border-4">
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

        <div className="my-24 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {product.map((product) => (
            <section key={product} className="border-4">
              <article className="item">
                <div className="item-img">
                  <Skeleton width={140} height={140} />
                </div>
                <h3 className="item-title">
                  <Skeleton count={4} />
                </h3>
                <div className="item-info">
                  <Skeleton width={160} height={20} />
                  <Skeleton width={30} height={20} />
                  <Skeleton width={22} height={22} circle={true} />
                </div>
              </article>
            </section>
          ))}
        </div>
      </SkeletonTheme>
    </>
  )
}
