import Image from 'next/image'
import Link from 'next/link';
import Illustration from '../public/illustration-article.svg';
import Avatar from '../public/image-avatar.webp'
import styles from './styles/page.module.scss'

export default function Home() {
  return (
    <section className={styles.mainSection}>
      <header>
        <Image
          src={Illustration}
          alt=''
        />
      </header>
      <main>
        <p>Learning</p>
        <small>Published 21 Dec 2023</small>
        <h1>HTML & CSS foundations</h1>
        <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div>
          <Image
            src={Avatar}
            alt=''
          />
          <span>Greg Hooper</span>
        </div>
      </main>
      <footer>
        <p>Challenged By</p>
        <Link href={'https://www.frontendmentor.io/home'} target='_blank'>Frontend Mentor</Link>
        <p>Coded by</p>
        <Link href={'https://gabriel-crispim-portfolio-sirbiel100.vercel.app/'} target='_blank'>Gabriel Crispim.</Link>
      </footer>
    </section>
  )
}
