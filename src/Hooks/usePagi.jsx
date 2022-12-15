import { useMemo, useState } from "react";

function usePagi(datas) {
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const currentSearchData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return datas?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, datas]);

  return { currentSearchData, setCurrentPage, PageSize, currentPage };
}

export default usePagi;
