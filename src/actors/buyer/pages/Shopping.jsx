import Heading from '@components/Heading';
import SearchBar from '@src/actors/buyer/components/Shop/SearchBar';
import CarList from '@src/actors/buyer/components/Shop/CarList';
import CardContainer from '@src/actors/buyer/components/Common/CardContainer';
import { useSearchParams} from '@src/actors/buyer/hooks';
import { useGetCars } from '@apis/cars';

import React, { useEffect } from 'react';
import Pagination, {usePagination} from "@components/Pagination";
import Woodpecker from "@components/Woodpecker";

const Shopping = () => {
  const {searchParams, setSearchParams} = useSearchParams();
  const { currentPage, totalPages, setTotalPages, setCurrentPage, next, previous } = usePagination();
  const [carsState, fetchCars] = useGetCars();
  useEffect( () => {
    fetchCars({ ...searchParams, Page: searchParams?.Page - 1 });
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ ...searchParams, Page: currentPage })
  }, [currentPage])

  useEffect(() => {
    setTotalPages(carsState.totalPages ? carsState.totalPages : 0);
  }, [carsState])
  return (
    <div className='pt-12 px-16 mb-16'>
      <Heading className="mb-8" text="Shop" />
      <Woodpecker message={'Chờ xíu, đang tải....'} visible={carsState.loading} className={'fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-75 z-50 text-neutral-100'}/>
      <div className="flex flex-row mb-12">
        {/* Display search bar */}
        <CardContainer className="h-fit p-8 w-1/5">
          <SearchBar />
        </CardContainer>
        {/* Display car list */}
        <div className='flex w-4/5 justify-center items-center flex-col px-8'>
          <CarList cars={carsState?.cars} showingTotalRecords={true} className="flex-grow w-full mb-12" />
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={(page) => setCurrentPage(page)} onPrevious={previous} onNext={next}/>
        </div>
      </div>
    </div>
  );
};



export default Shopping;
