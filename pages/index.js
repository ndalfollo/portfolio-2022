import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Head from './Components/Head'
import Nav from './Components/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Nav />
        <div className={styles.projects}>
          <div class="project-grid">
            <div class="project-title">
              <h2><Link href="./Template">Le séchoir</Link></h2>
            </div>
            <div class="project-date">
              <p>Branding</p>
              <p class="statut">WIP</p>
            </div>
          </div>
          <hr />
          <div class="project-grid">
            <div class="project-title">
              <h2>mesto typeface</h2>
            </div>
            <div class="project-date">
              <p>Typographie</p>
              <p class="statut">WIP</p>
            </div>
          </div>
          <hr />
          <div class="project-grid">
            <div class="project-title">
              <h2>transports martigny région</h2>
            </div>
            <div class="project-date">
              <p>Graphisme</p>
              <p class="statut">04.2022</p>
            </div>
          </div>
          <hr />
          <div class="project-grid">
            <div class="project-title">
              <h2>portfolio</h2>
            </div>
            <div class="project-date">
              <p>Dev. web</p>
              <p class="statut">WIP</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}