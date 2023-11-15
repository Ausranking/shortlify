import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button onClick={() => logout()} className="text-md ">
        sign out
      </button>
    )
  );
};

export default LogoutButton;
