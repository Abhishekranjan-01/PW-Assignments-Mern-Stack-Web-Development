import { useState } from "react";
import LoginContainer from "./LoginContainer";
import SignUpContainer from "./SignUpContainer";
import SignInOption from "./SignInOption";
import SignUpOption from "./SignUpOption";

function FormContainer({ children }) {
  let [signState, setSignStat] = useState("Sign In");

  const toSignUp = () => {
    setSignStat("Sign Up");
  };
  const toSignIn = () => {
    setSignStat("Sign In");
  };

  return (
    <form className="flex flex-col gap-5 p-4 w-96 mx-auto border border-gray-600 rounded-md ">
      {children}

      {signState === "Sign In" ? (
        <LoginContainer />
      ) : (
        <>
          <SignUpContainer />
          <LoginContainer />
        </>
      )}

      <button
        type="button"
        className="bg-sky-500 hover:bg-sky-600 duration-200 ease-in-out text-white py-1 rounded-md font-semibold"
      >
        {signState}
      </button>

      {signState === "Sign In" ? (
        <SignUpOption toSignUp={toSignUp} />
      ) : (
        <SignInOption toSignIn={toSignIn} />
      )}
    </form>
  );
}

export default FormContainer;
