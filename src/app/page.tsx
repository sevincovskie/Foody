import Button from "@/components/Button";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-mainWhite  sm:m-8 flex-col rounded-md">
      <div className="flex flex-col sm:flex-row justify-center items-center h-auto sm:h-[520px]   sm:px-11 -mt-24 space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="sm:w-1/2 flex flex-col justify-center items-start space-y-6">
          <h1 className="sm:text-6xl text-center text-xl font-black leading-tight sm:text-start text-black">
            Our Food site makes it easy to find local food
          </h1>
          <p className="sm:block hidden sm:text-xl w-3/4 text-gray">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="mx-auto sm:mx-0 flex flex-col sm:flex-row gap-3 sm:gap-10">
            <div className="flex justify-center sm:justify-start gap-4 header-btn">
              <button className="bg-mainRed text-white w-[220px] h-[70px] rounded-[30px]">
                Register
              </button>
              <button className="border text-black w-[220px] h-[70px] rounded-[30px]">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center items-center">
          <Video />
        </div>
      </div>
    </section>
  );
}
