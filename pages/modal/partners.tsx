import styles from "../../styles/index.module.css";
import Head from "next/head";
import cl from "../../styles/about.module.css";
import Link from "next/link";

export default function partners() {
  return (
    <>
      <Head>
        <title>Partners</title>
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
          <h1 className={cl.headerP}>Our Partners</h1>
          <p className={cl.partners}>
            Coinbase <br />
            <br /> Gemini <br />
            <br /> SoFi Active Investing Crypto
            <br />
            <br /> Webull Crypto <br />
            <br /> Robinhood Crypto <br />
            <br /> TradeStation Crypto
          </p>
        </div>
      </div>
    </>
  );
}
