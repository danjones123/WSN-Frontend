import Users from "../../components/Users";

function Protected() {
  return (
    <center>
      <div>
        <h1>You are logged </h1>
        <Users />
      </div>
    </center>
  );
}
export default Protected;
