import styles from "../../styles/index.module.css";
import Head from "next/head";
import cl from "../../styles/about.module.css";
import Link from "next/link";

export default function signin() {
  return (
    <>
      <Head>
        <title>Sign In</title>
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
        <div className={cl.heroForm}>
          <p className={cl.title}>Sign In</p>
          <input className={cl.element} type="text" placeholder="Name" />
          <input
            className={cl.element}
            type="password"
            placeholder="Password"
          />
          <button className={styles.formBtn}>Sign in</button>
        </div>
      </div>
    </>
  );
}
