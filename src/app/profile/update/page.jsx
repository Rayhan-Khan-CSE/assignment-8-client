
"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Update = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-12 sm:px-6">

            <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white text-center shadow-xl">

                <div className="h-2 bg-[#F4C542]"></div>

                <div className="px-6 py-12 sm:px-10 sm:py-14">

                    <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#F4C542]/30 bg-emerald-50">
                        <FaCheck className="text-3xl text-[#003366]" />
                    </div>

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        Update Successful
                    </div>

                    <h1 className="text-2xl font-extrabold tracking-tight text-[#003366] sm:text-3xl">
                        Profile Updated Successfully!
                    </h1>

                    <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
                        Your profile information has been updated successfully.
                        You can now continue exploring community events and
                        connecting with people through Hermione.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#003366] px-6 py-3.5 text-base font-bold text-white shadow-md transition duration-200 hover:bg-[#00264d] focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:ring-offset-2"
                    >
                        Back to Home
                        <span className="text-xl text-[#F4C542]" aria-hidden="true">
                            →
                        </span>
                    </Link>

                    <Link
                        href="/profile"
                        className="mt-4 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-[#003366] transition hover:bg-slate-50 hover:text-[#B88700]"
                    >
                        View My Profile
                    </Link>

                    <div className="mt-8 border-t border-slate-100 pt-6">
                        <p className="text-sm font-bold tracking-wide text-[#003366]">
                            Hermione
                        </p>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                            Bringing communities together, one event at a time.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Update;