import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";

const Login = () => {

        const navigate = useNavigate();

  return (
    
    <MobileWrapper>
      <div className="p-6">
        <h2 className="text-xl font-bold mt-10">
          Signin to your PopX account
        </h2>

        <p className="text-sm text-textGray mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-md px-4 py-3 text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-md px-4 py-3 text-sm"
          />

          <button onClick = {() => navigate("/Profile")} className="w-full bg-purple-700 text-primary py-3 rounded-lg font-medium
             shadow-md transition duration-200 ease-in-out hover:bg-purple-500 active:scale-[0.98]
            focus:outline-none cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default Login;
