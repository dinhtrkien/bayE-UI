/* Card container frame */
const CardContainer = ({ children, className, href }) => {
  return (
    <div className={`border-2 bg-gray-50 rounded-2xl p-8 ${className}`}>
      <a href={href} className='w-full h-full'>
        {children}
      </a>

    </div>
  )
};

export default CardContainer;
