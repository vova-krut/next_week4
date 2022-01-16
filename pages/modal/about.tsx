import styles from "../../styles/index.module.css";
import Head from "next/head";
import cl from "../../styles/about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={styles.navContainer}>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link href="/">
                <a>Crypto</a>
              </Link>
            </div>
            <ul className={styles.navItems}>
              <button>
                <Link href="/modal/about">
                  <a>
                    <li>About us</li>
                  </a>
                </Link>
              </button>
              <button>
                <Link href="/modal/partners">
                  <a>
                    <li>Our partners</li>
                  </a>
                </Link>
              </button>
              <button>
                <Link href="/modal/signin">
                  <a>
                    <li>Sign in</li>
                  </a>
                </Link>
              </button>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.App}>
        <div className={cl.About}>
          <h1 className={cl.header}>About us</h1>
          <p className={cl.text}>
            Recognizing the importance of Bitcoin from the onset, and
            understanding that the exchange is the most critical part of the
            cryptocurrency ecosystem, Jesse Powell founded “Crypto” to give
            people the means to quickly and securely invest in the space. Since
            then, the company has grown by leaps and bounds with hundreds of
            employees spanning the globe. We’re a diverse group of thinkers and
            doers that are dedicated to making cryptocurrency available and
            accessible to the world and enabling people from all walks of life
            to invest in their independence.
          </p>
        </div>
      </div>
    </>
  );
}
