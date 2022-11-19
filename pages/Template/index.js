import styles from '../../styles/Home.module.scss'
import Head from '../Components/Head'
import Nav from '../Components/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Nav />
        <div class="hero">
          
        </div>
      </main>
    </div>
  )
}