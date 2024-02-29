import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sendPasswordReset } from "../firebase/firebase";

const Resert = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1
        className="text-3xl text-center
             text-stone-300"
      >
        Resert Your Password
      </h1>
      <div>
        <label
          className="bg-gray-500 text-white p-1 rounded-full"
          htmlFor="Email"
        >
          Resert Email{" "}
        </label>
        <input
          type="email"
          value={email}
          name="email"
          id=""
          placeholder="Resert Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button
          onClick={() => sendPasswordReset(email)}
          className="  border-b-2 border-teal-500"
        >
          Resert{" "}
        </button>
      </div>
      <p>YOU have Account? </p>
      <NavLink className="underline" to={"/signup"}>
        Register
      </NavLink>
    </div>
  );
};

export default Resert;
