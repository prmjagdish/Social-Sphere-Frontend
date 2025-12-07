const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-3">
      <div className="flex gap-10 items-center max-md:flex-col h-[600px]">

        <div className="hidden md:flex">
          <img
            src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
            alt="Phone"
            className="h-[500px] w-auto object-contain" // << Fixed size, no auto resizing
          />
        </div>

        <div className="flex flex-col items-center w-full max-w-[385px]">
          {children}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;
