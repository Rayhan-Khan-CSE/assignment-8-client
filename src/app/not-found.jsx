import Link from "next/link";
import { FaHouse, FaMagnifyingGlass } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-[#FAFCFA] px-4 py-12">
      <div className="w-full max-w-xl text-center">
        <div className="relative mb-6">
          <h1 className="text-8xl font-extrabold tracking-widest text-red-700/15 sm:text-9xl">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg shadow-green-900/20">
              <FaMagnifyingGlass className="text-3xl" />
            </div>
          </div>
        </div>
        <p className="mb-3 inline-block rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-red-700">
          404 - Page Not Found
        </p>
        <h2 className="mb-4 text-2xl font-bold text-[#1D271F] sm:text-3xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, ঠিকানা পরিবর্তন হয়েছে
          অথবা পেজটি বর্তমানে পাওয়া যাচ্ছে না।
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-800"
          >
            <FaHouse />
            হোম পেজে ফিরে যান
          </Link>
        </div>
        <p className="mt-10 text-sm text-gray-400">
          বাজার দর — প্রতিদিনের বাজারের দাম এক নজরে
        </p>
      </div>
    </div>
  );
};

export default NotFound;

