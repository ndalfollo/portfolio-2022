import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Head from './Components/Head'
import Nav from './Components/Nav'
import Cursor from './Components/Cursor'
import { useEffect } from 'react'

export default function Home() {
  if (typeof window !== 'undefined') {
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    class Cursor {
      constructor() {
        // config
        this.target = { x: 0.5, y: 0.5 }; // mouse position
        this.cursor = { x: 0.5, y: 0.5 }; // cursor position
        this.speed = 0.2;
        this.init();
      }
      bindAll() {
        ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
      }
      onMouseMove(e) {
        //get normalized mouse coordinates [0, 1]
        this.target.x = e.clientX / window.innerWidth;
        this.target.y = e.clientY / window.innerHeight;
        // trigger loop if no loop is active
        if (!this.raf) this.raf = requestAnimationFrame(this.render);
      }
      render() {
        //calculate lerped values
        this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
        this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
        document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
        document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
        //cancel loop if mouse stops moving
        const delta = Math.sqrt(
          Math.pow(this.target.x - this.cursor.x, 2) +
          Math.pow(this.target.y - this.cursor.y, 2)
        );
        if (delta < 0.001) {
          cancelAnimationFrame(this.raf);
          this.raf = null;
          return;
        }
        //or continue looping if mouse is moving
        this.raf = requestAnimationFrame(this.render);
      }
      init() {
          this.bindAll();
          window.addEventListener("mousemove", this.onMouseMove);
          this.raf = requestAnimationFrame(this.render);
      }
    }
}

new Cursor();

  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <div className={"cursor"}></div>
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