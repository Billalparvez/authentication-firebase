import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPass } from "../firebase/firebase.js";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("click");
    e.preventDefault();
    try {
      const user = await registerWithEmailAndPass(email, password);
      console.log(user);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className=" mb-5 text-3xl text-center text-orange-400">
        Register Now
      </h1>
      <form className="my-3">
        <label htmlFor="Email">Your Email: </label>
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
        />{" "}
        <br />
        <button
          className="border p-1 border-teal-600 rounded-br-sm"
          onClick={handleSubmit}
        >
          REGESTER NOW
        </button>
      </form>
      <p>
        YOU have Account?
        <NavLink className="underline" to={"/login"}>
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
