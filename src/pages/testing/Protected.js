import Users from "../../components/Users";

function Protected() {
  return (
    <centre>
      <div>
        <h1>You need to be logged in to see this</h1>
        <Users />
      </div>
    </centre>
  );
}
export default Protected;
