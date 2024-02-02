import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const [newUserName, setNewUserName] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <>
      <h1>THIS IS THE LOGIN PAGE</h1>
      <h2>{username}</h2>
      <input type="text" onChange={(e) => {setNewUserName(e.target.value)}} />
      <button onClick={()  => dispatch(login({username: newUserName}))}>Submit Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  )
}

export default Login;
