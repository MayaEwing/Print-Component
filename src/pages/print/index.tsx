import { AppContext } from "@/components/context";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import ReactToPrint from "react-to-print";
export default function Page() {
  const ref = useRef<HTMLDivElement>(null);
  const {
    data: { file, firstname, lastname, birthyear, deathyear, email, info },
  } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className=" text-black/70 my-5 text-5xl">Preview</div>
        <div
          ref={ref}
          style={{
            position: "relative",
            width: "18cm",
            height: "5.5cm",
            paddingBottom: "20%",
          }}
        >
          <Image
            src="/card.png"
            alt="fdfdf"
            fill
            priority
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <div className="absolute bottom-10 left-5 w-36 h-36">
            {file && (
              <Image
                src={URL.createObjectURL(file)}
                alt="fdfdf"
                fill
                priority
                style={{ objectFit: "contain", borderRadius: 300 }}
                quality={100}
              />
            )}
          </div>
          <div className="absolute top-[30px] right-10  text-2xl text-black font-bold text-right">
            {firstname} {lastname} <br />({birthyear}-{deathyear})
            <div className="text-xl text-black font-semibold mt-10 w-96 max-h-32 overflow-hidden">
              {info}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <ReactToPrint
            bodyClass="print-agreement"
            content={() => ref.current}
            trigger={() => (
              <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Print
              </button>
            )}
          />
          <Link href="/input">
            <button className="mx-auto lg:mx-0 bg-black/50 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
