import MobileWrapper from "../components/MobileWrapper";

const Profile = () => {
  return (
    <MobileWrapper>
      <div className="p-6">
        <h2 className="font-semi.bold">Account Settings</h2>

        <div className="flex items-center gap-4 mt-6">
          <img
            src="https://i.pravatar.cc/100"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <p className="font-medium">Marry Doe</p>
            <p className="text-sm text-textGray">
              marry@gmail.com
            </p>
          </div>
        </div>

        <p className="text-sm text-textGray mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </MobileWrapper>
  );
};

export default Profile;
