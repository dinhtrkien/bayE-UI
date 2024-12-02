const Modal = ({ open, children }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center  ${
        open ? '' : 'hidden'
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
