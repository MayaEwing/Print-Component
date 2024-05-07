import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-h-screen">
      <Header />
      <div className="pt-20 flex-col items-center justify-end p-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full rtl">איזה עסק אתה?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight rtl">
              הודעה ראשית למכור את עצמך!
            </h1>
            <p className="leading-normal text-2xl mb-8 rtl">
              הודעת גיבור משנה, לא ארוכה מדי ולא קצרה מדי. תעשה את זה בדיוק כמו
              שצריך!
            </p>
            <div className="flex flex-row gap-4">
              <a href="https://www.memorun.org/">
                <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none  transform transition hover:scale-105 duration-300 ease-in-out rtl">
                  תרומה
                </button>
              </a>
              <Link href="/input">
                <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  טופס
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
