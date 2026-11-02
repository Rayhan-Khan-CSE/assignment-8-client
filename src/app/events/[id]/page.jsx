
import React from "react";
import Image from "next/image";
import Link from "next/link";
import EditEvent from "@/components/EditEvent";

const EventsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/events/${id}`)
    const event = await res.json();
    const joinedPeople = 24;

    const formatDate = (date) => {
        return new Date(`${date}T00:00:00`).toLocaleDateString("en-BD", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <EditEvent event = {event} />
                <Link
                    href="/events"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#003366] transition hover:text-blue-700"
                >
                    <span className="text-lg">←</span>
                    Back to All Events
                </Link>
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-200/60">
                    <div className="relative h-64 bg-gray-100 sm:h-80 lg:h-105">
                        {event.imageUrl ? (
                            <Image
                                src={event.imageUrl}
                                alt={event.title || "Event cover"}
                                width={1200}
                                height={600}
                                unoptimized
                                className="h-full w-full object-cover"
                                priority
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-gray-400">
                                No Cover Image Available
                            </div>
                        )}
                        <div className="absolute left-5 top-5">
                            <span className="rounded-full bg-[#F4C542] px-4 py-2 text-sm font-bold text-[#003366] shadow-md">
                                {event.eventType}
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-3 lg:p-10">
                        <div className="lg:col-span-2">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B68A00]">
                                Community Event
                            </p>
                            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#003366] sm:text-4xl">
                                {event.title}
                            </h1>
                            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                                Be part of a meaningful community initiative. Connect with
                                others, contribute your time, and help create a positive
                                impact through this event.
                            </p>
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                                            📍
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                Location
                                            </p>
                                            <p className="mt-1 font-bold text-[#003366]">
                                                {event.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl">
                                            📅
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                Event Date
                                            </p>

                                            <p className="mt-1 font-bold text-[#003366]">
                                                {formatDate(event.eventDate)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-xl font-bold text-[#003366]">
                                    About This Event
                                </h2>
                                <div className="mt-4 h-1 w-14 rounded-full bg-[#F4C542]"></div>
                                <p className="mt-5 whitespace-pre-line text-base leading-8 text-gray-600">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                        <aside>
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
                                <p className="text-sm font-semibold text-gray-500">
                                    Become a Volunteer
                                </p>
                                <h2 className="mt-2 text-2xl font-extrabold text-[#003366]">
                                    Make an Impact
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    Join this initiative and help make a positive difference
                                    in your community.
                                </p>
                                <div className="mt-6 rounded-2xl bg-blue-50 p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003366] text-2xl">
                                            👥
                                        </div>
                                        <div>
                                            <p className="text-3xl font-extrabold text-[#003366]">
                                                {joinedPeople}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                People Joined
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-4 border-t border-blue-100 pt-3 text-xs leading-5 text-gray-500">
                                        Community members coming together to make a difference.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4C542] px-5 py-4 font-bold text-[#003366] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#E8B92D] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
                                >
                                    Join Event
                                    <span className="text-lg">→</span>
                                </button>
                                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                                    Together, we can create meaningful change.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default EventsDetailsPage;