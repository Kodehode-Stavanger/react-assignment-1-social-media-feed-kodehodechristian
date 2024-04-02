import licon from "../../assets/licon.jpg";
import style from "./Post.module.css";

function Post({ post: { username, content, likes, timestamp } }) {
  return (
    <div className={style.post}>
      <h3>{username}</h3>
      <p>{content}</p>
      <span>
        <img className={style.img} src={licon} alt="Like" />
        {likes}
      </span>
      <p>{timestamp}</p>
    </div>
  );
}

export default Post;
