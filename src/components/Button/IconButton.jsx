const IconButton = ({ text, className, icon }) => {
  return (
    <button className={`flex items-center text-gray-600 border border-gray-300 px-3 py-2 rounded-full flex-row justify-between transition-colors ${className}`}>
      <span className={text ? 'mr-2' : ''}>
        {icon}
      </span>
      <span className={text ? 'ml-2' : 'hidden'}>{text}</span>
    </button>
  )
}

export default IconButton;
