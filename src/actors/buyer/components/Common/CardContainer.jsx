/* Card container frame */
const CardContainer = ({ children, className, href }) => {
  return (
    <div className={`border-2 bg-gray-50 rounded-2xl ${className}`}>
        {children}
    </div>
  )
};

export default CardContainer;
