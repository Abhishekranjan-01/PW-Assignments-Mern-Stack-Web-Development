import Password from "./Password";
import UserId from "./UserId";

function LoginContainer() {
  return (
    <div className="flex flex-col gap-1">
      <UserId />
      <Password />
    </div>
  );
}

export default LoginContainer;
