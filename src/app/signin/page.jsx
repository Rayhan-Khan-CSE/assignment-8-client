
"use client"
import Image from "next/image";
import logo1 from "@/assets/Google.png"
import logo2 from "@/assets/Github.png"
import { authClient, signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log(user);
        const {data, error} = await signIn.email({
            email: user.email,
            password: user.password
        });
        if(data){
            toast.success('You have signed in successfully!');
            redirect("/");
        }
        if(error){
            toast.error('Incorrect email or password!');
        }
    }

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data);
    }

    return (
        <div className="mx-auto my-10 flex w-full max-w-7xl flex-col items-center justify-center px-4">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl">
                    Welcome Back
                </h2>
                <p className="mt-3 text-sm text-gray-600 sm:text-base">
                    Sign in to explore community events and manage your profile.
                </p>
            </div>

            <form onSubmit={onSubmit} className="w-full max-w-md">
                <fieldset className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">

                    <legend className="px-2 text-lg font-semibold text-[#003366]">
                        Sign In to Hermione
                    </legend>

                    <label className="mb-2 mt-3 block text-sm font-semibold text-gray-700">
                        Email Address
                    </label>
                    <input
                        name="email"
                        type="email"
                        className="input w-full border-gray-300 bg-white text-gray-800 outline-none focus:border-[#003366] focus:outline-[#003366]"
                        placeholder="you@example.com"
                        required
                    />

                    <label className="mb-2 mt-5 block text-sm font-semibold text-gray-700">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        className="input w-full border-gray-300 bg-white text-gray-800 outline-none focus:border-[#003366] focus:outline-[#003366]"
                        placeholder="Enter your password"
                        required
                    />

                    <button
                        type="submit"
                        className="btn mt-6 w-full border-[#003366] bg-[#003366] text-base font-semibold text-white hover:border-[#00264d] hover:bg-[#00264d]"
                    >
                        Sign In
                    </button>

                    <div className="flex w-full flex-col">
                        <div className="divider my-5 text-sm text-gray-500">
                            OR CONTINUE WITH
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn flex-1 border-gray-300 bg-white text-gray-700 hover:border-[#003366] hover:bg-gray-50"
                        >
                            <Image src={logo1} height={20} width={20} alt="Google logo" />
                            Google
                        </button>

                        <button
                            type="button"
                            onClick={handleGithubSignIn}
                            className="btn flex-1 border-gray-300 bg-white text-gray-700 hover:border-[#003366] hover:bg-gray-50"
                        >
                            <Image src={logo2} height={20} width={20} alt="GitHub logo" />
                            GitHub
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Do not have an account?{" "}
                            <Link
                                href="/signup"
                                className="font-semibold text-[#003366] underline-offset-4 hover:text-[#F4C542] hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </fieldset>
            </form>

            <Link
                href="/"
                className="mt-6 text-sm font-medium text-[#003366] transition-colors hover:text-[#b38b00]"
            >
                ← Back to Home
            </Link>
        </div>
    );
};

export default SignInPage;