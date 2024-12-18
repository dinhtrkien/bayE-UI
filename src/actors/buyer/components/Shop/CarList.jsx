import CarCard from '@components/CarCard';

const CarList = ({ className, cars, showingTotalRecords }) => {
  if (!Array.isArray(cars) || cars.length === 0) {
    return <div>No cars available</div>;
  }

  return (
    <div className={`w-3/4 flex flex-col ${className}`}>
      { showingTotalRecords ? <span>Showing {cars.length} of 10 results</span> : null }
      {cars.map((car, i) => (
        <CarCard className={i === 0 ? '' : 'mt-8'} key={i} car={car} />
      ))}
    </div>
  );
};

export default CarList;
