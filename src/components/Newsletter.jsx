"use client";

export default function Newsletter() {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="relative overflow-hidden rounded-3xl bg-[#003366] px-6 py-12 shadow-xl sm:px-10 sm:py-16 lg:px-16">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-30 border-white/5"></div>
                    <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/5"></div>
                    <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4C542]/40 bg-[#F4C542]/10 px-4 py-2 text-sm font-semibold text-[#F4C542]">
                                <span className="h-2 w-2 rounded-full bg-[#F4C542]"></span>
                                Be Part of the Change
                            </span>
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                Stay Connected.
                                <span className="mt-2 block text-[#F4C542]">
                                    Make an Impact.
                                </span>
                            </h2>
                            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                                Discover upcoming volunteer opportunities, community events,
                                and inspiring stories from people making a difference across
                                Bangladesh.
                            </p>
                            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/90">
                                <span className="flex items-center gap-2">
                                    <span className="text-[#F4C542]">✓</span>
                                    Upcoming Events
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-[#F4C542]">✓</span>
                                    Volunteer Opportunities
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-[#F4C542]">✓</span>
                                    Community Stories
                                </span>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-[#003366]">
                                    Join Our Newsletter
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    Get the latest community updates delivered to your inbox.
                                </p>
                            </div>
                            <form
                                onSubmit={(event) => event.preventDefault()}
                                className="space-y-4" >
                                <div>
                                    <label
                                        htmlFor="newsletter-name"
                                        className="mb-2 block text-sm font-semibold text-gray-700">
                                        Your Name
                                    </label>
                                    <input
                                        id="newsletter-name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10"/>
                                </div>
                                <div>
                                    <label
                                        htmlFor="newsletter-email"
                                        className="mb-2 block text-sm font-semibold text-gray-700" >
                                        Email Address
                                    </label>
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10"/>
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4C542] px-6 py-3.5 font-bold text-[#003366] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8b92d] hover:shadow-md">
                                    Subscribe to Updates
                                    <span aria-hidden="true">→</span>
                                </button>
                            </form>
                            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                                Stay inspired. Stay involved. Help build a stronger community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}