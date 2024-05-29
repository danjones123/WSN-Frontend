import Users from "../../components/Users";
import GlobalHeader from "../../components/GlobalHeader";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router";

function Protected() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <center>
      <GlobalHeader title="Protected" />
      <div>
        <h1>You are logged </h1>
        <Users />
        <button onClick={logout}>Sign Out</button>
      </div>
    </center>
  );
}
export default Protected;
