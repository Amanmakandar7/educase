const MobileWrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default MobileWrapper;
