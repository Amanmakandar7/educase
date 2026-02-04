import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";

const Signup = () => {

    const navigate = useNavigate();
  return (
    <MobileWrapper>
      <div className="p-6">
        <h2 className="text-xl font-bold mt-6">
          Create your PopX account
        </h2>

        <div className="mt-6 space-y-4">
          {[
            "Full Name",
            "Phone number",
            "Email address",
            "Password",
            "Company name",
          ].map((label) => (
            <input
              key={label}
              placeholder={label}
              className="w-full border rounded-md px-4 py-3 text-sm"
            />
          ))}

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">
              Are you an Agency?
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="agency" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="agency" />
                No
              </label>
            </div>
          </div>

          <button onClick = {() => navigate("/Profile")} className="w-full bg-purple-700 text-primary py-3 rounded-lg font-medium
             shadow-md transition duration-200 ease-in-out hover:bg-purple-500 active:scale-[0.98]
            focus:outline-none ">
            Create Account
          </button>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default Signup;
