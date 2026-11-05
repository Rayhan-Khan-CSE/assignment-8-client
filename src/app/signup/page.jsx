"use client";

import Image from "next/image";
import logo1 from "../../assets/Google.png";
import { redirect } from "next/navigation";
import { authClient, signUp } from "../../lib/auth-client";
import React from "react";
import { toast } from "react-toastify";
import Link from "next/link";

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());

        if (
            !user.name.trim() ||
            !user.email.trim() ||
            !user.password ||
            !user.image.trim()
        ) {
            toast.error("Please fill in all fields!");
            return;
        }

        if (user.password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        if (!/[A-Z]/.test(user.password)) {
            toast.error("Password must contain at least one uppercase letter!");
            return;
        }

        if (!/[a-z]/.test(user.password)) {
            toast.error("Password must contain at least one lowercase letter!");
            return;
        }

        console.log(user);

        const { data, error } = await signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user?.image
        });

        if (data) {
            toast.success("Account created successfully!");
            redirect("/signin");
        }

        if (error) {
            toast.error("Invalid email or password!");
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data);
    };

    return (
        <div className="mx-auto my-12 flex w-full max-300 flex-col items-center justify-center px-4 sm:px-6">

            <div className="mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B68A00]">
                    Welcome to Hermione
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl">
                    Create Your Account
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
                    Join our community to discover events, connect with people,
                    and make a meaningful impact.
                </p>

                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F4C542]" />
            </div>

            <form onSubmit={onSubmit} className="w-full max-w-lg">
                <fieldset className="fieldset rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">

                    <legend className="px-2 text-lg font-bold text-[#003366]">
                        Sign Up
                    </legend>

                    <label className="label text-sm font-semibold text-[#003366]">
                        Full Name
                    </label>

                    <input
                        name="name"
                        type="text"
                        required
                        className="input w-full border-gray-300 bg-white text-gray-800 outline-none focus:border-[#003366] focus:outline-[#003366]"
                        placeholder="e.g. Rayhan Khan"
                    />

                    <label className="label mt-3 text-sm font-semibold text-[#003366]">
                        Email Address
                    </label>

                    <input
                        name="email"
                        type="email"
                        required
                        className="input w-full border-gray-300 bg-white text-gray-800 outline-none focus:border-[#003366] focus:outline-[#003366]"
                        placeholder="you@example.com"
                    />

                    <label className="label mt-3 text-sm font-semibold text-[#003366]">
                        Password
                    </label>

                    <input
                        name="password"
                        type="password"
                        required
                        className="input w-full border-gray-300 bg-white text-gray-800 outline-none focus:border-[#003366] focus:outline-[#003366]"
                        placeholder="use a strong password"
                    />

                    <div className="mt-2 text-xs leading-6 text-gray-500">
                        <p className="font-semibold text-[#003366]">
                            Password Requirements:
                        </p>
                        <p>• At least 6 characters long</p>
                        <p>• At least one uppercase letter (A-Z)</p>
                        <p>• At least one lowercase letter (a-z)</p>
                    </div>

                    <label className="label mt-3 text-sm font-semibold text-[#003366]">
                        Image URL
                    </label>

                    <input
                        name="image"
                        type="url"
                        required
                        className="input w-full border-gray-300 bg-white text-gray-800 outline-none focus:border-[#003366] focus:outline-[#003366]"
                        placeholder="Image URL"
                    />

                    <button
                        type="submit"
                        className="btn mt-5 w-full border-[#003366] bg-[#003366] text-base font-bold text-white transition hover:border-[#004080] hover:bg-[#004080]"
                    >
                        Create Account
                    </button>

                    <div className="divider my-5 text-sm text-gray-400">
                        OR CONTINUE WITH
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn h-auto min-h-12 w-full border-gray-300 bg-white px-3 text-sm font-semibold text-gray-700 hover:border-[#003366] hover:bg-slate-50"
                        >
                            <Image
                                src={logo1}
                                height={20}
                                width={20}
                                alt="Google logo"
                            />
                            Continue with Google
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link
                                href="/signin"
                                className="font-bold text-[#003366] transition hover:text-[#B68A00]"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>

                </fieldset>
            </form>

            <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#003366]"
            >
                <span aria-hidden="true">←</span>
                Back to Home
            </Link>

        </div>
    );
};

export default SignUpPage;