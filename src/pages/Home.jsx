import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleOut = () => {
    signOut(auth);
    navigate("/login").then().catch();
  };
  return (
    <div>
      <h1 className="underline text-5xl text-orange-400 my-3">Home Pages</h1>
      <h1>Well Come {user.email}...!</h1>
      <button
        onClick={handleOut}
        className="border bg-indigo-400
      text-white p-2 rounded-full"
      >
        LogOUt
      </button>
    </div>
  );
};

export default Home;
