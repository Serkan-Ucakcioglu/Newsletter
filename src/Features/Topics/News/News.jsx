import Loader from "../../../Components/Loader";
import FinanceList from "../Finance/FinanceList";
import { useGetMarketsQuery } from "../topicsSlice";
import Pagination from "../../../Components/Pagination/Pagination";
import usePagi from "../../../Hooks/usePagi";

function News() {
  const { data, isFetching } = useGetMarketsQuery();
  const datas = data?.map((obj) => obj?.stories).flat(); //get stories array
  const { currentSearchData, currentPage, setCurrentPage } = usePagi(
    datas && datas
  );

  if (isFetching)
    return (
      <div className="flex justify-center items-center mt-6">
        <Loader />
      </div>
    );
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
        {currentSearchData &&
          currentSearchData?.map((topic) => {
            return <FinanceList topic={topic} key={topic?.internalID} />;
          })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={datas?.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default News;