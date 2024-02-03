import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post{
	id: string,
	userId: string,
	title: string,
	username: string,
	description: string,
}
export const Main = () => {
	const [postList, setPostList] = useState<Post[] | null>(null);
	const postRef = collection(db, "post");

	const gePosts = async () => {
		const data = await getDocs(postRef)
		setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);
	}

	useEffect(() => {
		gePosts();
	},[])
	return (
		<>
			<div className="home-container">
				<h1 style={{ textAlign: "center" }}>POSTS</h1>
				{postList ? (
					<>
						<div>
							{postList?.map((post) => (
								<Post  post={post} />
							))}
						</div>
						<div>
							<div>
								<span>copyright: Ivan Walker</span>
							</div>
						</div>
					</>
				) : (
						<>
							<div>
								<h2>Please login to create your post</h2>
						</div>
					<div>
						<div>
							<span>copy right: Ivan Walker</span>
						</div>
							</div>
					</>
				)}
			</div>
		</>
	);
};
