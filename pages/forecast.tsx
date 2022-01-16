import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Forecast.module.css";
import Router from "next/router";
import Head from "next/head";

export default function Forecast() {
  const API_KEY: string = "23fdaeaa7d58c450b5c457a027102068";
  const [first, setFirst] = useState<boolean>(true);
  const [city, setCity] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [current, setCurrent] = useState<string>("");
  const [deg, setDeg] = useState<string>("");
  const [humidity, setHumidity] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);
  const gettingWeather = async (e: React.FormEvent) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    setFirst(false);
    setImg(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setTemp(Math.round(response.data.main.temp));
    setCurrent(city);
    setDeg(response.data.wind.deg);
    setHumidity(response.data.main.humidity);
    setSpeed(Math.round(response.data.wind.speed));
  };

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      Router.push("/");
    }
  }, []);

  return first ? (
    <>
      <Head>
        <title>Forecast</title>
      </Head>
      <div className={styles.forecast}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Введите город"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
          <button className={styles.btn_forecast} onClick={gettingWeather}>
            Получить погоду
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <Head>
        <title>Forecast</title>
      </Head>
      <div className={styles.forecast}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Введите город"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
          <button className={styles.btn_forecast} onClick={gettingWeather}>
            Получить погоду
          </button>
        </div>
        <div className={styles.widget}>
          <div className={styles.widget__leftCol}>
            <div className={styles.widget__temperature}>{temp}</div>
            <div className={styles.widget__city}>{current}</div>
          </div>
          <div className={styles.widget__rightCol}>
            <div className={styles.widget__weatherIcon}>
              <img src={img} />
            </div>
            <div className={styles.widget__attrs}>
              <div className={styles.widget__attr}>
                <div className={styles.widget__attrIcon}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/219/219816.png"
                    height={16}
                    width={16}
                  />
                </div>
                <div className={styles.widget__attrValue}>{humidity}</div>
                <div className={styles.widget__attrPercent}>%</div>
              </div>
              <div className={styles.widget__attr}>
                <div className={styles.widget__attrIcon}>
                  <img
                    style={{ transform: `rotate(${deg}deg)` }}
                    src="http://cdn.onlinewebfonts.com/svg/img_118804.png"
                    height={16}
                    width={16}
                  />
                </div>
                <div className={styles.widget__attrValue}>{speed}</div>
                <div className={styles.widget__attrUnit}>kmph</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
