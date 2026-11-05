"use client";
import { authClient } from '../lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { MdArrowDropDown } from 'react-icons/md';
import { toast } from 'react-toastify';
const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [open, setOpen] = useState(false);
    const handleSignOut = async () => {
        try {
            await authClient.signOut();
            setOpen(false);
            toast.success("Signed out successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Logout failed!");
        }
    };
    return (
        <div className="flex items-center gap-2 sm:gap-3">
            {user ? (
                <>
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            type="button"
                            className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm transition-all duration-200 hover:border-[#F4C542] hover:shadow-md"
                        >
                            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-[#F4C542] bg-gray-100">
                                {user.image ? (
                                    <Image
                                        width={36}
                                        height={36}
                                        src={user.image}
                                        alt="Profile picture"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <CgProfile className="h-7 w-7 text-[#003366]" />
                                )}
                            </span>

                            <span className="hidden text-sm font-semibold text-[#003366] sm:block">
                                {user.name}
                            </span>

                            <MdArrowDropDown
                                className={`text-xl text-[#003366] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                            />
                        </button>
                        {open && (
                            <div className="fixed right-3 top-35 z-100 w-[calc(100vw-1.5rem)] max-w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl sm:absolute sm:right-0 sm:top-full sm:mt-3 sm:w-64">
                                <div className="border-b border-gray-100 bg-[#003366] px-4 py-4 sm:px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#F4C542] bg-white">
                                            {user.image ? (
                                                <Image
                                                    width={44}
                                                    height={44}
                                                    src={user.image}
                                                    alt="Profile picture"
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <CgProfile className="h-8 w-8 text-[#003366]" />
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="truncate font-semibold text-white">
                                                {user.name}
                                            </h3>
                                            <p className="break-all text-xs text-gray-200">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1 p-2">
                                    <Link
                                        href="/profile"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#F4C542]/20 hover:text-[#003366]"
                                    >
                                        <CgProfile className="text-lg" />
                                        My Profile
                                    </Link>
                                    <Link
                                        href="/createEvent"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#F4C542]/20 hover:text-[#003366]"
                                    >
                                        <span className="text-lg">＋</span>
                                        Create Event
                                    </Link>
                                    <Link
                                        href="/manage-events"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#F4C542]/20 hover:text-[#003366]"
                                    >
                                        <span className="text-lg">⚙</span>
                                        Manage Events
                                    </Link>
                                    <Link
                                        href="/my-events"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#F4C542]/20 hover:text-[#003366]"
                                    >
                                        <span className="text-lg">✓</span>
                                        Joined Events
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleSignOut}
                        type="button"
                        className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-600 hover:text-white sm:px-4 sm:text-sm"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <div className="flex items-center gap-2">
                    <Link
                        href="/signin"
                        className="rounded-lg border border-[#003366] px-3 py-2.5 text-sm font-semibold text-[#003366] transition-colors duration-200 hover:bg-[#003366] hover:text-white sm:px-4"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="rounded-lg border border-[#F4C542] bg-[#F4C542] px-3 py-2.5 text-sm font-semibold text-[#003366] shadow-sm transition-colors duration-200 hover:border-[#e0b52e] hover:bg-[#e0b52e] sm:px-4"
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </div>
    );
};
export default UserInfo;