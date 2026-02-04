import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="flex flex-col justify-between h-screen p-6">
        
        <div className="mt-16 text-center">
          {/* replace with SVG later */}
          <div className="h-40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary"></div>
          </div>

          <h1 className="text-2xl font-bold mt-6">
            Welcome to PopX
          </h1>

          <p className="text-textGray mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-purple-700 text-primary py-3 rounded-lg font-medium
             shadow-md transition duration-200 ease-in-out hover:bg-purple-500 active:scale-[0.98]
            focus:outline-none cursor-pointer"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-400 text-primary py-3 rounded-lg font-medium
             shadow-md transition duration-200 ease-in-out hover:bg-purple-200 active:scale-[0.98]
            focus:outline-none cursor-pointer"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default Landing;
