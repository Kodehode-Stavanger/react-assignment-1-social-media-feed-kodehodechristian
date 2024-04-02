import posts from "../../assets/posts";
import Post from "../Post/Post";
import style from "./Feed.module.css";

function Feed() {
  return (
    <div className={style.feed}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Feed;
