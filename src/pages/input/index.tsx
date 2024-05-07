import Header from "@/components/header";
import Link from "next/link";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useContext, useRef, useState } from "react";
import { AppContext } from "@/components/context";
export default function Page() {
  const imageInputRef = useRef<any>();
  const ImageInputClick = () => {
    imageInputRef.current?.click();
  };
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [birthyear, setBirthyear] = useState<string>();
  const [deathyear, setDeathyear] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [info, setInfo] = useState<string>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { setData } = useContext(AppContext);

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
    setData({ file });
    if (selectedFile) console.log(selectedFile);
  };
  const submit = () => {
    setData({
      firstname,
      lastname,
      birthyear,
      deathyear,
      email,
      info,
    });
  };
  return (
    <>
      <Header />
      <div className="lg:max-w-[800px] mx-auto flex flex-col justify-center items-center mt-10 text-white text-xl font-semibold gap-4">
        <div className="text-center text-black/50 text-3xl mb-2">
          הוסף פרטים אישיים
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-end">
            <div className="text-center">שם פרטי *</div>
            <Input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-end">
            <div className="text-center">שם משפחה *</div>
            <Input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-end">
            <div className="text-center">שנת לידה *</div>
            <Input
              value={birthyear}
              onChange={(e) => setBirthyear(e.target.value)}
            />{" "}
          </div>
          <div className="flex flex-col items-end">
            <div className="text-center">שנת מוות *</div>
            <Input
              value={deathyear}
              onChange={(e) => setDeathyear(e.target.value)}
            />{" "}
          </div>
        </div>
        {selectedFile && (
          <img src={URL.createObjectURL(selectedFile)} alt="Thumb" />
        )}
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-end">
            <div className="text-center">כתובת אימייל *</div>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </div>
          <div className="flex flex-col items-end">
            <div className="text-center">תמונה </div>
            <Input
              type="text"
              // value={originalImages.join(" | ")}
              placeholder={selectedFile?.name}
              readOnly
              onClick={ImageInputClick}
            />
            <input
              type="file"
              onChange={handleFileInput}
              accept="image/png, image/jpeg"
              // multiple
              hidden
              ref={imageInputRef}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <div>מידע</div>
          <Textarea value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <Link href="/print">
          <button
            onClick={submit}
            className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-xl my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            לִיצוֹר
          </button>
        </Link>
      </div>
    </>
  );
}
