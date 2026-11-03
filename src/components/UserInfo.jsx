
"use client"

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
        await authClient.signOut();
        toast.success("Signed out successfully!");
        setOpen(false);
    };

    return (
        <div className="flex items-center gap-3">
            {
                user ?
                    <div className="relative">

                        {/* Profile Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm transition-all duration-200 hover:border-[#F4C542] hover:shadow-md"
                        >
                            {/* Profile Picture */}
                            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-[#F4C542] bg-gray-100">
                                {
                                    user.image ?
                                        <Image
                                            width={36}
                                            height={36}
                                            src={user.image}
                                            alt="Profile picture"
                                            className="h-full w-full object-cover"
                                        />
                                        :
                                        <CgProfile className="h-7 w-7 text-[#003366]" />
                                }
                            </span>

                            {/* Display Name */}
                            <span className="hidden text-sm font-semibold text-[#003366] sm:block">
                                {user.name}
                            </span>

                            <MdArrowDropDown
                                className={`text-xl text-[#003366] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                            />
                        </button>

                        {/* Hover Tooltip */}
                        <div className="pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap rounded-lg bg-[#003366] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                            {user.name}
                        </div>

                        {/* Profile Dropdown */}
                        {open && (
                            <div className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">

                                {/* User Information */}
                                <div className="border-b border-gray-100 bg-[#003366] px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-[#F4C542] bg-white">
                                            {
                                                user.image ?
                                                    <Image
                                                        width={44}
                                                        height={44}
                                                        src={user.image}
                                                        alt="Profile picture"
                                                        className="h-full w-full object-cover"
                                                    />
                                                    :
                                                    <CgProfile className="h-8 w-8 text-[#003366]" />
                                            }
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="truncate font-semibold text-white">
                                                {user.name}
                                            </h3>
                                            <p className="truncate text-xs text-gray-200">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Links */}
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
                                        href="/manageEvents"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#F4C542]/20 hover:text-[#003366]"
                                    >
                                        <span className="text-lg">⚙</span>
                                        Manage Events
                                    </Link>

                                    <Link
                                        href="/joinedEvents"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#F4C542]/20 hover:text-[#003366]"
                                    >
                                        <span className="text-lg">✓</span>
                                        Joined Events
                                    </Link>

                                </div>

                                {/* Logout */}
                                <div className="border-t border-gray-100 p-2">
                                    <button
                                        onClick={handleSignOut}
                                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
                                    >
                                        <span className="text-lg">↪</span>
                                        Logout
                                    </button>
                                </div>

                            </div>
                        )}
                    </div>
                    :
                    /* Login and Signup Buttons */
                    <div className="flex items-center gap-2">
                        <Link
                            href="/signin"
                            className="rounded-lg border border-[#003366] px-4 py-2.5 text-sm font-semibold text-[#003366] transition-colors duration-200 hover:bg-[#003366] hover:text-white"
                        >
                            Login
                        </Link>

                        <Link
                            href="/signup"
                            className="rounded-lg border border-[#F4C542] bg-[#F4C542] px-4 py-2.5 text-sm font-semibold text-[#003366] shadow-sm transition-colors duration-200 hover:border-[#e0b52e] hover:bg-[#e0b52e]"
                        >
                            Sign Up
                        </Link>
                    </div>
            }
        </div>
    );
};

export default UserInfo;