function SignInOption({ toSignIn }) {
  return (
    <h2>
      Have an account?{" "}
      <span
        className="text-sky-500 cursor-pointer"
        onClick={() => {
          toSignIn();
        }}
      >
        {"Sign In"}
      </span>
    </h2>
  );
}

export default SignInOption;
