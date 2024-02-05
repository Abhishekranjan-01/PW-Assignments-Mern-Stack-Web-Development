function SignUpOption({ toSignUp }) {
  return (
    <h2>
      Dont't Have an account?{" "}
      <span
        className="text-sky-500 cursor-pointer"
        onClick={() => {
          toSignUp();
        }}
      >
        {"Sign Up"}
      </span>
    </h2>
  );
}

export default SignUpOption;
