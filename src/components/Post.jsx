import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/rafaelpires2.png"
          />
          <div className={styles.authorInfo}>
            <strong>Rafael Pires</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='26 de setembro de 2022' dateTime='2022-09-26 18:56:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><span>👉 </span><a href="#">jane.design/doctorcare</a></p>
        <p> <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a> </p>
      </div>

      <form className={styles.commentForm}>
          <strong>Deixe seu Feedback</strong>

          <textarea 
            placeholder='Deixe um comentário'
          />
          <footer>
          <button type='submit'>Publicar</button>
          </footer>
      </form>
    </article>
  )
}