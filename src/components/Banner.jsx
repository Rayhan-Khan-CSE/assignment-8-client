
import Link from "next/link";
import logo from "@/assets/Banner-logo.png"
import Image from "next/image";
const Banner = () => {
    return (
        <section className="overflow-hidden bg-white">
            <div className="relative bg-[#003366]">
                <div className="mx-auto grid max-w-300 items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">
                    <div className="relative z-10">
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-[#F4C542] px-5 py-3 text-sm font-bold text-[#003366] sm:text-base">
                            <span className="text-xl">♧</span>
                            Together for a Better Tomorrow
                        </div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Hermione
                        </h1>
                        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Connect. Volunteer.
                            <span className="block text-[#F4C542]">
                                Create Impact.
                            </span>
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
                            Join community events, support local causes, and help
                            build a kinder, stronger society. Every small act of
                            kindness can make a big difference.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/upcoming-events"
                                className="btn h-12 border-none bg-[#F4C542] px-6 text-base font-bold text-[#003366] shadow-md hover:bg-yellow-400"
                            >
                                Upcoming Events
                                <span aria-hidden="true">→</span>
                            </Link>
                            <Link
                                href="/create-event"
                                className="btn h-12 border-2 border-white bg-transparent px-6 text-base font-semibold text-white hover:border-[#F4C542] hover:bg-white/10"
                            >
                                Create Event
                                <span aria-hidden="true">+</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-4 md:mt-0">
                        <div className="relative z-10 overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl">
                            <Image
                                src={logo} width={500} height={500}
                                alt="Volunteers helping people in their community"
                                className="h-75 w-full bg-white object-cover sm:h-95 lg:h-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#003366]/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-5 left-5">
                                <h3 className="text-2xl font-bold text-white">
                                    Together, We Can.
                                </h3>
                                <p className="mt-1 text-sm text-blue-100">
                                    One community. Countless possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 right-3 z-20 rounded-xl bg-white p-4 shadow-xl sm:-right-4 sm:p-5">
                            <p className="text-xs font-medium text-gray-500">
                                Our Mission
                            </p>
                            <p className="mt-1 font-bold text-[#003366]">
                                Care. Connect. Contribute.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-2 bg-[#F4C542]"></div>
            </div>
        </section>
    );
}
export default Banner;