import { addDoc, getDocs, collection,query, where, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { Post as Ipost } from "./main"
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
interface Props{
  post: Ipost;
}

interface Like {
  likeId: string;
  userId: string;
}
export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const [likes,setLikes] = useState<Like[] | null>(null);

  const likesref = collection(db, "likes");
  
  const likesDoc = query(likesref, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id})))
  }

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

  useEffect(() => {
    getLikes();
  }, [])

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesref, { userId: user?.uid, postId: post.id });
      if (user) {
        setLikes((prev) =>
			prev
				? [...prev, { userId: user.uid, likeId: newDoc.id }]
				: [{ userId: user.uid, likeId: newDoc.id }]
		);
      };
    } catch (err) {
      console.log(err)
    }
	};

  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesref,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );
      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId =likeToDeleteData.docs[0].id
      const likeToDelete = doc(db, "likes", likeId );
      await deleteDoc(likeToDelete);
      if (user) {
      	setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId));
      }
		} catch (err) {
			console.log(err);
		}
  };
  return (
		<>
			<div className="post">
        <div>
          
					<div className="profile-cont">
						<div className="profile">
							<img src={user?.photoURL || ""} alt="" />
						</div>
						<span>@{post.username}</span>
					</div>
					<div className="title">
						<h1>{post.title}</h1>
					</div>
					<div className="body">
						<p>{post.description}</p>
					</div>
					<div className="footer">
						<p></p>
						{likes &&  <p>:ikes: <span style={{color: "tomato"}}>{likes?.length}</span></p>}
						<hr />
						<button onClick={hasUserLiked ? removeLike : addLike}>
							{hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
						</button>
					</div>
				</div>
			</div>
		</>
  );
}