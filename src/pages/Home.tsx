import { useDispatch, useSelector } from "react-redux";
function Home() {
  const username = useSelector((state: any) => state.user.value.username);
	return (
		<>
      <h1>THIS IS THE HOME PAGE: {username}</h1>
		</>
	);
}

export default Home;
