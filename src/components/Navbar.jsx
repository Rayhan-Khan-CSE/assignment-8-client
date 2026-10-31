import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="w-full bg-[#003366] shadow-lg">
            <div className="mx-auto flex min-h-20 max-w-300 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4C542] text-xl font-bold text-[#003366]">
                        <Image src={logo} height={100} width={100}alt="logo"></Image>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-wide text-white">
                            Hermione
                        </h1>
                        <p className="hidden text-xs text-blue-200 sm:block">
                            Connecting People, Creating Impact
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-6">
                    <Link
                        href="/upcoming-events"
                        className="text-sm font-medium text-white transition hover:text-[#F4C542] sm:text-base"
                    >
                        Upcoming Events
                    </Link>
                    <Link
                        href="/login"
                        className="btn btn-sm border-none bg-[#F4C542] px-5 font-semibold text-[#003366] shadow-sm hover:bg-yellow-400 sm:btn-md"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </nav>
    );
}
export default Navbar;