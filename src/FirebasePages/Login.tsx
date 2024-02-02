import { auth, provider } from '../config/firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const singInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result)
    navigate('/');
  }
  return (
    <>
      <div className='login'>
        <p>Sign In With Google To Continue</p>
        <button onClick={singInWithGoogle}>Sing In With Google</button>
      </div>
    </> 
  );
}
