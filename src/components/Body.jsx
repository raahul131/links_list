import {
  BsLinkedin,
  BsGithub,
  BsMedium,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

const Body = () => {
  return (
    <>
      <div>
        <section className="flex justify-evenly mt-10">
          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="https://www.linkedin.com/in/rahulray131/"
            target=""
          >
            <p className="pb-2 text-3xl text-blue-900" target="_blank">
              <BsLinkedin />
            </p>

            <p className="text-gray-900 pb-4 font-mono font-bold">
              LinkedIn Profile
            </p>
          </a>

          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="https://rahulray.vercel.app/"
            target=""
          >
            <p className="pb-2 text-4xl text-green-900" target="_blank">
              <IoIosContact />
            </p>

            <p className="text-gray-900 pb-5 font-mono font-bold">
              Personal Portfolio
            </p>
          </a>

          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="https://github.com/raahul131"
            target=""
          >
            <p className="pb-2 text-3xl text-black" target="_blank">
              <BsGithub />
            </p>

            <p className="text-gray-900 pb-4 font-mono font-bold">
              Github Profile
            </p>
          </a>
        </section>

        <section className="flex justify-evenly mt-10">
          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="https://medium.com/@rahulray131"
            target=""
          >
            <p className="pb-2 text-3xl text-black" target="_blank">
              <BsMedium />
            </p>

            <p className="text-gray-900 pb-4 font-mono font-bold">
              Medium Profile
            </p>
          </a>

          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="https://twitter.com/rahulray__"
            target=""
          >
            <p className="pb-2 text-3xl text-blue-600" target="_blank">
              <BsTwitter />
            </p>

            <p className="text-gray-900 pb-4 font-mono font-bold">Twitter</p>
          </a>
        </section>

        <section className="flex justify-evenly mt-10 mb-10">
          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="https://www.instagram.com/in/rahulray_0131/"
            target=""
          >
            <p className="pb-2 text-3xl text-pink-600" target="_blank">
              <BsInstagram />
            </p>

            <p className="text-gray-900 pb-4 font-mono font-bold">Instagram</p>
          </a>

          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="/"
            target="_blank"
          >
            <p className="pb-2 text-3xl text-blue-900" target="_blank">
              <BsFacebook />
            </p>

            <p className="text-gray-900 pb-5 font-mono font-bold">Facebook</p>
          </a>

          <a
            className="mt-10 w-44 h-44 rounded-3xl border-2 flex justify-center items-center bg-pink-200 transform hover:scale-105 duration-1000 cursor-pointer shadow-lg flex-col"
            href="https://youtube.com/"
            target=""
          >
            <p className="pb-2 text-3xl text-red-600" target="_blank">
              <BsYoutube />
            </p>

            <p className="text-gray-900 pb-4 font-mono font-bold">
              Youtube Channel
            </p>
          </a>
        </section>
      </div>
    </>
  );
};

export default Body;
