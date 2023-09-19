import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommmentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommmentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    console.log("likeCount: ", likeCount);
    setLikeCount((state) => {
      console.log("state: ", state, "date: ", Date.now());
      return state + 1;
    });
    console.log("Date depois do setState: ", Date.now());
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/diego3g.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Faran 42</strong>
              <time
                title="14 de setembro às 10:24h"
                dateTime="2023-09-14 10:24:00"
              >
                Cerca há 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
