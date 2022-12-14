import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
 
export function Comment({content, onDeleteComment }){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/rafaelpires2.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Pires</strong>
              <time title='26 de setembro de 2022' dateTime='2022-09-26 18:56:00'>Cerca de 2h</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
            <Trash size={24}/>
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
  )
}