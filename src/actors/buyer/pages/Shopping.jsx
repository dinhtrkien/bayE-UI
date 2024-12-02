import Heading from "@components/Heading";
import SearchBar from "@src/actors/buyer/components/Shop/SearchBar";
import CarList from "@src/actors/buyer/components/Shop/CarList";
import mockCarData from "@src/actors/buyer/mockCar";
const Shopping = () => {
  return (
    <div>
      <Heading className='mb-8' text={'Shop'}/>
      <div className='flex flex-row mb-12'>
        {/* Display Search Bar */}
        <SearchBar className='h-fit'/>
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
