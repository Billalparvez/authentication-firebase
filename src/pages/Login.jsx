import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPass, signWithGoogle } from "../firebase/firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginUser = await loginWithEmailAndPass(email, password);
      console.log(loginUser);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSocial = async () => {
    const user = await signWithGoogle;
    // navigate("/home");
    console.log(user);
  };
  return (
    <div>
      <h1 className=" mb-5 text-3xl text-center text-orange-400">LogIn Now</h1>
      <form className="my-3">
        <label>Your Email: </label>
        <input
          type="email"
          value={email}
          name="email"
          id=""
          placeholder="Enter Your Email Here"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="password">Your Password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Enter Your password Here"
          id=""
        />
        <br />
        <button
          className="border p-1 border-teal-600 rounded-br-sm"
          onClick={handleLogin}
        >
          Login NOW
        </button>
        <button
          className="border p-1 border-teal-600 bg-lime-700 rounded-br-sm"
          onClick={handleSocial}
        >
          Google
        </button>
      </form>
      <p>YOU have Account? </p>
      <NavLink className="underline" to={"/signup"}>
        Register
      </NavLink>
      <p>RESERT Your Email Password? </p>
      <NavLink className="underline" to={"/resert"}>
        Resert
      </NavLink>
    </div>
  );
};

export default Login;
