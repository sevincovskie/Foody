'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import x from "../../assets/images/png/x.png"
import fb from "../../assets/images/png/fb.png";
import i from "../../assets/images/png/i.png";
import style from "../../components/Footer/footer.module.css"

function Footer() {
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
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_desc}>
          <h4>
            Foody<span>.</span>
          </h4>
          <p>Lorem ipsum is placeholder text commonly used in the graphic,</p>
          <div >
            <Image
              className={style.icons}
              width={60}
              height={60}
              src={fb}
              alt="facebook"
            />
            <Image
              className={style.icons}
              width={60}
              height={60}
              src={i}
              alt="instagram"
            />
            <Image
              className={style.icons}
              width={60}
              height={60}
              src={x}
              alt="twitter"
            />
          </div>
        </div>
        <div
          style={{ display: isMobile ? "none" : "flex" }}
          className={style.footer_rows}
        >
          <div>
            <h5>Popular</h5>
            <p>Fast Food</p>
            <p>Menu for children</p>
            <p>Salads</p>
            <p>Business</p>
          </div>
          <div>
            <h5>Cash</h5>
            <p>Delivery</p>
            <p>Payment</p>
            <p>About the store</p>
          </div>
          <div>
            <h5>Help</h5>
            <p>Contacts</p>
            <p>Purchase returns</p>
            <p>Buyer help</p>
          </div>
        </div>
      </div>
      <div className={style.footer_end}>
        All rights reserved © 2005-2024 Foody TERMS OF USE | Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;
