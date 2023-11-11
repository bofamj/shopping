import Link from 'next/link'
import clsx from 'clsx'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export default function PaginationBar({
  currentPage,
  totalPages,
}: PaginationProps) {
  const maxPages = Math.min(totalPages, Math.max(currentPage + 4, 10))
  const minPages = Math.max(1, Math.min(currentPage - 5, maxPages - 9))

  const paginationPagesNumber: JSX.Element[] = []
  for (let page = minPages; page <= maxPages; page++) {
    paginationPagesNumber.push(
      <Link
        href={'?page=' + page}
        key={page}
        className={clsx('btn join-item btn-md text-white', {
          ['btn-active pointer-events-none']: currentPage === page,
        })}
      >
        {page}
      </Link>,
    )
  }

  return (
    <>
      <div className="join hidden pb-5  sm:block">{paginationPagesNumber}</div>
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link
            href={'?page=' + (currentPage - 1)}
            className="btn join-item text-white "
          >
            «
          </Link>
        )}
        <button className="btn join-item pointer-events-none text-white ">
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link
            href={'?page=' + (currentPage + 1)}
            className="btn join-item text-white "
          >
            »
          </Link>
        )}
      </div>
    </>
  )
}
