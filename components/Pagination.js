import Link from 'next/link'

export default function Pagination({ catx, totalPages, currentPage }) {
  // console.log(catx)
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)
  console.log(totalPages)
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5 px-0 md:px-52">
      <nav className="flex justify-center  items-end">
        {!prevPage && (
          <button
            rel="previous"
            className="mx-4 cursor-auto disabled:opacity-50 bg-white py-2 px-4 rounded-md drop-shadow-md"
            disabled={!prevPage}
          >
            ย้อนกลับ
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/${catx}/` : `/${catx}/page/${currentPage - 1}`}>
            <button rel="previous">ย้อนกลับ</button>
          </Link>
        )}

        <div className="flex justify-center  items-end gap-4">
          <span className="bg-[#008080] py-2 px-4 rounded-md drop-shadow-md  text-white">
            {currentPage}
          </span>{' '}
          <span className="bg-white py-2 px-4 rounded-md drop-shadow-md">{totalPages}</span>{' '}
        </div>

        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50 " disabled={!nextPage}>
            ถัดไป
          </button>
        )}
        {nextPage && (
          <Link href={`/${catx}/page/${currentPage + 1}`}>
            <button rel="next" className="mx-4 bg-white py-2 px-4 rounded-md drop-shadow-md">
              ถัดไป
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
