import defaultCarImage from "@src/mock/car.png"
const GarageExploreSection = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='divider'/>
      <div className='flex flex-row justify-between items-start w-full my-4'>
        <div className='flex flex-col items-start justify-start w-1/2'>
          <h1 className='mb-1 text-4xl font-bold'>Your garage</h1>
          <h3 className='text-xl text-neutral-500'>Start selling your car</h3>
          <p className='my-4'>Add your car to your garage to start selling now!</p>
          <button className='btn btn-outline'>Create a seller account</button>
          <div className='mt-2'>Already have an account? <a className='font-semibold text-blue-600 underline hover:text-secondary' href='#'>Sign In</a></div>
        </div>
        <div className='w-1/2 h-64' style={{
          backgroundImage: `url(${defaultCarImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        </div>
      </div>
      <div className='divider'/>
    </div>

  )
}

export default GarageExploreSection;
