import Heading from "@components/Heading";
import SearchBar from "@src/actors/buyer/components/Shop/SearchBar";
import CarList from "@src/actors/buyer/components/Shop/CarList";
import mockCarData from "@src/actors/buyer/mockCar";
import CardContainer from "@src/actors/buyer/components/Common/CardContainer";
import { useLocation } from "react-router-dom";
const Shopping = () => {
  const location = useLocation()
  // Extract all parameters
  const getAllParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };
  return (
    <div>
      <Heading className='mb-8' text={'Shop'}/>
      <div className='flex flex-row mb-12'>
        {/* Display Search Bar */}
        <CardContainer className='h-fit py-8 w-1/4'>
          <SearchBar />
        </CardContainer>
        {/* Display car list */}
        <CarList cars={mockCarData} className='ml-4 flex-grow'/>
      </div>
      <div>
        {/* Pagination here */}
      </div>
    </div>
  )
}

export default Shopping;
