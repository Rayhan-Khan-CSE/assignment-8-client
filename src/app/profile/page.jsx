"use client"
import { authClient } from "../../lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
const ProfilePage = () => {
    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUser = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.updateUser({
            name: newUser.name,
            image: newUser.image
        });
        if (error) {
            toast.error("Failed to update profile!");
        } else if (data) {
            toast.success("Profile updated successfully!");
            redirect("/profile/update");
        }
    };
    const { data: session } = authClient.useSession();
    const user = session?.user;
    if (!user) return redirect("/");
    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success("Signed out successfully!");
    };
    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F4C542]/20 px-4 py-2 text-sm font-bold text-[#003366]">
                        <span className="h-2 w-2 rounded-full bg-[#F4C542]"></span>
                        ACCOUNT SETTINGS
                    </span>
                    <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#003366] sm:text-4xl">
                        My Profile
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                        Manage your personal information and keep your
                        Hermione account up to date.
                    </p>
                </div>
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="h-2 bg-[#F4C542]"></div>
                    <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div className="flex min-w-0 items-center gap-5">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-[#F4C542] bg-slate-100 shadow-sm sm:h-24 sm:w-24">
                                {user?.image ? (
                                    <Image
                                        width={96}
                                        height={96}
                                        src={user.image}
                                        alt="Profile picture"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <CgProfile className="text-6xl text-[#003366]" />
                                )}
                            </div>
                            <div className="min-w-0">
                                <h2 className="truncate text-xl font-extrabold text-[#003366] sm:text-2xl">
                                    {user?.name}
                                </h2>
                                <p className="mt-2 break-all text-sm text-slate-500">
                                    {user?.email}
                                </p>
                                <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                    Account Active
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 text-sm font-semibold text-red-600 transition duration-200 hover:border-red-500 hover:bg-red-50"
                        >
                            <span className="text-lg">↪</span>
                            Sign Out
                        </button>
                    </div>
                </div>
                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
                        <h2 className="text-xl font-extrabold text-[#003366] sm:text-2xl">
                            Personal Information
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Update your display name and profile photo.
                        </p>
                    </div>
                    <div className="p-6 sm:p-8">
                        <form onSubmit={handleUpdateUser}>
                            <fieldset className="flex flex-col gap-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        defaultValue={user?.name || ""}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="image"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Profile Photo URL
                                    </label>
                                    <input
                                        id="image"
                                        name="image"
                                        type="url"
                                        defaultValue={user?.image || ""}
                                        placeholder="Enter your profile image URL"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10"
                                    />
                                    <p className="mt-2 text-xs text-slate-400">
                                        Paste a valid image URL to update your profile picture.
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={user?.email || ""}
                                        readOnly
                                        className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 outline-none"
                                    />
                                    <p className="mt-2 text-xs text-slate-400">
                                        Your email address cannot be changed here.
                                    </p>
                                </div>
                                <div className="mt-2 border-t border-slate-100 pt-5">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#003366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-[#00264d] sm:w-auto"
                                    >
                                        <span>Save Changes</span>
                                        <span className="text-lg text-[#F4C542]">→</span>
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-xs leading-6 text-slate-500">
                        Your Hermione account helps you connect with community
                        events and make a meaningful difference.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;