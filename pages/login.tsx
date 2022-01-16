import Router from "next/router";
import { useEffect, useState } from "react";
// @ts-ignore
import styles from "../styles/Login.module.css";
import Head from "next/head";

export default function Login() {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "vova@gmail.com" && password === "1234") {
      localStorage.setItem("email", "vova@gmail.com");
      localStorage.setItem("password", "1234");
      Router.push("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("email")) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.bg_div}>
        <form action="submit" className={styles.uiForm} onSubmit={handleSubmit}>
          <h3>Войти на сайт</h3>
          <div className={styles.formRow}>
            <input
              type="text"
              id="email"
              required
              autoComplete="off"
              value={email}
              onChange={({ target }) => setemail(target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.formRow}>
            <input
              type="password"
              id="password"
              required
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <label htmlFor="password">Пароль</label>
          </div>
          <div>
            <button type="submit">Войти</button>
          </div>
        </form>
      </div>
    </>
  );
}
