"use client";
import Image from "next/image";
import styles from "../app/styles/Home.module.css";
import pizza from "../assets/images/pizza.png";
import fries from "../assets/images/fries.png";
import burger from "../assets/images/burger.png";
import Burger from "../assets/svg/burger.svg";
import Card from "../components/Card";
import { featuresData, menuData } from "../config/site";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container_intro}>
        <h1>Our Food site makes it easy to find local food</h1>
        <p style={{ display: isMobile ? "none" : "block" }}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <div className={styles.button_group}>
          <button className={styles.register}>Register</button>
          <button className={styles.order}>Order now</button>
        </div>

        {/* <div className={styles.wrapper}>
          <div className={styles.black_ground}>
            <video
              className={styles.video}
              src="/main.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className={styles.video_row}>
            <div className={styles.fries_text}>
              <Image height={80} src={fries} alt="fries" />
              <div>
                <h3>French Fries</h3>
                <p> Yummy...</p>
              </div>
            </div>
            <div className={styles.pizza_text}>
              <Image height={80} src={pizza} alt="fries" />
              <div>
                <h3>Pizza Hut</h3>
                <p> Yummy...</p>
              </div>
            </div>
            <div className={styles.burger_text}>
              <Image height={80} src={burger} alt="fries" />
              <div>
                <h3>Cheesburger</h3>
                <p> Yummy...</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
     

      <section>
        <div className={styles.footer_up}>
          <video
            className={styles.footer_video}
            src="/pizza.mp4"
            autoPlay
            loop
            muted
            playsInline
            width={250}
            height={250}
            style={{ display: isMobile ? "none" : "block" }}
          />
          <div className={styles.up_desc}>
            <h3 className={styles.up_title}>Restaurants Near From you</h3>
            <button className={styles.up_btn}>Explore Now</button>
          </div>
          <Image
            src={Burger}
            alt="Burger"
            width={200}
            height={200}
            style={{ display: isMobile ? "block" : "none" }}
          />
        </div>
      </section>
    </div>
  );
}
