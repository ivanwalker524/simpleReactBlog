import { auth, provider } from '../config/firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const navigate = useNavigate();
  const singInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result)
    navigate('/');
  }
  return (
		<>
			<div className="login">
				<div>
						<h1>
							<FcGoogle />
						</h1>
						<p style={{ display: "flex", alignItems: "center" }}>
							Sign In With Google To Continue
						</p>
					<button
						style={{ display: "flex", alignItems: "center" }}
						onClick={singInWithGoogle}
					>
						Signin
						<FcGoogle />
					</button>
				</div>
			</div>
		</>
  );
}
