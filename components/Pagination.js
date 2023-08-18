import Link from 'next/link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5 px-0 md:px-52">
      <nav className="flex justify-center">
        {!prevPage && (
          <button
            rel="previous"
            className="mx-4 cursor-auto disabled:opacity-50 bg-red-200 py-2 px-4 rounded-md drop-shadow-md"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button rel="previous">ย้อน</button>
          </Link>
        )}

        <div>
          หน้าที่{' '}
          <span className="bg-red-200 py-2 px-4 rounded-md drop-shadow-md">{currentPage}</span>{' '}
          ทั้งหมด{' '}
          <span className="bg-red-200 py-2 px-4 rounded-md drop-shadow-md">{totalPages}</span>{' '}
          รายการ
        </div>

        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50 " disabled={!nextPage}>
            ถัด
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button rel="next" className="mx-4 bg-red-200 py-2 px-4 rounded-md drop-shadow-md">
              ถัด
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
