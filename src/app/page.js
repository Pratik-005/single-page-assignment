import Image from "next/image";
import styles from "./page.module.css";
import imgUrl from "../../public/vector.png"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main id={styles.background}  >

      <p className={`${styles.para} ${inter.className}`} >Hola !</p>

      <div className={`${styles.fourth} ${styles.flexer}`}   >
        <div className={`${styles.third} ${styles.flexer}`}  >
          <div className={`${styles.second} ${styles.flexer}`}  >
            <div className={`${styles.first} ${styles.flexer}`}  >
              <Image src={imgUrl} />
            </div>
          </div>
        </div>

      </div>

      <section className={styles.bottom} >
        <h2 id={styles.header} >Lorem Ipsum ...</h2>
        <p id={styles.subheader}  >Lorem ipsum dolor sit amet.</p>
        <button className={styles.btn} >Send Notifications</button>
      </section>


    </main>
  );
}
