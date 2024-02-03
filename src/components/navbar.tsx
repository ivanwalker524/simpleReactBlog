import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";
import { FaBarsStaggered } from "react-icons/fa6"
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav)
	}
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth)
  }
	return (
		<>
			<div className="navbar">
				<div className="links">
					<Link to="/">Home</Link>
					{!user ? (
						<Link to="/login">Login</Link>
					) : (
						<Link to="/createPost">Create Post</Link>
					)}
				</div>
				<div onClick={handleNav} className="icons">
					{!nav ? (
						<div className="bar"><AiOutlineClose size={20} /></div>
					) : (
						<div className="bar"><FaBarsStaggered /></div>
					)}
				</div>

				<div className={!nav ? "hidden" : "left"}>
					<div>
						<a href=""><Link to="/">Home</Link></a>
						{!user ? (
							<Link to="/login">Login</Link>
						) : (
							<a href=""><Link to="/createPost">Create Post</Link></a>
						)}
					</div>
				</div>

				<div className="user">
					{user && (
						<>
							<p style={{ textWrap: "nowrap" }}>
								{user?.displayName}
							</p>
							<img src={user?.photoURL || ""} alt="" />
							<button onClick={signUserOut}>Log out</button>
						</>
					)}
				</div>
			</div>
		</>
	); 
};
