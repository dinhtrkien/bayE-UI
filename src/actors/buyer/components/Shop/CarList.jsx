import CarCard from '@components/CarCard';

const CarList = ({ className, cars, showingTotalRecords }) => {
  if (!Array.isArray(cars) || cars.length === 0) {
    return <div className='h-screen'>No cars available</div>;
  }

  return (
    <div className={`w-3/4 flex flex-col ${className}`}>
      {cars.map((car, i) => (
        <CarCard className={i === 0 ? '' : 'mt-8'} key={i} car={car} />
      ))}
    </div>
  );
};

export default CarList;
