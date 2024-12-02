/* Card container frame */
const CardContainer = ({ children, className }) => {
  return (
    <div className={`border-2 bg-gray-50 rounded-2xl p-8 ${className}`}>
      {children}
    </div>
  )
};

export default CardContainer;
