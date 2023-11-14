import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0;
  return !isAuthenticated && <button className="text-md ">Login</button>;
};

export default Logout;