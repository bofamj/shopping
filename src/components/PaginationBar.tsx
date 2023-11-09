import Link from 'next/link'

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
      <Link href={'?page=' + page} key={page} className="btn join-item btn-md">
        {page}
      </Link>,
    )
  }

  return <div>PaginationBar</div>
}
