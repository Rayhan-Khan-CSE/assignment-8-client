import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto max-w-300 px-5 pt-12 pb-6 sm:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h2 className="text-2xl font-bold tracking-wide">
                            <span className="text-[#F4C542]">H</span><span className='text-[#003366]'>ermione</span>
                        </h2>
                        <p className="mt-4 max-w-xs text-sm leading-6 text-black">
                            Connecting kind hearts with meaningful causes.
                            Together, we can build a stronger and more caring community.
                        </p>
                        <p className="mt-4 text-sm font-bold text-[#F4C542]">
                            Small Acts. Lasting Impact.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-[#F4C542]">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm text-black font-medium">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-[#F4C542]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events"
                                    className="transition hover:text-[#F4C542]"
                                >
                                    Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/createEvent"
                                    className="transition hover:text-[#F4C542]"
                                >
                                    Create an Event
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="transition hover:text-[#F4C542]"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-[#F4C542]">
                            Our Community
                        </h3>
                        <ul className="space-y-3 text-sm text-black">
                            <li>Volunteer Together</li>
                            <li>Support Local Causes</li>
                            <li>Spread Kindness</li>
                            <li>Make a Difference</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-[#F4C542]">
                            Get Involved
                        </h3>

                        <p className="text-sm leading-6 text-black">
                            Be part of something meaningful. Join local social service
                            events and help create positive change in your community.
                        </p>
                    </div>
                </div>
                <div className="my-8 border-t border-blue/20"></div>
                <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-black md:flex-row md:text-left">
                    <p>
                        © {new Date().getFullYear()} Hermione. All rights reserved.
                    </p>
                    <p>
                        Together, We Create a Better Tomorrow.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;