import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import UserInfo from "./UserInfo";
import Theme from "../components/Theme";

const Navbar = () => {
    return (
        <nav className="relative z-50 w-full shadow-lg">
            <div className="mx-auto flex min-h-20 w-full max-w-300 flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:flex-nowrap lg:px-8">

                <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4C542] text-xl font-bold text-[#003366] sm:h-11 sm:w-11">
                        <Image
                            src={logo}
                            height={100}
                            width={100}
                            alt="logo"
                            className="h-full w-full rounded-xl object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold tracking-wide text-[#003366] sm:text-2xl">
                            <span className="font-extrabold text-[#F4C542]">H</span>ermione
                        </h1>

                        <p className="hidden text-xs text-gray-500 sm:block">
                            Social Development Events Platform
                        </p>
                    </div>
                </Link>

                <div className="flex items-center gap-3 sm:gap-6 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <Link
                        href="/events"
                        className="text-xs font-bold text-[#003366] transition hover:text-[#F4C542] sm:text-sm md:text-base"
                    >
                        Upcoming Events
                    </Link>
                </div>
                
                <div className="relative z-50 ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-3">
                    <Theme />
                    <UserInfo />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;