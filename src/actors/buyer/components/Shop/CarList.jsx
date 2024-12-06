import CarCard from '@components/CarCard';

const CarList = ({ className, cars }) => {
  if (!Array.isArray(cars) || cars.length === 0) {
    return <div>No cars available</div>;
  }

  return (
    <div className={`w-3/4 flex flex-col ${className}`}>
      <span>Showing {cars.length} of todopagination results</span>
      {cars.map((car, i) => (
        <CarCard key={i} car={car} />
      ))}
    </div>
  );
};

export default CarList;
