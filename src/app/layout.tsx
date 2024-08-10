import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../app/styles/globals.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const roboto = Roboto({ 
  subsets: ["latin"] ,
  weight: ['900','400','500']


});

export const metadata: Metadata = {
  title: "Foody",
  icons :"food.ico",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  mx-3`}>
      <Header/>

        {children}
        <Footer/>
      </body>
      
    </html>
  );
}

{/* <div
data-aos="fade-right"
className="sm:w-3/5 relative    mt-0 pt-0  flex justify-center "
>
<div className={`${styles.bg_black}`}>
  <div className={`${styles.french}`}>
    <Image
      width={60}
      height={0}
      src="/frenchFries.svg"
      alt="frenchFries"
    />
    <p className="w-1/2 text-center">French Fries Yummy...</p>
  </div>
</div>

<div className={`${styles.pizza}`}>
  <Image width={60} height={0} src="/pizzaHut.svg" alt="pizza" />
  <p className="w-1/2 text-center">Pizza Hut Yummy ...</p>
</div>
<div className={`${styles.cheesBurger}`}>
  <Image
    width={60}
    height={0}
    src="/cheesBurger.svg"
    alt="cheesBurger"
  />
  <p className="w-1/2 text-center">Cheesburger Yummy ...</p>
</div>
<Image
  width={0}
  height={0}
  src="/bigBurgerMain.svg"
  alt="bigBurger"
  className="relative sm:w-full w-[80%]  "
/>
</div> */}

// .french,
// .pizza,
// .cheesBurger {
//   display: flex;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 10px;
//   width: max-content;
//   padding: 20px;
//   position: absolute;
//   z-index: 2;
//   animation: bounce 2s infinite alternate;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// }

// .bg_black {
//   position: absolute;
//   background: #000;
//   border-radius: 80px;
//   width: 600px;
//   height: 510px;
//   top: 50px;
//   right: 100px;
// }

// .footer_to_bg {
//   position: relative;
//   background: rgb(39 39 39);
//   border-radius: 24px;
//   color: #fff;
//   display: flex;
//   bottom: -4.375rem;
//   right: -320px;
//   top: 160px;
//   align-items: center;
//   justify-content: space-around;
//   padding-left: 2.5rem;
//   padding-right: 2.5rem;
//   padding-top: 3rem;
//   padding-bottom: 3rem;
// }

// .french {
//   bottom: 10%;
// }

// .pizza {
//   top: 6%;
//   right: 12%;
// }

// .cheesBurger {
//   bottom: 1%;
//   right: 12%;
// }

// @keyframes bounce {
//   0% {
//     transform: translateY(0px);
//   }
//   100% {
//     transform: translateY(10px);
//   }
// }

// @media screen and (max-width: 768px) {
//   .french,
//   .pizza,
//   .cheesBurger {
//     padding: 15px;
//   }

//   .french {
//     bottom: 28%;
//   }

//   .pizza {
//     top: 22%;
//     right: 10%;
//   }

//   .cheesBurger {
//     bottom: 3%;
//     right: 10%;
//   }
// }

// @media screen and (max-width: 1140px) {
//   .french,
//   .pizza,
//   .cheesBurger {
//     display: none;
//   }

//   .bg_black {
//     width: 200px;
//     height: 380px;
//     top: 30px;
//     right: 70px;
//   }
// }

// @media screen and (max-width: 1044px) {
//   .bg_black {
//     display: none;
//   }

//   .french,
//   .pizza,
//   .cheesBurger {
//     padding: 6px;
//   }
// }

// @media screen and (max-width: 1260px) {
//   .footer_to_bg {
//     bottom: -4.375rem;
//     right: -260px;
//     top: 160px;
//     align-items: center;
//     justify-content: space-around;
//     padding-left: 2.5rem;
//     padding-right: 2.5rem;
//     padding-top: 3rem;
//     padding-bottom: 3rem;
//   }
// }
// @media screen and (max-width: 1420px) {
//   .bg_black {
//     width: 400px;
//     height: 410px;
//     top: 40px;
//     right: 80px;
//   }
// }

// @media screen and (max-width: 960px) {
//   .footer_to_bg {
//     right: -160px;
//     width: 70%;
//   }
// }

// @media screen and (max-width: 960px) {
//   .bg_black {
//     width: 300px;
//     height: 310px;
//     top: 30px;
//     right: 60px;
//   }
// }

// @media screen and (max-width: 576px) {
//   .footer_to_bg {
//     right: -30px;
//     width: 80%;
//   }
// }

// @media screen and (max-width: 576px) {
//   .bg_black {
//     width: 200px;
//     height: 210px;
//     top: 20px;
//     right: 40px;
//   }
// }