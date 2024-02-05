import NumberEmail from "./NumberEmail";
import FullName from "./Fullname";

function SignUpContainer() {
  return (
    <div className="flex flex-col gap-1">
      <NumberEmail />
      <FullName />
    </div>
  );
}
export default SignUpContainer;
