import Users from "../../components/Users";
import GlobalHeader from "../../components/GlobalHeader";

function Protected() {
  return (
    <center>
      <GlobalHeader title="Protected" />
      <div>
        <h1>You are logged </h1>
        <Users />
      </div>
    </center>
  );
}
export default Protected;
