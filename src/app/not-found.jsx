import Link from "next/link";
import { FaHouse, FaMagnifyingGlass } from "react-icons/fa6";
const NotFound = () => {
    return (
        <div className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-4 py-12">
            <div className="w-full max-w-xl text-center">
                <div className="relative mb-8">
                    <h1 className="text-8xl font-extrabold tracking-widest text-[#003366]/10 sm:text-9xl">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#003366] text-[#F4C542] shadow-xl shadow-[#003366]/20">
                            <FaMagnifyingGlass className="text-3xl" />
                        </div>
                    </div>
                </div>
                <p className="mb-4 inline-block rounded-full border border-[#F4C542]/50 bg-[#F4C542]/15 px-5 py-2 text-sm font-bold text-[#003366]">
                    404 - PAGE NOT FOUND
                </p>
                <h2 className="mb-4 text-2xl font-extrabold leading-tight text-[#003366] sm:text-3xl">
                    Oops! We could not find this page
                </h2>
                <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                    The page you are looking for may have been removed,
                    had its name changed, or is temporarily unavailable.
                    Do not worry! Lets help you get back on track.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#003366] px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#00264D] hover:shadow-lg"
                    >
                        <FaHouse className="text-lg text-[#F4C542]" />
                        Back to Home
                    </Link>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-6">
                    <p className="text-sm font-bold text-[#003366]">
                        Hermione
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                        Connecting People, Creating Positive Change.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default NotFound;