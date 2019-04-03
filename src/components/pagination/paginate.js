/**
 * Paginate base function
 *
 * @param totalItems
 * @param currentPage
 * @param itemsPerPage
 * @param maxPages
 */
export function paginate (
  totalItems,
  currentPage = 1,
  itemsPerPage = 10,
  maxPages = 10
) {
  let totalPages = Math.ceil(totalItems / itemsPerPage)

  if (currentPage < 1) {
    currentPage = 1
  } else if (currentPage > totalPages) {
    currentPage = totalPages
  }

  let startPage
  let endPage
  if (totalPages <= maxPages) {
    startPage = 1
    endPage = totalPages
  } else {
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1

    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1
      endPage = maxPages
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage
      endPage = currentPage + maxPagesAfterCurrentPage
    }
  }

  let startIndex = (currentPage - 1) * itemsPerPage
  let endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1)
  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i)

  return {
    totalItems: totalItems,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  }
}
