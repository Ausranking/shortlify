import { useState } from "react";
import Logo from "../components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className=" flex max-lg:gap-20 md:gap-10 max-sm:gap-1 flex-col py-10 md:py-5 max-lg:items-center px-4 md:w-11/12 m-auto">
      <div>
        <Logo />
      </div>

      <form onSubmit={handleSubmit} className="w-full py-10 m-auto md:max-w-lg">
        <div className="text-center p-2">
          <h1 className="font-bold text-xl p-5">Welcome back</h1>
          <p className="text-lg p-3">Please enter your details to login</p>
        </div>
        <label className="">
          Email address <br />
          <input
            className="w-full "
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <br />
          Password <br />
          <input
            className="full"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <p className="pt-10 pb-3 text-right text-sm text-darker-violet">
          Forgot passsword?
        </p>
        <input
          type="submit"
          value="Continue"
          className=" w-full bg-gradient-to-tr from-rose to-dark-violet text-gray p-2"
        />

        <p className="text-sm py-3 text-center">
          Don't have an account?
          <span className="text-rose py-10 cursor-pointer">
            Create account
          </span>{" "}
        </p>
        <p className="text-center text-sm mt-5 sm:mt-20">
          Terms and privacy policy
        </p>
      </form>
    </section>
  );
};

export default Login;
