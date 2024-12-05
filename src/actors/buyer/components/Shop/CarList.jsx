import CarCard from "@components/CarCard";

const CarList = ({ className, cars }) => {
  return (
    <div className={`w-3/4 flex flex-col ${className}`}>
      <span>Showing 1-10 of 20 results</span>
      {cars.map((car, i) => <CarCard key={i} car={car}/>)}
    </div>
  );
};

export default CarList;
