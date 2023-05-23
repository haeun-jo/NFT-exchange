import { useState } from "react";

const Profile = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isConnect, setIsConnect] = useState<boolean>(false);

  return (
    <div className="profile">
      <span className="profile__image" />
      <button
        type="button"
        className="profile__btn"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      />
      {showDropdown && (
        <div className="dropdown">
          <p>Connect</p>
          <button type="button" className="dropdown__connect-wallet">
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};
export default Profile;
